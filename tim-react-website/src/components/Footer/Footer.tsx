import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
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
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      position="absolute"
      left={0}
      right={0}
      bottom={0}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>
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
