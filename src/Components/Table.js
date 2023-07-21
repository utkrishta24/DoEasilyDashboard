import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import SearchBar from './Search';
import { FaHome, FaMinusSquare, FaPen, FaTrashAlt } from 'react-icons/fa'

const tableData = [
  {
    id: 1,
    partyName: "John Doe",
    mobile: "1234567890",
    gold: 10,
    silver: 5,
    amount: 5000,
  },
  {
    id: 1,
    partyName: "Jane Doe",
    mobile: "0987654321",
    gold: 110,
    silver: 50,
    amount: 15000,
  },

];

function MainTable() {

  const [filteredData, setFilteredData] = useState(tableData);

  const handleSearch = (query) => {
    const lowercaseQuery = query.toLowerCase();
    const filteredRows = tableData.filter((row) =>
      row.partyName.toLowerCase().includes(lowercaseQuery)
    );
    setFilteredData(filteredRows);
  };

  return (
    <div>
      <h1>Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="karigar-summary-page-table">
        <div className="table-heading">
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Party Name</th>
                <th>Mobile</th>
                <th>Gold</th>
                <th>Silver</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.partyName}</td>
                  <td>{row.mobile}</td>
                  <td>{row.gold} gm</td>
                  <td>{row.silver} kg</td>
                  <td>₹ {row.amount}</td>
                  <td><FaPen /><FaTrashAlt /></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default MainTable;