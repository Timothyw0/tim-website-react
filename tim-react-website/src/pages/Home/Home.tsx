import { Box, Heading, Image, Text } from "@chakra-ui/react";
import PageSkeleton from "../PageSkeleton";
import TimPortrait from "../../assets/TimPortrait.jpg";

const Home = () => (
  <PageSkeleton>
    <Box className="hero">
      <Box>
        <Text className="eyebrow">Personal profile</Text>
        <Heading as="h1" className="hero-title">
          Software Engineer at Microsoft
        </Heading>
        <Box className="hero-copy">
          <Text>
            I'm a software engineer at Microsoft working on Azure cloud
            services. My experience spans Azure Static Web Apps and Azure
            Container Apps, including GitHub Spark and ACA sandboxes.
          </Text>
          <Text>
            I earned an M.S. in Computer Science from Stevens Institute of
            Technology and a B.S. in Computer Science from Rensselaer
            Polytechnic Institute.
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
