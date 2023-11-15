import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Stack minHeight="90vh" direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align="center" justify="center">
        <Stack spacing={6} w="full" maxW="lg">
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text as="span" position="relative" fontWeight="bolder">
              Welcome to my personal profile!
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} fontWeight="bold">
            I'm glad you're here, feel free to take a look around and reach out
            with any questions in my contact links.
            <br />
            <br />I am a passionate and highly motivated software engineer. I
            graduated from Rensselaer Polytechnic Institute in May 2019 with a
            B.S. in Computer Science and Minor in Management and Stevens
            Institute of Technology in May 2021 with a M.S. in Computer Science
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1} align="center" justify="center">
        <Stack spacing={6} w="full" maxW="lg" align="center">
          <Image
            alt={"Timothy Wang Photo"}
            boxSize="300px"
            borderRadius="full"
            src={
              "https://lh3.googleusercontent.com/pw/ADCreHexntwSU7ZbS8J6_VSg5G6XdHMbc0YcBnyGkRvp2hO0a2MPIfX5GHPqDFS8AfN4Tg21ekLUnjcujOkR2ZqhtTCBsaSW4KlzEH2qhGf5MhfNI-9bsRU=w2400"
            }
          />
          <Text fontSize={{ base: "lg", lg: "lg" }} fontWeight="bold">
            New York City Metropolitan Area
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Home;
