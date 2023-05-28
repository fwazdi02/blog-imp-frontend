import { Outlet } from "react-router-dom"
import { Container } from "@chakra-ui/react"

function App() {
    return (
        <Container maxW="md" h="100vh">
            <Outlet />
        </Container>
    )
}

export default App
