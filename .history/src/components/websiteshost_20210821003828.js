import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { create } from "ipfs-http-client";
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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Link as ChakraLink,
  ExternalLinkIcon,
} from "@chakra-ui/react";

import { LinkPreview } from "@dhaiwat10/react-link-preview";

import {
  FiUpload,
  FiShare2,
  FiHelpCircle,
  FiInfo,
  FiSettings,
} from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineQrcode } from "react-icons/ai";

const client = create("https://ipfs.infura.io:5001/api/v0");

const baseStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  transition: "border .3s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function WebsiteHost(props) {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <img src={file.preview} alt={file.name} />
    </div>
  ));

  const [fileUrl, updateFileUrl] = useState(``);
  const [ipfsUrl, updateipfsUrl] = useState(``);

  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file);
      const ipfsurl = `ipfs://${added.path}`;
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      updateFileUrl(url);
      updateipfsUrl(ipfsurl);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  // clean up
  //   useEffect(() => () => {
  //     files.forEach(file => URL.revokeObjectURL(file.preview));
  //   }, [files]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return { isInfo, onOpen, onClose } = useDisclosure();

    <Box width="350" height="400">
      <section>
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} onChange={onChange} />

          <div>Drag and drop your site files here.</div>
        </div>
        {fileUrl && (
          <VStack>
            <Box paddingTop="4" boxSize="sm" width="350" height="200">
              <Box paddingBottom="3">
                <Alert borderRadius="7" status="success">
                  <AlertIcon />
                  Website hosted successfully!
                </Alert>
              </Box>
              <LinkPreview
                height="180px"
                width="250px"
                url="https://ipfs.infura.io/ipfs/QmSYuMAoJTNwDvH6pHCgHEgR5RvPr6fV7h6QDVHbdSGrGq"
              />
              <Flex paddingTop="10">
                <Button size="sm" onClick={onOpen}>
                  View More Info
                </Button>
                <Spacer />
                <Button size="sm" onClick={onOpen}>
                  Custom domain
                </Button>
              </Flex>
              <Center></Center>
            </Box>

            <Box boxSize="sm" width="100%" height="190"></Box>
            <Box
              paddingLeft="5"
              paddingRight="5"
              bgColor="#12395A"
              borderRadius="20"
              width="94%"
              height="10"
            >
              <Flex>
                <IconButton
                  fontSize="2xl"
                  variant="unstyled"
                  aria-label="NFT"
                  icon={<Icon color="#6BC4CE" as={BsBookmark} />}
                />
                <Spacer></Spacer>
                <IconButton
                  fontSize="2xl"
                  variant="unstyled"
                  aria-label="NFT"
                  icon={<Icon color="#6BC4CE" as={FiShare2} />}
                />{" "}
                <Spacer></Spacer>
                <IconButton
                  fontSize="2xl"
                  variant="unstyled"
                  aria-label="NFT"
                  icon={<Icon color="#6BC4CE" as={AiOutlineQrcode} />}
                />
              </Flex>
            </Box>
          </VStack>
        )}
      </section>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent width="250">
          <ModalHeader>Connect with domain</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
export default WebsiteHost;
