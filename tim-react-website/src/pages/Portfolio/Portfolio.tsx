import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import PageSkeleton from "../PageSkeleton";

interface Project {
  header: string;
  link: string[];
  subtext: string[];
}

const projects: Project[] = [
  {
    header: "Personal Profile",
    subtext: ["Built with Vite + ReactJS + TypeScript"],
    link: ["https://github.com/Timothyw0/tim-website-react"],
  },
  {
    header: "Wedding Website",
    subtext: ["Built with Vite + ReactJS + Google Firestore"],
    link: [
      "https://github.com/Timothyw0/react-wedding",
      "https://madeleineandtim2023.com",
    ],
  },
  {
    header: "Wang Family Tree",
    subtext: [
      "Built with Vite + ReactJS + TypeScript frontend",
      "NodeJS + Express + MongoDB backend",
    ],
    link: [
      "https://github.com/Timothyw0/Wang-Family-Tree",
      "https://wang-family-tree.web.app/",
    ],
  },
  {
    header: "Wedd.io",
    subtext: [
      "CS554 Final Project",
      "MERN stack + AWS S3 + Google Firebase Authentication",
    ],
    link: ["https://github.com/JInsalaco/CS554_Good_Nodels"],
  },
  {
    header: "Simple Shell (sish)",
    subtext: ["CS615 Final Project", "Simple UNIX shell written in C"],
    link: ["https://github.com/Timothyw0/apue-sish"],
  },
  {
    header: "AWS EBS Backup",
    subtext: [
      "CS554 Assignment",
      "Bash script that performs backups into an AWS EBS",
    ],
    link: ["https://github.com/Timothyw0/ebs-backup"],
  },
];

const PortfolioCard = ({ header, link, subtext }: Project) => (
  <Box className="portfolio-card">
    <Stack height="100%" align="flex-start" spacing={4}>
      <Heading className="portfolio-card-title" as="h2">
        {header}
      </Heading>
      <Stack align="flex-start" spacing={2}>
        {subtext.map((text) => (
          <Text className="portfolio-description" key={text}>
            {text}
          </Text>
        ))}
      </Stack>
      <Box className="project-links">
        {link.map((url) => (
          <a
            className="project-link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            key={url}
          >
            {url}
          </a>
        ))}
      </Box>
    </Stack>
  </Box>
);

const Portfolio = () => (
  <PageSkeleton>
    <Box>
      <Box className="section-heading">
        <Text className="eyebrow">Selected work</Text>
        <Heading as="h1" className="section-title">
          My Projects
        </Heading>
      </Box>
      <Box className="portfolio-grid">
        {projects.map((project) => (
          <PortfolioCard key={project.header} {...project} />
        ))}
      </Box>
    </Box>
  </PageSkeleton>
);

export default Portfolio;
