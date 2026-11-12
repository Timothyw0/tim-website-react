import { Box, Heading, Image, Text } from "@chakra-ui/react";
import PageSkeleton from "../PageSkeleton";
import TimPortrait from "../../assets/TimPortrait.jpg";

const Home = () => (
  <PageSkeleton>
    <Box className="hero">
      <Box>
        <Text className="eyebrow">Personal profile</Text>
        <Heading as="h1" className="hero-title">
          Welcome to my personal profile!
        </Heading>
        <Box className="hero-copy">
          <Text>
            I'm glad you're here, feel free to take a look around and reach out
            with any questions in my contact links below in the footer.
          </Text>
          <Text>
            I am a passionate and highly motivated full-stack software engineer
            with experience in the MERN stack as well as C, Oracle, Spark, and
            Python. I graduated from Rensselaer Polytechnic Institute in May
            2019 with a B.S. in Computer Science and Minor in Management and
            Stevens Institute of Technology in May 2022 with a M.S. in Computer
            Science
          </Text>
        </Box>
      </Box>

      <Box className="portrait-panel">
        <Image
          className="portrait-image"
          alt="Timothy Wang"
          src={TimPortrait}
        />
        <Text className="portrait-caption">New York City Metropolitan Area</Text>
      </Box>
    </Box>
  </PageSkeleton>
);

export default Home;
