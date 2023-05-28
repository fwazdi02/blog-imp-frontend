import { Card, CardBody, Text, Stack, Input, Button } from "@chakra-ui/react"
function PostItem(props) {
    return (
        <Card marginTop=".5rem">
            <CardBody>
                <Text fontSize="xl"> {props?.title} </Text>
                <Text color="gray.500">Created at {props?.created_at} </Text>
            </CardBody>
        </Card>
    )
}

export default PostItem
