import React from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductsTable = ({ products, name, ruta }) => {
  return (
    <div className="letter-spacing">
      <table className="table table-hover caption-top">
        <caption>List of {name}</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {products.map((product, index) => (
            <tr key={product.id}>
              <th scope="row">{index + 1}</th>
              <td>{product.name}</td>
              <td className="d-flex justify-content-center gap-3">
                <Link
                  to={`${ruta}${product.id}`}
                  className="btn btn-warning py-1 d-flex align-items-center"
                >
                  Edit <MdModeEdit size={"1.5rem"} />
                </Link>
                <div className="btn btn-danger py-1 d-flex align-items-center">
                  Delete <MdDelete size={"1.5rem"} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
