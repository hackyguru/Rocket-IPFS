import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import {
  Box,
  Container,
  Heading,
  Flex,
  IconButton,
  Spacer,
  VStack,
  Icon,
  Center,
  Text,
  Image,
  Switch,
  FormControl,
  FormLabel,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { FiHelpCircle, FiInfo, FiSettings } from "react-icons/fi";
import {
  BrowserRouter as Router,
  Switch as BrowserSwitch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect,
} from "react-router-dom";
import IPFS from "../components/ipfsdrop";
import IPFSButton from "../components/ipfsbutton";
import NFTUpload from "../components/nftupload";

export default function NFTStorage() {
  return (
    <Box w="350px" h="600px" bgGradient="linear(to-b, #12395A, #6BC4CE)">
      <VStack align="stretch" width="100%">
        <Box>
          <Flex>
            <Box p="4">
              <Heading fontSize="20" color="white" fontFamily={"monospace"}>
                rocket
              </Heading>
            </Box>
            <Spacer />
            <Box p="2.5">
              <IconButton
                variant="unstyled"
                aria-label="Info"
                icon={<Icon color="white" as={FiHelpCircle} />}
                onClick={<Redirect to="/about" />}
              />
              <IconButton
                variant="unstyled"
                aria-label="Info"
                icon={<Icon color="white" as={FiInfo} />}
              />
              <IconButton
                variant="unstyled"
                aria-label="Settings"
                icon={<Icon color="white" as={FiSettings} />}
              />
            </Box>
          </Flex>
        </Box>
        <Container width="100%">
          <NFTUpload />
        </Container>
      </VStack>
    </Box>
  );
}
