import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import PageSkeleton from "../PageSkeleton";
import TimPortrait from "../../assets/TimPortrait.jpg";

const Home = () => {
  return (
    <PageSkeleton>
      <Stack
        minHeight="90vh"
        direction={{ base: "column", md: "row" }}
        pb="150px"
      >
        <Flex p={8} flex={1} align="center" justify="center">
          <Stack spacing={6} w="full" maxW="lg">
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text as="span" position="relative" fontWeight="bolder">
                Welcome to my personal profile!
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} fontWeight="bold">
              I'm glad you're here, feel free to take a look around and reach
              out with any questions in my contact links below in the footer.
              <br />
              <br />I am a passionate and highly motivated full-stack software
              engineer with experience in the MERN stack as well as C, Oracle,
              Spark, and Python. I graduated from Rensselaer Polytechnic
              Institute in May 2019 with a B.S. in Computer Science and Minor in
              Management and Stevens Institute of Technology in May 2022 with a
              M.S. in Computer Science
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1} align="center" justify="center">
          <Stack spacing={6} w="full" maxW="lg" align="center">
            <Image
              alt={"Timothy Wang Photo"}
              boxSize="300px"
              borderRadius="full"
              src={TimPortrait}
            />
            <Text fontSize={{ base: "lg", lg: "lg" }} fontWeight="bold">
              New York City Metropolitan Area
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </PageSkeleton>
  );
};

export default Home;
