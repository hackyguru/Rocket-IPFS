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
} from "@chakra-ui/react";
import { FiHelpCircle, FiInfo, FiSettings } from "react-icons/fi";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect,
} from "react-router-dom";
import { About } from "./About";

export default function Home() {
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
              <Link to="about">
                <IconButton
                  variant="unstyled"
                  aria-label="Info"
                  icon={<Icon color="white" as={FiInfo} />}
                />
              </Link>
              <Link to="/contact">
                <IconButton
                  variant="unstyled"
                  aria-label="Settings"
                  icon={<Icon color="white" as={FiSettings} />}
                />
              </Link>
            </Box>
          </Flex>
        </Box>
        <Center>
          <Box
            bgImage="url('https://cdn.discordapp.com/attachments/873587956013752340/877665795377889330/Glass.png')"
            width="94%"
            height="425"
          ></Box>
        </Center>
        <Center>
          <Box
            padding="15"
            bgColor="#12395A"
            borderRadius="20"
            width="94%"
            height="75"
          >
            <Flex>
              <IconButton
                variant="unstyled"
                aria-label="Help"
                icon={<Icon color="#6BC4CE" as={FiHelpCircle} />}
              />
              <Spacer />
              <IconButton
                variant="unstyled"
                aria-label="Help"
                icon={<Icon color="#6BC4CE" as={FiHelpCircle} />}
              />
              <Spacer />
              <IconButton
                variant="unstyled"
                aria-label="Help"
                icon={<Icon color="#6BC4CE" as={FiHelpCircle} />}
              />
            </Flex>
          </Box>
        </Center>
        <Center>
          <Text fontSize="7">Made in ❤️ with IPFS</Text>
        </Center>
      </VStack>
    </Box>
  );
}
