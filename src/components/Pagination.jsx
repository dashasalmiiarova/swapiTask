import React from 'react';

const Pagination = ({ paginate, pageNumbers }) => {
    return(
        <div className="pagination-div">
            <ul className="pagination-ul">
            {
                pageNumbers.map(number => (
                    <li className="pagination-li" key={number} onClick={() => paginate(number) }>
                        {number}
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default Pagination;