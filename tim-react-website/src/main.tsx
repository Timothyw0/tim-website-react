import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider, Container } from "@chakra-ui/react";
import "./index.css";
import theme from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <Container minHeight="100vh" minWidth="100vw" p={0}>
      <App />
    </Container>
  </ChakraProvider>
);
