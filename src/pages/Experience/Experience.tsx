import {
  Box,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import PageSkeleton from "../PageSkeleton";
import Rpi from "../../assets/school/rpi.jpg";
import Stevens from "../../assets/school/stevens.jpg";
import BofaNyc from "../../assets/work/bofa_nyc.jpeg";
import BofaJc from "../../assets/work/bofa_jc.jpeg";
import BofaPennington from "../../assets/work/bofa_pennington.jpeg";
import RpiWork from "../../assets/work/rpi.png";
import Lockheed from "../../assets/work/lockheed.jpg";
import { FaAws, FaNode, FaReact, FaPython } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { GrHadoop, GrOracle } from "react-icons/gr";

interface CardProps {
  header: string;
  subtext: Array<string>;
  type: string;
}

const ExperienceCard = (props: CardProps) => {
  const { header, subtext, type } = props;
  let IMAGE;
  if (type === "education") {
    IMAGE = header === "Rensselaer Polytechnic Institute" ? Rpi : Stevens;
  } else {
    if (header === "Bank of America") {
      if (subtext[0].indexOf("Software") > -1) {
        IMAGE = BofaNyc;
      } else if (subtext[0].indexOf("Solution") > -1) {
        IMAGE = BofaJc;
      } else {
        IMAGE = BofaPennington;
      }
    } else if (header === "Rensselaer Polytechnic Institute") {
      IMAGE = RpiWork;
    } else if (header === "Lockheed Martin") {
      IMAGE = Lockheed;
    }
  }

  return (
    <Center py={12} w={{ base: "100%", md: "50%" }}>
      <Box
        role={"group"}
        p={6}
        h="full"
        w="full"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box rounded={"lg"} pos={"relative"} height={"230px"}>
          <Image
            rounded={"lg"}
            height={230}
            width={432}
            objectFit="cover"
            src={IMAGE}
            alt="#"
            m="auto"
          />
        </Box>
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
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

const Experience = () => {
  return (
    <PageSkeleton>
      <Box textAlign="center" py={10} px={6}>
        <Heading display="inline-block" as="h2" size="xl">
          Work Experience
        </Heading>
        <Stack
          spacing={8}
          direction={{ base: "column", md: "row" }}
          justifyContent="space-evenly"
        >
          <ExperienceCard
            header="Bank of America"
            subtext={[
              "Assistant Vice President - Software Engineer II",
              "In supporting Global Compliance & Operational Risk technology, I am a lead software engineer in a ReactJS rewrite of a legacy AngularJS application. My experience encompasses feature development, unit testing, UI optimization, code reviews, agile demos, cross-team collaboration, and creating reusable React component-based architecture.",
            ]}
            type="work"
          />
          <ExperienceCard
            header="Bank of America"
            subtext={[
              "Officer - Solution Architect",
              "As a Solution Architect, I drove new initiatives to improving efficiency in our line of business. My projects were migrating an Oracle Exadata database into a Hadoop data lake in addition to pySpark processes to replace a vendor-based solution, API layer development using MuleSoft, and Machine Learning algorithms in order to reduce the number of false positive alerts that are generated in Trade Surveillances.",
            ]}
            type="work"
          />
        </Stack>
        <Stack
          spacing={8}
          direction={{ base: "column", md: "row" }}
          justifyContent="space-evenly"
        >
          <ExperienceCard
            header="Bank of America"
            subtext={[
              "Global Summer Technology Analyst",
              "I supported Bank of America's DQC (Data Quality Controls) team and implemented a new framework for data lineage parsing within an automated data control process. Using Python, I created multiple parsers to gather data lineage from the metadata of various reporting tools such as Cognos, Tableau, and Microstrategy. During this experience, I familiarized myself with many ETL and reporting tools used in data analytics.",
            ]}
            type="work"
          />
          <ExperienceCard
            header="Rensselaer Polytechnic Institute"
            subtext={[
              "C-STEM Software Developer",
              "I participated in Rensselaer's Computer Science Undergraduate Research program that partnered with STEM teaching in schools in Troy, NY. C-STEM was a program designed for high school students to learn about the environment through technology. I assisted in developing a Python API for sensors to upload live environmental data to a Django database that was then displayed on a user interface.",
            ]}
            type="work"
          />
        </Stack>
        <Stack
          spacing={8}
          direction={{ base: "column", md: "row" }}
          justifyContent="space-evenly"
        >
          <ExperienceCard
            header="Lockheed Martin"
            subtext={[
              "College Student Technical Senior Intern",
              "I was a part of Rotary Mission Systems Technology and worked on the Aegis BMD (Ballistic Missile Defense) system's Mission Planner. I upgraded and integrated test suites in its automated testing software using Python and Robot Framework. Throughout the summer, I performed various regression, integration, and smoke testing for new capabilities of each release. In addition, I refactored many server-side Java files to adapt to new technologies aboard Navy ships.",
            ]}
            type="work"
          />
        </Stack>
      </Box>

      <Box textAlign="center" py={10} px={6}>
        <Heading display="inline-block" as="h2" size="xl">
          Skills
        </Heading>
        <Box
          role={"group"}
          mt={6}
          p={6}
          h="full"
          w="full"
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Stack
            direction="row"
            spacing={8}
            alignContent="center"
            justifyContent="center"
          >
            <FaReact size={70} alt="ReactJS" />
            <FaNode size={70} alt="NodeJS" />
            <DiMongodb size={70} alt="MongoDB" />
            <FaPython size={70} alt="Python" />
            <FaAws size={70} alt="AWS" />
            <GrOracle size={70} alt="Oracle" />
            <GrHadoop size={70} alt="Hadoop" />
          </Stack>
        </Box>
      </Box>

      <Box textAlign="center" py={10} px={6}>
        <Heading display="inline-block" as="h2" size="xl">
          Education
        </Heading>
        <Stack
          spacing={8}
          direction={{ base: "column", md: "row" }}
          justifyContent="space-evenly"
          pb={100}
        >
          <ExperienceCard
            header="Stevens Institute of Technology"
            subtext={[
              "M.S. Computer Science",
              "Database Professional Certification",
              "Summa Cum Laude",
            ]}
            type="education"
          />
          <ExperienceCard
            header="Rensselaer Polytechnic Institute"
            subtext={[
              "B.S. Computer Science",
              "Minor in Mangement",
              "Magna Cum Laude",
            ]}
            type="education"
          />
        </Stack>
      </Box>
    </PageSkeleton>
  );
};

export default Experience;
