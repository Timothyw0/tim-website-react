import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { NavLink as RouterLink } from "react-router-dom";

const links = [
  { text: "Home", path: "/home" },
  { text: "Experience", path: "/experience" },
  { text: "Portfolio", path: "/portfolio" },
];

const NavigationLinks = ({ onNavigate }: { onNavigate?: () => void }) => (
  <>
    {links.map((link) => (
      <RouterLink
        key={link.text}
        to={link.path}
        onClick={onNavigate}
        className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
      >
        {link.text}
      </RouterLink>
    ))}
  </>
);

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      className="theme-toggle"
      variant="ghost"
      aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" className="site-header">
      <Flex className="nav-inner" align="center" justify="space-between">
        <RouterLink to="/home" className="brand-link">
          <Box as="span" className="brand-mark" aria-hidden="true">
            TW
          </Box>
          <Box as="span" className="brand-name">
            Timothy Wang
          </Box>
        </RouterLink>

        <HStack
          className="nav-links"
          as="nav"
          aria-label="Main navigation"
          display={{ base: "none", md: "flex" }}
        >
          <NavigationLinks />
          <ThemeToggle />
        </HStack>

        <IconButton
          className="mobile-menu-button"
          display={{ base: "inline-flex", md: "none" }}
          variant="ghost"
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen && (
        <Stack
          className="mobile-nav"
          as="nav"
          display={{ base: "flex", md: "none" }}
          aria-label="Mobile navigation"
          spacing={2}
        >
          <NavigationLinks onNavigate={onClose} />
          <ThemeToggle />
        </Stack>
      )}
    </Box>
  );
};

export default Navbar;
