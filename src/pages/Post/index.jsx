import { useState, useEffect } from "react"
import axios from "../../utils/axios"
import PostItem from "../../components/PostItem"
import { Text } from "@chakra-ui/react"
function Post() {
    const [postData, setPostData] = useState([])
    const fetchPost = async () => {
        const response = await axios.get("/api/posts")
        if (response.data.success) {
            setPostData(response.data.data)
        }
    }
    useEffect(() => {
        fetchPost()
    }, [])
    return (
        <>
            <Text as="b" fontSize="3xl" marginBottom="1.5rem">
                List of Post
            </Text>
            {postData.map((item, index) => (
                <PostItem data={item} key={index}></PostItem>
            ))}
        </>
    )
}

export default Post
