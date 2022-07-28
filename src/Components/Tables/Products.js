import React, { useState, useEffect } from "react";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import ItemsPaging from "./ItemsPaging";

const ProductsTable = ({ products, ruta }) => {
  const [currentPg, setCurrentPg] = useState(1);
  const [itemsPerPage] = useState(5);
  const indexLastItem = currentPg * itemsPerPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  const currentProducts = products.slice(indexFirstItem, indexLastItem);

  useEffect(() => {
    setCurrentPg(1);
  }, [products.length]);

  const paging = (pageNum) => {
    setCurrentPg(pageNum);
  };

  let numItems;

  function returnedInformation(indexFirstItem) {
    numItems = products.length;
    return currentProducts?.map((product, index) => (
      <tr key={product.id} className="align-middle">
        <th scope="row">{index + indexFirstItem + 1}</th>
        <td>{product.name}</td>
        <td>
          {product.images.length ? (
            <div className="d-flex align-items-center justify-content-center">
              {product.images.map((image, index) => (
                <img
                  src={image.url_image}
                  alt={`Image${index}`}
                  height={"50px"}
                  key={index}
                />
              ))}
            </div>
          ) : (
            "No images"
          )}
        </td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
        <td>{product.state ? "Active" : "Inactive"}</td>
        <td className="d-flex justify-content-center gap-3">
          <Link
            to={`${ruta}${product.id}`}
            className="btn btn-aqua p-2 d-flex align-items-center rounded-circle"
            title="Edit"
          >
            <MdModeEdit size={"1.5rem"} />
          </Link>
        </td>
      </tr>
    ));
  }

  return (
    <div className="letter-spacing mx-1 mt-3 table-responsive">
      <table className="table table-hover caption-top table-borderless">
        <caption>List of Products</caption>
        <thead className="bg-purple-dark text-white">
          <tr>
            <th scope="col" className="px-3">
              #
            </th>
            <th scope="col">Product Name</th>
            <th scope="col">Images</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">State</th>
            <th scope="col" className="px-3">
              Edit
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider bg-light">
          {returnedInformation(indexFirstItem)}
        </tbody>
      </table>
      <ItemsPaging
        itemsPerPage={itemsPerPage}
        allItems={numItems}
        paging={paging}
        currentPg={currentPg}
      />
    </div>
  );
};

export default ProductsTable;
