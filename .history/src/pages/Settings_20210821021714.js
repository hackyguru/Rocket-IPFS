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
  Select,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
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

export default function Settings() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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

        <Center paddingBottom="15">
          <Heading
            padding={3}
            fontSize="20"
            color="white"
            fontFamily={"monospace"}
          >
            About rocket
          </Heading>
        </Center>

        <Center paddingBottom="5">
          <Box
            bgImage="url('https://cdn.discordapp.com/attachments/873587956013752340/877891150936162375/settings2.png')"
            width="94%"
            height="42"
            borderRadius="20"
          >
            <Container>
              <FormControl
                padding={2.5}
                paddingLeft={10}
                display="flex"
                alignItems="center"
              >
                <FormLabel
                  fontFamily="monospace"
                  fontSize="12"
                  color="white"
                  htmlFor="email-alerts"
                  mb="0"
                >
                  Automatically report crashes
                </FormLabel>
                <Switch colorScheme="teal" id="email-alerts" />
              </FormControl>
            </Container>
          </Box>
        </Center>
        <Center paddingBottom="5">
          <Box
            bgImage="url('https://cdn.discordapp.com/attachments/873587956013752340/877891150936162375/settings2.png')"
            width="94%"
            height="42"
            borderRadius="20"
          >
            <Container>
              <FormControl
                padding={2.5}
                paddingLeft={10}
                display="flex"
                alignItems="center"
              >
                <FormLabel
                  fontFamily="monospace"
                  fontSize="12"
                  color="white"
                  htmlFor="email-alerts"
                  mb="0"
                >
                  Auto load images via IPFS CDN
                </FormLabel>
                <Switch colorScheme="teal" id="email-alerts" />
              </FormControl>
            </Container>
          </Box>
        </Center>
        <Center paddingBottom="5">
          <Box
            bgImage="url('https://cdn.discordapp.com/attachments/873587956013752340/877891150936162375/settings2.png')"
            width="94%"
            height="42"
            borderRadius="20"
          >
            <Container>
              <FormControl
                padding={2.5}
                paddingLeft={10}
                display="flex"
                alignItems="center"
              >
                <FormLabel
                  fontFamily="monospace"
                  fontSize="12"
                  color="white"
                  htmlFor="email-alerts"
                  mb="0"
                >
                  Context menu [currently beta]
                </FormLabel>
                <Switch colorScheme="teal" id="email-alerts" />
              </FormControl>
            </Container>
          </Box>
        </Center>

        <Center>
          <Box
            bgImage="url('https://cdn.discordapp.com/attachments/873587956013752340/877891150936162375/settings2.png')"
            width="94%"
            height="42"
            borderRadius="20"
          >
            <Container>
              <FormControl
                padding={2.5}
                paddingLeft={10}
                display="flex"
                alignItems="center"
              >
                <FormLabel
                  fontFamily="monospace"
                  fontSize="12"
                  color="white"
                  htmlFor="email-alerts"
                  mb="0"
                >
                  File sharing [currently beta]
                </FormLabel>
                <Switch colorScheme="teal" id="email-alerts" />
              </FormControl>
            </Container>
          </Box>
        </Center>
        <Container width="100%">
          <Tabs isFitted colorScheme="white">
            <TabList>
              <Tab>Saved assets</Tab>
              <Tab>Site Hosting</Tab>
              <Tab>NFT [BETA]</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>No saved assets yet</p>
              </TabPanel>
              <TabPanel>
                <Select placeholder="Select hosting">
                  <option value="option1">Hanshake Domains</option>
                  <option value="option2">Unstoppable Domains</option>
                </Select>
                <Box paddingTop="3">
                  <Button size="sm" onClick={onOpen}>
                    Setup custom domain
                  </Button>
                </Box>
              </TabPanel>
              <TabPanel>
                <IPFS />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </VStack>
      {/* Domain modal */}
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay width="250" />
        <ModalContent width="250">
          <ModalHeader>Connect with domain</ModalHeader>
          <ModalCloseButton />
          <ModalBody width="250">
            <Container>
              <Center>Select your provider</Center>
              <VStack paddingTop={7}>
                <Link to="/settings">
                  <Button
                    bgGradient="linear(to-b, #12395A, #6BC4CE)"
                    color="white"
                    mr={3}
                  >
                    Unstoppable domains
                  </Button>
                </Link>
                <Link to="/settings">
                  <Button
                    bgGradient="linear(to-b, #12395A, #6BC4CE)"
                    color="white"
                    mr={3}
                    onClick={onClose}
                  >
                    Handshake domains
                  </Button>
                </Link>

                <Button
                  bgGradient="linear(to-b, #12395A, #6BC4CE)"
                  color="white"
                  mr={3}
                  onClick={onClose}
                  isDisabled
                >
                  Others
                </Button>
              </VStack>
            </Container>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
