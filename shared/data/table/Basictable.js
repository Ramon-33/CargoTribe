import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zmucpipjwaxsasizjdug.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptdWNwaXBqd2F4c2FzaXpqZHVnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzAxNzMzNSwiZXhwIjoyMDAyNTkzMzM1fQ.2D1XoLbkCJOXhOqnRPnsI0_uXq96ZNECYTinpYeFDkI';
const supabase = createClient(supabaseUrl, supabaseKey);

export const COLUMNS = [
  {
    Header: "Agent",
    accessor: "Agent",
    className: "wd-20p borderrigth",
  },
  {
    Header: "Fullname",
    accessor: "Fullname",
    className: "wd-25p borderrigth",
  },
  {
    Header: "Email",
    accessor: "Email",
    className: "wd-20p borderrigth",
  },
  {
    Header: "Phone",
    accessor: "Phone",
    className: "wd-15p borderrigth",
  },
  {
    Header: "Mobile",
    accessor: "Mobile",
    className: "wd-20p borderrigth",
  },
];

export const BasicTable = () => {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from('customers').select('*');
        if (error) {
          throw error;
        }
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    prepareRow,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setShowModal(true);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="d-flex">
        <select
          className=" mb-4 selectpage border me-1"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table {...getTableProps()} className="table table-hover mb-0">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr key={Math.random()} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th key={Math.random()}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={column.className}
                >
                  <span className="tabletitle">{column.render("Header")}</span>
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i className="fa fa-angle-down"></i>
                      ) : (
                        <i className="fa fa-angle-up"></i>
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr key={rowIndex} {...row.getRowProps()} onClick={() => handleRowClick(row)}>
                {row.cells.map((cell, cellIndex) => {
                  return (
                    <td key={cellIndex} className="borderrigth" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-block d-sm-flex mt-4 ">
        <span className="">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span className="ms-sm-auto ">
          <Button
            variant=""
            className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {" Previous "}
          </Button>
          <Button
            variant=""
            className="btn-default tablebutton me-2 my-1"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {" << "}
          </Button>
          <Button
            variant=""
            className="btn-default tablebutton me-2 my-1"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {" < "}
          </Button>
          <Button
            variant=""
            className="btn-default tablebutton me-2 my-1"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {" > "}
          </Button>
          <Button
            variant=""
            className="btn-default tablebutton me-2 my-1"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {" >> "}
          </Button>
          <Button
            variant=""
            className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {" Next "}
          </Button>
        </span>
      </div>
      {selectedRow && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Row Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
            <Form.Label className="form-label mg-b-0"><strong>Agent:</strong></Form.Label>{selectedRow.original.Agent}
            </div>
            <div>
              <strong>Fullname:</strong> {selectedRow.original.Fullname}
            </div>
            <div>
              <strong>Email:</strong> {selectedRow.original.Email}
            </div>
            <div>
              <strong>Phone:</strong> {selectedRow.original.Phone}
            </div>
            <div>
              <strong>Mobile:</strong> {selectedRow.original.Mobile}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span className="d-flex ms-auto">
      <Form.Control
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4"
        placeholder="Search..."
      />
    </span>
  );
};