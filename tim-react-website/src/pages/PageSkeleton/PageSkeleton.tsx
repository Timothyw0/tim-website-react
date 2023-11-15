import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const PageSkeleton = (props: Props) => {
  const { children } = props;

  return (
    <>
      <Navbar />
      <Box pt={50}>{children}</Box>
      <Footer />
    </>
  );
};

export default PageSkeleton;
