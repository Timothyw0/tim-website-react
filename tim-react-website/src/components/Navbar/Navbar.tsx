import {
  Avatar,
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

interface NavLinkProps {
  action?: string;
  children: React.ReactNode;
  path?: string;
}

const Links = [
  { text: "Home", path: "/home" },
  { text: "Experience", path: "/experience" },
  { text: "Portfolio", path: "/portfolio" },
];

const NavLink = (props: NavLinkProps) => {
  const { action, children, path } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        textColor: colorMode === "light" ? "black" : "white",
        bg: useColorModeValue("gray.200", "gray.700"),
        cursor: "pointer",
      }}
      onClick={() => {
        action === "switchMode" && toggleColorMode();
        path && navigate(path);
      }}
    >
      {children}
    </Box>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position="fixed"
        top={0}
        right={0}
        left={0}
        zIndex={10}
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Heading as="h1" size="lg">
                Timothy Wang
              </Heading>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.text} path={link.path}>
                  {link.text}
                </NavLink>
              ))}
              <NavLink action="switchMode">
                <MoonIcon />
              </NavLink>
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <Avatar
              size="md"
              src="https://media.licdn.com/dms/image/C5603AQGFoEYhXtkaiw/profile-displayphoto-shrink_800_800/0/1592782396048?e=1705536000&v=beta&t=QBf5w8Oct5IZiiq_4rc983Y5CSkcLf4AFsejtuCK-ew"
            />
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.text} path={link.path}>
                  {link.text}
                </NavLink>
              ))}
              <NavLink action="switchMode">
                <MoonIcon />
              </NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
