import React from "react";
import './ItemsPaging.css';


const ItemsPaging = ({ itemsPerPage, allItems, paging }) => {
    const pageNums = [];

    for (let i = 1; i <= Math.ceil(allItems / itemsPerPage); i++) {
        pageNums.push(i)
    }

    return (
        <nav>
            <ul className="pagination-container">
                {
                    pageNums && pageNums.map(num => {
                        return (
                            <li className="pagination-container-item" key={num}>
                                <a onClick={() => paging(num)}>{num}</a>
                            </li>  
                        )  
                    })
                }
            </ul>
        </nav>
    )
}

export default ItemsPaging;