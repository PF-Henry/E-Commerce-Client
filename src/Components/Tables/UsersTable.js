import React, { useState } from "react";
import ItemsPaging from "./ItemsPaging";

const UsersTable = ({ users }) => {

  const [currentPg, setCurrentPg] = useState(1);
  const [itemsPerPage] = useState(5);
  const indexLastItem = currentPg * itemsPerPage; 
  const indexFirstItem = indexLastItem - itemsPerPage; 
  const currentUsers = users.slice(indexFirstItem, indexLastItem);

  const paging = (pageNum) => {
    setCurrentPg(pageNum)
  }

  return (
    <div className="letter-spacing mx-1 mt-3">
      <table className="table table-hover caption-top table-borderless">
        <caption>Users</caption>
        <thead className="bg-purple-dark text-white">
          <tr>
            <th scope="col" className="px-3">User ID</th>
            <th scope="col">Username</th>
            <th scope="col" className="px-3">User Type</th>
          </tr>
        </thead>
        <tbody className="table-group-divider bg-light">
          { currentUsers?.map((user) => (
            <tr key={user.id} className="align-middle">
              <th scope="row">{user.id}</th>
              <td>{user.username}</td>
              <td>{user.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ItemsPaging 
        itemsPerPage={itemsPerPage}
        allItems={users.length}
        paging={paging}
      />
    </div>
  );
};

export default UsersTable;