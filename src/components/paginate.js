import React from 'react';

const Paginate = ( { postsPerPage, totalPosts, paginate, previousPage, nextPage, currentPage } ) => {
    const pageNumbers = [];

    for ( let i = 1; i <= Math.ceil( totalPosts / postsPerPage ); i++ ) {
        pageNumbers.push( i );
    }

    return (

        <nav aria-label="Pagination">
            <hr className="my-0"/>
            <ul className="pagination justify-content-center my-4">
                <li  className="page-item">
                    <a className="page-link" onClick={previousPage}>Prev</a>
                </li>
                {
                    pageNumbers.map((number) => (
                        <li key={number} className={ "page-item" + ( ( currentPage === number) ? " active" : "" ) }>
                            <a className="page-link" onClick={() => paginate(number)}>{ number }</a>
                        </li>
                    ))
                }
                <li onClick={nextPage} className="page-number">
                    <a className="page-link" onClick={nextPage}>Next</a>
                </li>
            </ul>
        </nav>
    );
};

export default Paginate