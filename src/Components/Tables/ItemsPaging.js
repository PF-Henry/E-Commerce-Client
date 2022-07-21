import React from "react";


const ItemsPaging = ({ itemsPerPage, allItems, paging }) => {
    const pageNums = [];

    for (let i = 1; i <= Math.ceil(allItems / itemsPerPage); i++) {
        pageNums.push(i)
    }

    return (
        <nav>
            <ul>
                {
                    pageNums && pageNums.map(num => {
                        return (
                            <li key={num}>
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