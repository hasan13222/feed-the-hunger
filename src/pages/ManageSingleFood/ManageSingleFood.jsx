// import fakeData from "../../../public/foods.json";
import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useTable } from "react-table";
import { ToastContainer, toast } from "react-toastify";

const ManageSingleFood = () => {
  const [data, setData] = useState([]);
  const [loadData, setLoadData] = useState(false);

  const { id } = useParams();
  const notify = () => toast("food delivered successfully");

  useEffect(() => {
    fetch(`http://localhost:5000/manage/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoadData(false);
      })
      .catch((error) => console.log(error.message));
  }, [loadData]);

  const handleDeliver = (idToChange, foodId) => {
    const changedData = {
      status: "delivered",
    };
    fetch(`http://localhost:5000/foodStatus/${idToChange}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(changedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          fetch(`http://localhost:5000/editFood/${foodId}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ foodStatus: "delivered" }),
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
          notify();
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
        Header: "Food Image",
        accessor: "foodImage",
      },
      {
        Header: "Requester Name",
        accessor: "reqName",
      },
      {
        Header: "Requester Image",
        accessor: "reqImage",
      },
      {
        Header: "Requester Email",
        accessor: "reqEmail",
      },
      {
        Header: "Request Time and Date",
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
        <title>FeedTheHunger | Manage Food Request</title>
      </Helmet>
      <div className="bg-emerald-50 py-7">
        <div className="container mx-auto">
          {data.length > 0 && (
            <h2 className="text-3xl font-bold text-center mb-5">
              Check Your Food Status
            </h2>
          )}
          {data.length === 0 && (
            <h2 className="text-3xl font-bold text-center mb-5">
              No Request for this food
            </h2>
          )}
          {data.length > 0 && (
            <table
              className="mx-auto border border-gray-200"
              {...getTableProps()}
            >
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
                      {row.cells.map((cell, cellIndex) => {
                        const srcStr = cell.render("Cell");
                        const srcVal = srcStr.props.value;
                        if (
                          srcVal.includes(".png") ||
                          srcVal.includes(".svg") ||
                          srcVal.includes(".jpg") ||
                          srcVal.includes(".jpeg")
                        ) {
                          return (
                            <>
                              <td
                                className="border border-gray-200 py-3 px-6"
                                key={cellIndex}
                                {...cell.getCellProps()}
                              >
                                <img
                                  className="w-20 h-20 object-contain"
                                  src={srcVal}
                                  alt="image"
                                />
                              </td>
                            </>
                          );
                        } else {
                          return (
                            <td
                              className="border border-gray-200 py-3 px-6"
                              key={cellIndex}
                              {...cell.getCellProps()}
                            >
                              {cell.render("Cell")}
                            </td>
                          );
                        }
                      })}
                      {data?.map((item, index) => {
                        if (index === rowIndex) {
                          return (
                            <>
                              <td className="border border-gray-200 py-3 px-6">
                                {item?.status}
                                {item?.status === "pending" && (
                                  <button
                                    onClick={() =>
                                      handleDeliver(item._id, item.foodId)
                                    }
                                    className="text-emerald-400 font-semibold underline pl-1"
                                  >
                                    Deliver
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
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ManageSingleFood;
