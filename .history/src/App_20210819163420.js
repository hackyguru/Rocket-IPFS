/*global chrome*/

import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import About from "./pages/About";
import {
  ChakraProvider,
  Box,
  Container,
  Heading,
  Flex,
  IconButton,
  Spacer,
  VStack,
  Center,
  Text,
} from "@chakra-ui/react";
import Particles from "react-particles-js";
import particlesConfig from "./config/particleconfig";
import "@fontsource/montserrat";
import { Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiHelpCircle, FiInfo, FiSettings } from "react-icons/fi";
import { Offline, Online } from "react-detect-offline";
import Home from "./pages/Home";

function App(props) {
  const [url, setUrl] = useState("");

  /**
   * Get current URL
   */
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };
    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const url = tabs[0].url;
        setUrl(url);
      });
  }, []);

  return (
    <div>
      <ChakraProvider>
        <Offline>
          <Container>
            <Heading>You're offline!</Heading>
          </Container>
        </Offline>

        <Online>
          {/* <Particles params={particlesConfig}> */}

          <div>
            <Router>
              <Route path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Cont} />
            </Router>
          </div>

          {/* </Particles> */}
        </Online>
      </ChakraProvider>
    </div>
  );
}

export default App;

//bgGradient="linear(to-r, green.400,purple.500)"
//animation="hue 10s infinite linear"

{
  /* <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router> */
}

const Header = (
  <Box>
    <Flex>
      <Box p="4">
        <Heading fontSize="20" color="white" fontFamily={"monospace"}>
          rocket
        </Heading>
      </Box>
      <Spacer />
      <Box p="2.5">
        <Link to="/about">
          <IconButton
            variant="unstyled"
            aria-label="Help"
            icon={<Icon color="white" as={FiHelpCircle} />}
          />
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
);
