import React from 'react'

const Pagination = ({postsPage, totalPosts, paginate, nextPageOfPosts, prevPageOfPosts}) =>{
    const pageNumbers : number[] = []

    for(let i:number = 1; i<= Math.ceil(totalPosts/postsPage); i++) {
        pageNumbers.push(i)
    }

    return(
        <div className="paginationBox">
            <ul className="pagination">
                <div className="iconLeft">
                    {prevPageOfPosts}
                </div>
                <div className='numbers'>
                {   
                    
                    pageNumbers.map(number =>(
                        <li className="page-item" key={number}>
                        

                            <button className="page-link" onClick={()=>paginate(number)}>
                                {number}
                            </button> 
                        </li>   
                    ))
                }
                
                </div>
                <div className="iconRight">
                    {nextPageOfPosts}
                </div>
             </ul>
        </div>
    )
}
export default Pagination;