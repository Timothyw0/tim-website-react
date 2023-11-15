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

interface NavLinkProps {
  action?: string;
  children: React.ReactNode;
}

const Links = ["Home", "Experience", "Portfolio", "Contact Links"];

const NavLink = (props: NavLinkProps) => {
  const { action, children } = props;
  const { colorMode, toggleColorMode } = useColorMode();

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
      }}
      onClick={() => {
        action === "switchMode" && toggleColorMode();
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
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
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
                <NavLink key={link}>{link}</NavLink>
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
                <NavLink key={link}>{link}</NavLink>
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
