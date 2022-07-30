import React, { useState, useEffect } from "react";
import ItemsPaging from "./ItemsPaging";

const UsersTable = ({ users }) => {
  const [currentPg, setCurrentPg] = useState(1);
  const [itemsPerPage] = useState(5);
  const indexLastItem = currentPg * itemsPerPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  const currentUsers = users.slice(indexFirstItem, indexLastItem);

  useEffect(() => {
    setCurrentPg(1);
  }, [users.length]);

  const paging = (pageNum) => {
    setCurrentPg(pageNum);
  };

  return (
    <div className="letter-spacing mx-1 mt-3 table-responsive">
      <table className="table table-hover caption-top">
        <caption>Users</caption>
        <thead className="bg-purple-dark text-white">
          <tr>
            <th scope="col" className="px-3 align-middle">
              Email
            </th>
            <th scope="col" className="px-3 align-middle">
              First Name
            </th>
            <th scope="col" className="px-3 align-middle">
              Last Name
            </th>
            <th scope="col" className="px-3 align-middle">
              Role
            </th>
            <th scope="col" className="px-3 align-middle">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider bg-light">
          {currentUsers?.map((user) => (
            <tr key={user.id} className="align-middle">
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.role.name}</td>
              <td>{user.state ? "Active" : "Inactive"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ItemsPaging
        itemsPerPage={itemsPerPage}
        allItems={users.length}
        paging={paging}
        currentPg={currentPg}
      />
    </div>
  );
};

export default UsersTable;
