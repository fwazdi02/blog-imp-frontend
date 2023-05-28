import { ChakraProvider } from "@chakra-ui/react"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import { useEffect } from "react"
import axios from "./utils/axios"
import MainContent from "./layouts"
import Login from "./pages/Login"
import Post from "./pages/Post"

function App() {
    const navigate = useNavigate()
    const location = useLocation()
    const token = localStorage.token
    const path = location.pathname
    useEffect(() => {
        if (path !== "/" && !token) {
            navigate("/")
        }
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
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
