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

const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();

  const handleSubmit = () => {
    console.log("hello");
  };

  return (
    <VStack spacing={"5px"}>
      <FormControl id="first-name" isRequired>
        <FormLabel>Enter your Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Enter your Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
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
      <FormControl id="confirm-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <InputRightElement width={"4.5rem"}>
            <Button onClick={() => setShow(!show)} h={"1.75rem"} size={"sm"}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="pic" isRequired>
        <FormLabel>Upload Profile</FormLabel>
        <Input
          type={"file"}
          placeholder="Pic"
          accept="image/*"
          onChange={(e) => setPic(e.target.value[0])}
        />
      </FormControl>

      <Button onClick={handleSubmit} width={"100%"} colorScheme="blue">
        Sign up
      </Button>
    </VStack>
  );
};

export default Signup;
