import fakeData from "../../../public/foods.json";
import * as React from "react";
import { Link } from "react-router-dom";
import { useTable } from "react-table";

function ManageFoods() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Food Name",
        accessor: "food_name",
      },
      {
        Header: "Donator Name",
        accessor: "donator_name",
      },
      {
        Header: "Food Qty",
        accessor: "food_qty",
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
                <th className="border border-gray-200 py-3 px-6">Update</th>
                <th className="border border-gray-200 py-3 px-6">Delete</th>
                <th className="border border-gray-200 py-3 px-6">Manage</th>
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
                  <td className="border border-gray-200 py-3 px-6"><Link className="text-emerald-400 font-semibold">Edit</Link></td>
                  <td className="border border-gray-200 py-3 px-6"><Link className="text-emerald-400 font-semibold">Delete</Link></td>
                  <td className="border border-gray-200 py-3 px-6"><Link className="text-emerald-400 font-semibold">Manage</Link></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ManageFoods;