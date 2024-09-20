// import { Center, Image,  Text } from '@chakra-ui/react'
// import React from 'react'
// import { useNavigate } from 'react-router'

// const Checkout = () => {
//     const navigate = useNavigate();
//     setTimeout(() => {
//         navigate('/')
//     }, 5000)

//     return (
//         <div>
//             <Center>
//                 <Text mt={"10px"} fontSize={"30px"}color={"teal.400"}>YOUR ORDER HAS BEEN PLACED </Text>
//             </Center>
//             <Center>
//             <Image mt={"25px"} w={"50%"} h={"250px"}src="https://cdn.dribbble.com/users/2185205/screenshots/7886140/02-lottie-tick-01-instant-2.gif"></Image>
//             </Center>
//         </div>
//     )
// }

// export default Checkout




import { Center, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Checkout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }, [navigate]);

    return (
        <div>
            <Center>
                <Text
                    mt={{ base: "20px", md: "10px" }} // margin-top responsive: 20px for small screens, 10px for medium+
                    fontSize={{ base: "24px", md: "30px" }} // font-size responsive: 24px for small screens, 30px for medium+
                    color="teal.400"
                    textAlign="center" // centers text on smaller screens
                >
                    YOUR ORDER HAS BEEN PLACED
                </Text>
            </Center>
            <Center>
                <Image
                    mt={{ base: "30px", md: "25px" }} // margin-top responsive
                    w={{ base: "80%", md: "50%" }} // width responsive: 80% for small screens, 50% for medium+
                    h={{ base: "200px", md: "250px" }} // height responsive: 200px for small screens, 250px for medium+
                    src="https://cdn.dribbble.com/users/2185205/screenshots/7886140/02-lottie-tick-01-instant-2.gif"
                    alt="Order placed animation"
                />
            </Center>
        </div>
    );
};

export default Checkout;
