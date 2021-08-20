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
import Settings from "./pages/Settings";
import IPFS from "./components/ipfsdrop";
import NFT from "./components/nftdrop";
import FileUpload from "./pages/FileUpload";
import Test from "./Test";

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
      <Router>
      <ChakraProvider>
        <Offline>
          <Container>You're offline!</Container>
        </Offline>
        <Online>
          <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/settings">
              <Settings/>
            </Route>
            <Route exact path="/uploadfile">
              <FileUpload/>
            </Route>
          </Switch>
          {/* <Test/> */}
          {/* <NFT/> */}
        </Online>
      </ChakraProvider>
      </Router>
    </div>
  );
}

export default App;
