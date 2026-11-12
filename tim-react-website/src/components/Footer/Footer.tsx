import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface ButtonProps {
  children: React.ReactNode;
  label: string;
  href: string;
}

const SocialButton = (props: ButtonProps) => {
  const { children, label, href } = props;
  return (
    <chakra.button
      className="social-link"
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      aria-label={label}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box as="footer" className="site-footer">
      <Container
        as={Stack}
        className="footer-inner"
        maxW="none"
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text className="footer-copy">
          {new Date().getFullYear()} - This website is deployed with Google
          Firebase
        </Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Email"} href={"mailto:timothyw0@gmail.com"}>
            <MdEmail />
          </SocialButton>
          <SocialButton
            label={"LinkedIn"}
            href={"https://www.linkedin.com/in/timothy-wang-a9a953114/"}
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={"Github"} href={"https://github.com/Timothyw0"}>
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
