import React from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductsTable = ({ products, name, ruta }) => {
  return (
    <div className="letter-spacing mx-1 mt-3">
      <table className="table table-hover caption-top table-borderless">
        <caption>List of {name}</caption>
        <thead className="bg-purple-dark text-white">
          <tr>
            <th scope="col" className="px-3">
              #
            </th>
            <th scope="col">Product Name</th>
            <th scope="col" className="px-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider bg-light">
          {products.map((product, index) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
