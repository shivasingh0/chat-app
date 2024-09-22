import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosInstance/baseUrl";

const Login = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      const response = await axiosInstance.post("/user/login", formData);
      console.log(response.data);
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      toast({
        title: "Login successful",
        description: "You have been successfully logged in",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/chats");
    } catch (error) {
      console.error("Login error:", error.response?.data?.message || error.message);
      toast({
        title: "Login failed",
        description: error.response?.data?.message || "An error occurred",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const useGuestLogin = () => {
    setFormData({ email: "guest@example.com", password: "123456" });
  };

  return (
    <form onSubmit={onSubmit}>
      <VStack spacing={"5px"}>
        <FormControl isInvalid={errors.email}>
          <FormLabel>Enter your Email</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.password}>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <InputRightElement width={"4.5rem"}>
              <Button onClick={() => setShow(!show)} h={"1.75rem"} size={"sm"}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          width={"100%"}
          colorScheme="blue"
          isLoading={loading}
        >
          Login
        </Button>
        <Button
          onClick={useGuestLogin}
          variant={"solid"}
          width={"100%"}
          colorScheme="red"
        >
          Use Guest login
        </Button>
      </VStack>
    </form>
  );
};

export default Login;
