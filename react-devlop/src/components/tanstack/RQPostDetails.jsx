import { useParams } from "react-router-dom";
import {useQuery} from '@tanstack/react-query'
import axios from "axios";

const RQPostDetails = () => {

    const params = useParams()
    const { postId } = params;

    const singlePostQF = async (postId) => {
        return axios.get(`http://localhost:4000/posts/${postId}`)
    }

    const {data , isLoading, isError, error}= useQuery({
        queryKey : ["posts" , postId],
        queryFn : () => singlePostQF(postId)
    })

     if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error fetching posts! {error.message}</p>;
    }

    console.log(data)

    return (
        <div>
            <p> single Post Page </p>

            {
                data && data.data &&
                <div>
                   <h1>{data.data.title}</h1>
                   <h3>{data.data.body}</h3>
                   <p>{data.data.author}</p>
                </div>
            }
        </div>
    )

}

export default RQPostDetails;