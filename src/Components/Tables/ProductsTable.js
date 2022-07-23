import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import ItemsPaging from "./ItemsPaging";

const Products_CategoriesTable = ({ products, name, ruta }) => {

  const [currentPg, setCurrentPg] = useState(1);
  const [itemsPerPage] = useState(5);
  const indexLastItem = currentPg * itemsPerPage; 
  const indexFirstItem = indexLastItem - itemsPerPage; 
  const currentProducts = products.slice(indexFirstItem, indexLastItem);

  const paging = (pageNum) => {
    setCurrentPg(pageNum)
  }

  let numItems;

  function returnedInformation () {
    numItems = products.length;
    return (
      currentProducts?.map((product, index) => (
        <tr key={product.id} className="align-middle">
          <th scope="row">{index + 1}</th>
          <td>{product.name}</td>
          <td className="d-flex justify-content-center gap-3">
            <Link
              to={`${ruta}${product.id}`}
              className="btn btn-aqua p-2 d-flex align-items-center rounded-circle"
              title="Edit"
            >
              <MdModeEdit size={"1.5rem"} />
            </Link>
            {/* <div className="btn btn-danger py-1 d-flex align-items-center rounded-circle">
              <MdDelete size={"1.5rem"} />
            </div> */}
          </td>
        </tr>
      ))
    )
  }

  return (
    <div className="letter-spacing mx-1 mt-3">
      <table className="table table-hover caption-top table-borderless">
        <caption>List of {name}</caption>
        <thead className="bg-purple-dark text-white">
          <tr>
            <th scope="col" className="px-3">
              #
            </th>
            { name === 'Products' ?
                <th scope="col">Product Name</th> :
                <th scope="col">Category Name</th>
            }
            <th scope="col" className="px-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider bg-light">
          { returnedInformation() }
        </tbody>
      </table>
      <ItemsPaging 
        itemsPerPage={itemsPerPage}
        allItems={numItems}
        paging={paging}
      />
    </div>
  );
};

export default Products_CategoriesTable;
