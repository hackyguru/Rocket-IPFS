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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { FiHelpCircle, FiInfo, FiSettings } from "react-icons/fi";
import Backup from "../components/backup";
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
import WebsiteHost from "../components/websiteshost";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function WebBackup() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Box w="350px" h="600px" bgGradient="linear(to-b, #12395A, #6BC4CE)">
        <VStack align="stretch" width="100%">
          <Box>
            <Flex>
              <Box p="2">
                <Flex>
                  <Link to="/">
                    <IconButton
                      size="lg"
                      variant="unstyled"
                      aria-label="Info"
                      icon={
                        <Icon color="white" as={IoArrowBackCircleOutline} />
                      }
                      onClick={<Redirect to="/" />}
                    />
                  </Link>
                  <Heading
                    paddingTop="3"
                    fontSize="20"
                    color="white"
                    fontFamily={"monospace"}
                  >
                    rocket
                  </Heading>
                </Flex>
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
            <Backup />
          </Container>
        </VStack>
      </Box>
    </div>
  );
}
