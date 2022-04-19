import { useParams, useHistory } from "react-router-dom";
import useFetch from "../custom/fetch";
import './Blogs.scss'

const DetailBlog = () => {

    let { id } = useParams();
    let history = useHistory();

    const { data: dataBlogsDetail, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false)

    const handleBackData = () => {
        history.push("/blog");
    }

    return (
        <>
            <div><span onClick={handleBackData}>&lt;--Back </span></div>
            <div className="block-detail">
                {dataBlogsDetail &&
                    <>
                        <div className="title">
                            Blog ID : {id} --- {isLoading === true ? 'Loading data ....' : dataBlogsDetail.title }
                        </div>
                        <div className="content">
                            {dataBlogsDetail.body}
                        </div>
                    </>
                }

            </div>
        </>
    )

}

export default DetailBlog;