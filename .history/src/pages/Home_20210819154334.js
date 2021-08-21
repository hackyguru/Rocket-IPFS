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

export default function Home() {
  return (

<Box
              w="350px"
              h="600px"
              bgGradient="linear(to-b, #12395A, #6BC4CE)"
            >
              <VStack align="stretch" width="100%">
                <Box>
                  <Flex>
                    <Box p="4">
                      <Heading
                        fontSize="20"
                        color="white"
                        fontFamily={"monospace"}
                      >
                        rocket
                      </Heading>
                    </Box>
                    <Spacer />
                    <Box p="2.5">
                      <Link to="/about">
                        <Icon color="white" as={FiHelpCircle} />
                      </Link>
                      <Link to="/about">
                        <IconButton
                          variant="unstyled"
                          aria-label="Info"
                          icon={<Icon color="white" as={FiInfo} />}
                        />
                      </Link>
                      <Link to="/about">
                        <IconButton
                          variant="unstyled"
                          aria-label="Settings"
                          icon={<Icon color="white" as={FiSettings} />}
                        />
                      </Link>
                    </Box>
                  </Flex>
                </Box>


              </VStack>
            </Box>
  );
}
