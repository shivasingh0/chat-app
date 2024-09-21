import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    console.log("hello");
  };

  return (
    <VStack spacing={"5px"}>
      <FormControl id="email" isRequired>
        <FormLabel>Enter your Email</FormLabel>
        <Input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
          value={password}
            type={show ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button onClick={() => setShow(!show)} h={"1.75rem"} size={"sm"}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button onClick={handleSubmit} width={"100%"} colorScheme="blue">
        Login
      </Button>
      <Button onClick={()=>{
        setEmail("guest@example.com");
        setPassword("123456");
      }} variant={"solid"} width={"100%"} colorScheme="red">
        Use Guest login
      </Button>
    </VStack>
  );
};

export default Login;
