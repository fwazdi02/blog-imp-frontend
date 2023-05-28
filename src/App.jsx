import { ChakraProvider } from "@chakra-ui/react"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import MainContent from "./layouts"
import Login from "./pages/Login"
import Post from "./pages/Post"
import { useEffect } from "react"

function App() {
    const navigate = useNavigate()
    const location = useLocation()
    const token = localStorage.token
    const path = location.pathname
    useEffect(() => {
        if (path !== "/" && !token) {
            navigate("/")
        }
    })
    return (
        <ChakraProvider>
            <Routes>
                <Route path="/" element={<MainContent />}>
                    <Route index element={<Login />} />
                    <Route path="posts" element={<Post />} />
                </Route>
            </Routes>
        </ChakraProvider>
    )
}

export default App
