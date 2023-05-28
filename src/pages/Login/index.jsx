import { Card, CardBody, Text, Stack, Input, Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "../../utils/axios"

function LoginPage() {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const login = () => {
        setErrorMessage("")
        if (!email) {
            setErrorMessage("Email is required")
            return false
        }
        if (!password) {
            setErrorMessage("Password is required")
            return false
        }
        axios
            .post("auth/login", {
                email,
                password,
            })
            .then((res) => {
                if (res.data.success) {
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("user", JSON.stringify(res.data.user))
                    axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`
                    navigate("/posts")
                } else {
                    setErrorMessage(res.data.message)
                }
            })
    }

    return (
        <Card marginTop="30%">
            <CardBody>
                <Text as="b" fontSize="3xl">
                    Login
                </Text>
                <Text marginBottom="1rem">Please, enter your account</Text>
                <Stack spacing={3}>
                    <Input
                        variant="filled"
                        placeholder="Enter your email"
                        value={email}
                        onInput={(event) => setEmail(event.target.value)}
                    />
                    <Input
                        variant="filled"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onInput={(event) => setPassword(event.target.value)}
                    />
                    {errorMessage ? (
                        <Text fontSize="sm" color="red.400">
                            {errorMessage}
                        </Text>
                    ) : null}
                    <Button colorScheme="blue" onClick={login}>
                        Login
                    </Button>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default LoginPage
