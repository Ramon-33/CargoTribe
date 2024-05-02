import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zmucpipjwaxsasizjdug.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptdWNwaXBqd2F4c2FzaXpqZHVnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzAxNzMzNSwiZXhwIjoyMDAyNTkzMzM1fQ.2D1XoLbkCJOXhOqnRPnsI0_uXq96ZNECYTinpYeFDkI';
const supabase = createClient(supabaseUrl, supabaseKey);


export const COLUMNS = [
  {
    Header: "ID",
    accessor: "id",
    className: "wd-4p borderrigth",
    hidden: true,
  },
  {
    Header: "Agent",
    accessor: "Agent",
    className: "wd-20p borderrigth",
  },
  {
    Header: "Fullname",
    accessor: "Firstname",
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
  const [updatedData, setUpdatedData] = useState({});


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
      initialState: {
        sortBy: [{ id: 'id', desc: false }] // Sort by ID column in ascending order
      }
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

  const handleSave = async () => {
    try {
      const { data, error } = await supabase
        .from('customers')
        .update(updatedData)
        .eq('id', selectedRow.original.id);
      if (error) {
        throw error;
      }
      console.log("Record updated successfully:", data);
      // Close the modal after successful update

    // Update the row in the data
    const updatedRow = { ...selectedRow.original, ...updatedData };

    // Update the state with the updated data
    setData(data => data.map(row => row.id === selectedRow.original.id ? updatedRow : row));

      setShowModal(false);
    } catch (error) {
      console.error("Error updating record:", error.message);
    }
  };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  
  //   // If Firstname or Lastname is being updated, update Fullname accordingly
  //   if (name === "Firstname" || name === "Lastname") {
  //     // Extract the updated Firstname and Lastname from the updatedData object
  //     const updatedFirstname = name === "Firstname" ? value : updatedData.Firstname || selectedRow.original.Firstname;
  //     const updatedLastname = name === "Lastname" ? value : updatedData.Lastname || selectedRow.original.Lastname;
  
  //     // Update Fullname by concatenating updated Firstname and Lastname
  //     const updatedFullname = `${updatedFirstname} ${updatedLastname}`;
  
  //     // Update updatedData with the new Fullname value
  //     setUpdatedData({ ...updatedData, Fullname: updatedFullname });
  //   } else {
  //     // If other fields are being updated, update updatedData directly
  //     setUpdatedData({ ...updatedData, [name]: value });
  //   }
  // };

    const handleInputChange = (event) => {
    const { name, value } = event.target;
      setUpdatedData({ ...updatedData, [name]: value });
    
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
            <Modal.Title>Contact Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Form.Label className="form-label">Agent</Form.Label>{" "}
              <Form.Control
                name="Agent"
                placeholder="Enter Agent"
                type="text"
                defaultValue={selectedRow.original.Agent}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Form.Label className="form-label">Fullname</Form.Label>{" "}
              <Form.Control
                name="Fullname"
                placeholder="Enter Fullname"
                type="text"
                defaultValue={`${selectedRow.original.Firstname} ${selectedRow.original.Lastname}`}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Form.Label className="form-label">Firstname</Form.Label>{" "}
              <Form.Control
                name="Firstname"
                placeholder="Enter Firstname"
                type="text"
                defaultValue={selectedRow.original.Firstname}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Form.Label className="form-label">Lastname</Form.Label>{" "}
              <Form.Control
                name="Lastname"
                placeholder="Enter Lastname"
                type="text"
                defaultValue={selectedRow.original.Lastname}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Form.Label className="form-label">Email</Form.Label>{" "}
              <Form.Control
                name="Email"
                placeholder="Enter Email"
                type="email"
                defaultValue={selectedRow.original.Email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Form.Label className="form-label">Phone</Form.Label>{" "}
              <Form.Control
                name="Phone"
                placeholder="Enter Phone"
                type="text"
                defaultValue={selectedRow.original.Phone}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Form.Label className="form-label">Mobile</Form.Label>{" "}
              <Form.Control
                name="Mobile"
                placeholder="Enter Mobile"
                type="text"
                defaultValue={selectedRow.original.Mobile}
                onChange={handleInputChange}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
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
