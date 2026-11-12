import "./App.css";
import { Box, useColorMode } from "@chakra-ui/react";
import Routes from "./routes/Routes";

function App() {
  const { colorMode } = useColorMode();

  return (
    <Box className={`site-shell ${colorMode}`} minH="100vh">
      <Routes />
    </Box>
  );
}

export default App;
