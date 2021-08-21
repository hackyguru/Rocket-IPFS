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

export default function Settings() {
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
                  Context menu (right click)
                </FormLabel>
                <Switch colorScheme="teal" id="email-alerts" />
              </FormControl>
            </Container>
          </Box>
        </Center>
      </VStack>
    </Box>
  );
}
