import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { FaAws, FaNode, FaPython, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { GrHadoop, GrOracle } from "react-icons/gr";
import PageSkeleton from "../PageSkeleton";
import Rpi from "../../assets/school/rpi.jpg";
import Stevens from "../../assets/school/stevens.jpg";
import BofaNyc from "../../assets/work/bofa_nyc.jpeg";
import BofaJc from "../../assets/work/bofa_jc.jpeg";
import BofaPennington from "../../assets/work/bofa_pennington.jpeg";
import RpiWork from "../../assets/work/rpi.png";
import Lockheed from "../../assets/work/lockheed.jpg";

interface CardProps {
  header: string;
  subtext: string[];
  type: "work" | "education";
}

const ExperienceCard = ({ header, subtext, type }: CardProps) => {
  let image: string | undefined;
  if (type === "education") {
    image = header === "Rensselaer Polytechnic Institute" ? Rpi : Stevens;
  } else if (header === "Bank of America") {
    if (subtext[0].includes("Software")) {
      image = BofaNyc;
    } else if (subtext[0].includes("Solution")) {
      image = BofaJc;
    } else {
      image = BofaPennington;
    }
  } else if (header === "Rensselaer Polytechnic Institute") {
    image = RpiWork;
  } else if (header === "Lockheed Martin") {
    image = Lockheed;
  }

  return (
    <Box
      className={`experience-card${type === "education" ? " education-card" : ""}`}
      p={5}
    >
      {image && (
        <Box className="experience-image-wrap">
          <Image className="experience-image" src={image} alt={header} />
        </Box>
      )}
      <Stack align="flex-start" spacing={3} pt={image ? 5 : 0}>
        <Heading className="experience-card-title" as="h3">
          {header}
        </Heading>
        <Text className={type === "work" ? "experience-role" : "education-detail"}>
          {subtext[0]}
        </Text>
        {subtext.slice(1).map((text) => (
          <Text
            className={type === "work" ? "experience-description" : "education-detail"}
            key={text}
          >
            {text}
          </Text>
        ))}
      </Stack>
    </Box>
  );
};

const skills = [
  { name: "React", icon: <FaReact size={32} /> },
  { name: "Node.js", icon: <FaNode size={32} /> },
  { name: "MongoDB", icon: <DiMongodb size={32} /> },
  { name: "Python", icon: <FaPython size={32} /> },
  { name: "AWS", icon: <FaAws size={32} /> },
  { name: "Oracle", icon: <GrOracle size={32} /> },
  { name: "Hadoop", icon: <GrHadoop size={32} /> },
];

const Experience = () => (
  <PageSkeleton>
    <Box className="experience-section">
      <Box className="section-heading">
        <Text className="eyebrow">Career and education</Text>
        <Heading as="h1" className="section-title">
          Work Experience
        </Heading>
      </Box>
      <Stack className="experience-grid" spacing={0}>
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

    <Box className="experience-section">
      <Box className="section-heading">
        <Text className="eyebrow">Tools I work with</Text>
        <Heading as="h2" className="section-title">
          Skills
        </Heading>
      </Box>
      <Box className="skills-panel">
        <Box className="skill-list">
          {skills.map((skill) => (
            <Box className="skill-item" key={skill.name}>
              {skill.icon}
              <Text as="span">{skill.name}</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>

    <Box className="experience-section">
      <Box className="section-heading">
        <Text className="eyebrow">Academic background</Text>
        <Heading as="h2" className="section-title">
          Education
        </Heading>
      </Box>
      <Stack className="education-grid" spacing={0}>
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

export default Experience;
