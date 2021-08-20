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
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FiUpload, FiHelpCircle, FiInfo, FiSettings } from "react-icons/fi";
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
import { IoIosGlobe } from "react-icons/io";
import { BiCoin } from "react-icons/bi";
import { MdSettingsBackupRestore } from "react-icons/md";

export default function Home() {
  return (
    <Box w="350px" h="600px" bgGradient="linear(to-b, #12395A, #6BC4CE)">
      <VStack align="stretch" width="100%">
        <Box>
          <Flex>
            <Box p="4">
              <Heading fontSize="20" color="white" fontFamily={"monospace"}>
                rocket 🚀
              </Heading>
            </Box>
            <Spacer />
            <Box p="2.5">
              <ChakraLink
                href="https://cipher-infoline.gitbook.io/rocket-ipfs/"
                isExternal
              >
                <IconButton
                  variant="unstyled"
                  aria-label="Info"
                  icon={<Icon color="white" as={FiHelpCircle} />}
                  // onClick={<Redirect to="/about" />}
                />
              </ChakraLink>
              <Link to="/about">
                <IconButton
                  variant="unstyled"
                  aria-label="Info"
                  icon={<Icon color="white" as={FiInfo} />}
                />
              </Link>
              <Link to="/settings">
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
            bgImage="url('https://media.discordapp.net/attachments/873587956013752340/878417405561413702/HeroRocket.png')"
            width="94%"
            height="425"
            borderRadius="20"
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
              <Link to="/uploadfile">
                <IconButton
                  fontSize="2xl"
                  variant="unstyled"
                  aria-label="Upload"
                  icon={<Icon color="#6BC4CE" as={FiUpload} />}
                />
              </Link>
              <Spacer />
              <Link to="/webhosting">
                <IconButton
                  fontSize="2xl"
                  variant="unstyled"
                  aria-label="Host"
                  icon={<Icon color="#6BC4CE" as={IoIosGlobe} />}
                />
              </Link>
              <Spacer />
              <Link to="/webbackup">
                <IconButton
                  fontSize="2xl"
                  variant="unstyled"
                  aria-label="Backup"
                  icon={<Icon color="#6BC4CE" as={MdSettingsBackupRestore} />}
                />
              </Link>
              <Spacer />
              <Link to="/nftstorage">
                <IconButton
                  fontSize="2xl"
                  variant="unstyled"
                  aria-label="NFT"
                  icon={<Icon color="#6BC4CE" as={BiCoin} />}
                />
              </Link>
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
