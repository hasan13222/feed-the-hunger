import fakeData from "../../../public/foods.json";
import * as React from "react";
import { Link } from "react-router-dom";
import { useTable } from "react-table";

const ManageSingleFood = () => {
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
        <div className="bg-emerald-50 py-7">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-5">Check Your Food Status</h2>
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
                  <td className="border border-gray-200 py-3 px-6">Pending <Link className="text-emerald-400 underline">Deliver</Link></td>
                </tr>
              );
            })}
          </tbody>
        </table>
            </div>
        </div>
    </>
  )
}

export default ManageSingleFood