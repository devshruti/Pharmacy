import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Heading
  } from "@chakra-ui/react";
  import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
  import { BiMailSend } from "react-icons/bi";
  
  const SocialButton = ({ children, label, href }) => {
    return (
      <chakra.button
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        rounded={"full"}
        w={8}
        h={8}
        cursor={"pointer"}
        as={"a"}
        href={href}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}>
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
           columns={{ base: 1, sm: 2, md: 4 }} spacing={29}>
           
           <Stack align={'flex-start'}>
          <Heading as='h4' size='md'>Product</Heading>
            <Link href={'#'}>About Us</Link>
            <Stack direction={'row'} align={'center'} spacing={10}>
              <Link href={'#'}>Carrers</Link>
              
            </Stack>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Partnerwith PharmEasy</Link>
            <Link href={'#'}>Sell in PharmaEasy</Link>
            <br></br>
            <Heading as='h4' size='md'>Our Services</Heading>
            <Link href={'#'}>Order Medicines</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>Health Care Products</Link>
              
            </Stack>
            <Link href={'#'}>Lab Tests</Link>
            <Link href={'#'}>Find Nearest Collection Center</Link>
           {/* first row */}
          </Stack>
          <Stack align={'flex-start'}>
            <Heading as='h4' size='md'>Featured Categories</Heading>
            <Link href={'#'}>Pet Care</Link>
            <Link href={'#'}>Personal Care</Link>
            <Link href={'#'}>HealthCare</Link>
            <Link href={'#'}>Health Food And Drinks</Link>
            <Link href={'#'}>Beauty</Link>
            <Link href={'#'}>Elderly Care</Link>
            <Link href={'#'}>Home Care</Link>
            <Link href={'#'}>Mother and Baby Care</Link>
            <Link href={'#'}>Skin Care</Link>
            <Link href={'#'}>Fitness Supplements</Link>
            <Link href={'#'}>Diebetics Care Care</Link>
            <Link href={'#'}>Sexual Wellness</Link>
            <Link href={'#'}>Ayurvedic</Link>
            <Link href={'#'}>Accessories</Link>
            <Link href={'#'}>Top Products</Link>
          </Stack>
          <Stack align={'flex-start'} >
            <Heading as='h4' size='md'>Need help</Heading>
            <Link href={'#'}>Browse All Medicines</Link>
            <Link href={'#'}>Browse All Modules</Link>
            <Link href={'#'}>Browse All Cities</Link>
            <Link href={'#'}>Browse All Areas</Link>
            <Link href={'#'}>Browse All Stores</Link>
            <Link href={'#'}>FAQs</Link>
            <br></br>
            <Heading as='h4' size='md'>Policy Info</Heading>
            <Link href={'#'}>Editorial Info</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>Vulnerability Disclouser Policy</Link>
              
            </Stack>
            <Link href={'#'}>Terms And Condition </Link>
            <Link href={'#'}>Customer Support Policy</Link>
            <Link href={'#'}>Return Policy</Link>
          </Stack>
          <Stack align={"flex-start"} spacing={6}>
          <Heading as='h4' size='md'>Follow Us</Heading>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"#"}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
              <br></br>
              <br></br>
              <ListHeader as="h4" size='md'> Stay up to date</ListHeader>
              <Stack direction={"row"}>
                <Input
                  placeholder={"Your email address"}
                  bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                  border={0}
                  _focus={{
                    bg: "whiteAlpha.300",
                  }}
                />
                <IconButton
                  bg={useColorModeValue("green.400", "green.800")}
                  color={useColorModeValue("white", "gray.800")}
                  _hover={{
                    bg: "green.600",
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>

          </SimpleGrid>
        </Container>
      </Box>
    );
  }
  