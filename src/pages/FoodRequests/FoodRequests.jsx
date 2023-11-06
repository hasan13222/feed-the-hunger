import fakeData from "../../../public/foods.json";
import * as React from "react";
import { Link } from "react-router-dom";
import { useTable } from "react-table";

function FoodRequests() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Donator Name",
        accessor: "donator_name",
      },
      {
        Header: "Pickup Location",
        accessor: "pickup_location",
      },
      {
        Header: "Expire Time",
        accessor: "exp_time",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <div className="container mx-auto py-7">
        <h2 className="text-3xl font-bold text-center mb-5">Manage Your Foods</h2>
        <table className="mx-auto border border-gray-200" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr className="border border-gray-200" key={index} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <th className="border border-gray-200 py-3 px-6" key={index} {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
                <th className="border border-gray-200 py-3 px-6">Status</th>
                <th className="border border-gray-200 py-3 px-6">Calcel</th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <tr key={index} {...row.getRowProps()}>
                  {row.cells.map((cell, index) => (
                    <td className="border border-gray-200 py-3 px-6" key={index} {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                  <td className="border border-gray-200 py-3 px-6">Available</td>
                  <td className="border border-gray-200 py-3 px-6"><Link className="text-emerald-400 font-semibold">Cancel</Link></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FoodRequests;