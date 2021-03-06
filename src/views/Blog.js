import useFetch from "../custom/fetch";
import './Blogs.scss'
import { Link, useHistory } from "react-router-dom"

const Blog = () => {
    let history = useHistory();
    const { data: dataBlogs, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false)
    let newData = [];

    if(dataBlogs && dataBlogs.length >0) {
        // let newData = dataBlogs.slice(90) //lấy phần tử thứ 90 trở đi
        newData = dataBlogs.slice(0, 10) //lấy phần tử thứ 0 -> 10
        console.log('check data ', newData)
    }

    const handleAddNew = () => {
        history.push('/add-new-blog')
    }

    return (
        <>
            <div><button className="btn-add-new" onClick={handleAddNew}>+ Add new blog</button></div>
            <div className="blog-container">
                {isLoading === false && newData && newData.length > 0 && newData.map(item => {
                    return (
                        <div className="single-block" key={item.id}>
                            <div className="title">{item.title}</div>
                            <div className="content">{item.body}</div>
                            <button>
                                <Link to={`/blog/${item.id}`}>View detail</Link>                           
                            </button>
                        </div>
                    )
                })}
                {isLoading === true &&
                    <div>Loading data...</div>
                }
            </div>
        </>
    )
}

export default Blog;