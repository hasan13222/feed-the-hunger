import { useContext, useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import { AuthContext } from "../../contexts/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";

function FoodRequests() {
  const [data, setData] = useState([]);
  const [loadData, setLoadData] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://feed-the-hunger-server.vercel.app/myRequests?userEmail=${user?.email}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoadData(false);
      });
  }, [loadData]);

  const handleCancel = (idToChange, foodId) => {
    fetch(`https://feed-the-hunger-server.vercel.app/cancelRequest/${idToChange}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          fetch(`https://feed-the-hunger-server.vercel.app/editFood/${foodId}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ foodStatus: "available" }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data) {
                console.log("status changed");
              }
            })
            .catch((err) => {
              console.log(err.message);
            });
          toast("Your request has been cancelled");
          setLoadData(true);
        }
      });
  };

  const columns = useMemo(
    () => [
      {
        Header: "Food Name",
        accessor: "foodName",
      },
      {
        Header: "Donar Name",
        accessor: "donorName",
      },
      {
        Header: "Pickup Location",
        accessor: "pickup",
      },
      {
        Header: "Expire Time",
        accessor: "expTime",
      },
      {
        Header: "Request Date",
        accessor: "reqDate",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <Helmet>
        <title>FeedTheHunger | Food Requests</title>
      </Helmet>
      <div className="container mx-auto py-7">
        <h2 className="text-3xl font-bold text-center mb-5">
          Manage Your Foods
        </h2>
        <table className="mx-auto border border-gray-200" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr
                className="border border-gray-200"
                key={index}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column, index) => (
                  <th
                    className="border border-gray-200 py-3 px-6"
                    key={index}
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </th>
                ))}
                <th className="border border-gray-200 py-3 px-6">Status</th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, rowIndex) => {
              prepareRow(row);
              return (
                <tr key={rowIndex} {...row.getRowProps()}>
                  {row.cells.map((cell, cellIndex) => (
                    <td
                      className="border border-gray-200 py-3 px-6"
                      key={cellIndex}
                      {...cell.getCellProps()}
                    >
                      {" "}
                      {cell.render("Cell")}{" "}
                    </td>
                  ))}
                  {data?.map((item, index) => {
                    if (index === rowIndex) {
                      return (
                        <>
                          <td className="border border-gray-200 py-3 px-6">
                            {item?.status}
                            {item?.status === "pending" && (
                              <button
                                onClick={() =>
                                  handleCancel(item._id, item.foodId)
                                }
                                className="text-emerald-400 font-semibold underline pl-1"
                              >
                                Cancel
                              </button>
                            )}
                          </td>
                        </>
                      );
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </>
  );
}

export default FoodRequests;
