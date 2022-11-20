import { useEffect, useState } from "react";
import Post from "../Post/Post";
import Pagination from '../Pagination/Pagination';
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";

function JobList () {
    const [posts, setPost] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPage] = useState(7)
    useEffect(() => {
        fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
        .then((res) => res.json())
        .then((posts) => {
            console.log(posts)
            setPost(posts)
        })
        .catch((error) => console.log(error.message))
    },[])
    
    const lastPageIndex = currentPage * postsPage
    const firstPageIndex = lastPageIndex - postsPage
    const currentPosts = posts.slice(firstPageIndex, lastPageIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)
    
    const nextPage = () => setCurrentPage(prev => prev + 1)
    const nextPageOfPosts = <BiChevronRight onClick={nextPage}/>
    const prevPage = () => setCurrentPage(prev => prev - 1)
    const prevPageOfPosts = <BiChevronLeft onClick={prevPage}/>
    return (
        <div className="box">
            {currentPosts.map((post) => <Post {...(post as object)}/>)}
            <Pagination 
            postsPage={postsPage}
            totalPosts={posts.length}
            paginate={paginate}
            nextPageOfPosts={nextPageOfPosts}
            prevPageOfPosts={prevPageOfPosts}
            />
        </div>
    )
}
export default JobList;