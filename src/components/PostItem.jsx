import { Card, CardBody, Text, Stack, Input, Button } from "@chakra-ui/react"
function PostItem(props) {
    const item = props.data
    return (
        <Card marginTop=".5rem">
            <CardBody>
                <Text fontSize="xl"> {item?.title} </Text>
                <Text color="gray.500">Created at {item?.created_at} </Text>
            </CardBody>
        </Card>
    )
}

export default PostItem
