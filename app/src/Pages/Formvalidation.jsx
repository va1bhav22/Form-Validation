import React, { useState } from "react";
import { FaUserAlt, FaLock ,FaMobileAlt} from "react-icons/fa";
import {BsCalendarDate} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
} from "@chakra-ui/react";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFAiFillMobile=chakra(FaMobileAlt)
const CFBsCalendarDate=chakra(BsCalendarDate)
const CFHiOutlineMail=chakra(HiOutlineMail)

const Formvalidation = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);
    const [user,setUser]=useState("")
    const [email,setemail]=useState("")
    const [pass,setpass]=useState("")
    const [usererror,setUserError]=useState(false)
    const [passerror,setpassError]=useState(false)
    const [emailerror,setEmailError]=useState(false)
    let emailRegix = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const LoginHandle=(e)=>{
            e.preventDefault();
            // console.log(e);

            let userVal=e.target[0].value;
            if(userVal.length<=3)
            {
                setUserError(true)
            }
            else{
                setUserError(false)
            }

            let Email=e.target[1].value;

            if(!Email.match(emailRegix))
            {
                    setEmailError(true)
            }
            else{
                setEmailError(false)
            }

            let passValue=e.target[4].value;
            if(passValue.length<=6)
            {
                setpassError(true)
            }
            else{
                setpassError(false)
            }

            
    }

//    userHandling
    const userHandler=(e)=>{
        // console.log(e.target.value.length);
        let userVal=e.target.value;
        if(userVal.length<=3)
        {
            setUserError(true)
        }
        else{
            setUserError(false)
        }
        setUser(userVal);
    }
    // /////////////////////////////

///// passsHandle////////////////////
     const passHandler=(e)=>{
        let passValue=e.target.value;
        if(passValue.length<=6)
        {
            setpassError(true)
        }
        else{
            setpassError(false)
        }
        setpass(passValue);
     }
    //  ///////////////////////////////

    const handleEmail=(e)=>{
        let Email=e.target.value;

        if(!Email.match(emailRegix))
        {
                setEmailError(true)
        }
        else{
            setEmailError(false)
        }
        setemail(Email)
    }



    return (
        <Flex
            flexDirection="column"
            height="150vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
            width="100wh"

        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar bg="teal.500" />
                <Heading color="teal.400">Welcome</Heading>
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form onSubmit={LoginHandle}>
                        <Stack
                            spacing={4}
                            p="1rem"
                            
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                            borderRadius="20px"
                            padding="30px"
                        >

                             <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300" />}
                                    />

                                    <Input value={user}  onChange={userHandler} type="text" placeholder="User Name" />
                                    
                                </InputGroup>
                            </FormControl>
                            <Box>{usererror?<Box color="red">User Name Must be More than 3 characters</Box>:""}</Box>



                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFHiOutlineMail color="gray.300" />}
                                    />

                                    <Input value={email} onChange={handleEmail} type="email" placeholder="Email Address" />
                                </InputGroup>
                            </FormControl>
                            <Box>{emailerror?<Box color="red">"Email is not valid"</Box>:""}</Box>


                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFAiFillMobile color="gray.300" />}
                                    />

                                    <Input  onChange={""} type="number" placeholder="Mobile Number" />
                                </InputGroup>
                            </FormControl>

                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFBsCalendarDate color="gray.300" />}
                                    />

                                    <Input required   type="date"  onChange={""}/>
                                </InputGroup>
                            </FormControl>

                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300" />}
                                    />

                                    <Input value={pass}
                                         onChange={passHandler} type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                    />

                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <Box>{passerror?<Box color="red">"Password is too short"</Box>:""}</Box>
                                <FormHelperText textAlign="right">
                                    <Link>forgot password?</Link>
                                </FormHelperText>
                            </FormControl>
                            
                            <Button
                                // onSubmit={}
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                            >
                                Login
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
            <Box>
                New to us?{" "}
                <Link color="teal.500" href="#">
                    Sign Up
                </Link>
            </Box>
        </Flex>
    );
};

export default Formvalidation;
