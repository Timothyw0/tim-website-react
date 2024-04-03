import PageSkeleton from "../PageSkeleton";
import {
  Center,
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface CardProps {
  header: string;
  link: Array<string>;
  subtext: Array<string>;
}

const Portfolio = () => {
  const PortfolioCard = (props: CardProps) => {
    const { header, link, subtext } = props;

    return (
      <Center py={12}>
        <Box
          role={"group"}
          p={6}
          h="300px"
          w={{ base: "500px", md: "400px" }}
          maxWidth="100vw"
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Stack pt={10} align={"center"}>
            <Heading fontSize={"2xl"} fontWeight={500}>
              {header}
            </Heading>
            <Stack align={"center"}>
              {subtext.map((txt) => (
                <Text fontWeight={500} fontSize="medium">
                  {txt}
                </Text>
              ))}
              {link.map((url) => (
                <a href={url} target="_blank">
                  {url}
                </a>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  };
  return (
    <PageSkeleton>
      <Box textAlign="center" py={100} px={6}>
        <Heading display="inline-block" as="h2" size="xl">
          My Projects
        </Heading>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Flex flex={1} align="center" justify="center">
            <PortfolioCard
              header="Personal Profile"
              subtext={["Built with Vite + ReactJS + TypeScript"]}
              link={["https://github.com/Timothyw0/tim-website-react"]}
            />
          </Flex>
          <Flex flex={1} align="center" justify="center">
            <PortfolioCard
              header="Wedding Website"
              subtext={["Built with Vite + ReactJS + Google Firestore"]}
              link={[
                "https://github.com/Timothyw0/react-wedding",
                "https://madeleineandtim2023.com",
              ]}
            />
          </Flex>
        </Stack>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Flex flex={1} align="center" justify="center">
            <PortfolioCard
              header="Wang Family Tree"
              subtext={[
                "Built with Vite + ReactJS + TypeScript frontend",
                "NodeJS + Express + MongoDB backend",
              ]}
              link={[
                "https://github.com/Timothyw0/Wang-Family-Tree",
                "https://wang-family-tree.web.app/",
              ]}
            />
          </Flex>
          <Flex flex={1} align="center" justify="center">
            <PortfolioCard
              header="Wedd.io"
              subtext={[
                "CS554 Final Project",
                "MERN stack + AWS S3 + Google Firebase Authentication",
              ]}
              link={["https://github.com/JInsalaco/CS554_Good_Nodels"]}
            />
          </Flex>
        </Stack>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Flex flex={1} align="center" justify="center">
            <PortfolioCard
              header="Simple Shell (sish)"
              subtext={[
                "CS615 Final Project",
                "Simple UNIX shell written in C",
              ]}
              link={["https://github.com/Timothyw0/apue-sish"]}
            />
          </Flex>
          <Flex flex={1} align="center" justify="center">
            <PortfolioCard
              header="AWS EBS Backup"
              subtext={[
                "CS554 Assignment",
                "Bash script that performs backups into an AWS EBS",
              ]}
              link={["https://github.com/Timothyw0/ebs-backup"]}
            />
          </Flex>
        </Stack>
      </Box>
    </PageSkeleton>
  );
};

export default Portfolio;
