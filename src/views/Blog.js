import useFetch from "../custom/fetch";

const Blog = () => {

    const { data: dataBlogs, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false)
    let newData = [];

    if(dataBlogs && dataBlogs.length >0) {
        // let newData = dataBlogs.slice(90) //lấy phần tử thứ 90 trở đi
        newData = dataBlogs.slice(0, 10) //lấy phần tử thứ 0 -> 10
        console.log('check data ', newData)
    }
    return (
        <>
            {newData && newData.length > 0 && newData.map(item => {
                return (
                    <div className="single-block" key={item.id}>
                        <div className="title">Title: {item.title}</div>
                        <div className="content">{item.body}</div>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}

export default Blog;