import "./App.css";
import { Container, useColorMode } from "@chakra-ui/react";
import Routes from "./routes/Routes";

function App() {
  const { colorMode } = useColorMode();

  return (
    <Container
      minHeight="100vh"
      width="100%"
      maxWidth="none"
      margin="0 17px 0 0"
      p={0}
      backgroundColor={colorMode === "light" ? "#ffffff" : "#0E0E0E"}
      backgroundImage={
        colorMode === "light"
          ? "linear-gradient(180deg, #ffffff 0%, #7e7fa4 50%, #baded9 100%)"
          : "linear-gradient(180deg, #0e0e0e 0%, #36396f 50%, #7e7fa4 100%)"
      }
    >
      <Routes />
    </Container>
  );
}

export default App;
