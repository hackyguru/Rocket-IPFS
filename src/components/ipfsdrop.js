import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { create } from "ipfs-http-client";
import {
  Button,
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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Link as ChakraLink,
} from "@chakra-ui/react";
import {
  FiUpload,
  FiShare2,
  FiHelpCircle,
  FiInfo,
  FiSettings,
} from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineQrcode } from "react-icons/ai";
import { QRCode } from 'react-qrcode-logo';

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

function IPFS(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png'
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);



  const thumbs = files.map((file) => (
    <div key={file.name}>
      <img src={file.preview} alt={file.name} />
    </div>
  ));

  const [fileUrl, updateFileUrl] = useState(``);
  const [ipfsUrl, updateipfsUrl] = useState(``);

  async function onChange(e) {
    const file = e.target.files[0];
    console.log(file);
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

  return (
    <Box width="350" height="400">
      <section>

      <div {...getRootProps({style})}>
    <input {...getInputProps()} onChange={onChange} />
     

          <div>Drag and drop your images here.</div>
        </div>
        {fileUrl && (
          <VStack>
            <Box paddingTop="10" boxSize="sm" width="350" height="200">
              <Image src={fileUrl} width="150px" />
            </Box>
            <Box boxSize="sm" width="100%" height="190">
              <Text fontFamily="monospace" color="white" paddingTop="7">
                HTTP Link : {fileUrl}
              </Text>
              <Text
                paddingTop="5"
                fontFamily="monospace"
                color="white"
                paddingTop="7"
              >
                IPFS Link : {ipfsUrl}
              </Text>
            </Box>
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
                <IconButton onClick={onOpen}
                  fontSize="2xl"
                  variant="unstyled"
                  aria-label="NFT"
                  icon={<Icon color="#6BC4CE" as={AiOutlineQrcode} />}
                />
              </Flex>
              <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay width="250" />
        <ModalContent width="250">
          <ModalHeader>Scan QRCode</ModalHeader>
          <ModalCloseButton />
          <ModalBody width="250">
            <Container>
              
              <VStack paddingTop={7}>
              <QRCode logoImage="https://cdn.discordapp.com/attachments/873587956013752340/878589948096307200/rocketlogo.png" logoWidth="75" logoHeight="80" logoOpacity="1"  fgColor="#6BC4CE" bgColor="#FFFFFF" value={fileUrl} />
                {/* <Link to="/settings"> */}
                
                {/* </Link> */}
              </VStack>
            </Container>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
            </Box>
          </VStack>
        )}
      </section>
    </Box>
  );
}
export default IPFS;

////////////////////////  DROP ZONE  ////////////////////////////////////////////////////////

// import React, { useCallback, useEffect, useMemo, useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { create } from 'ipfs-http-client';

// const client = create('https://ipfs.infura.io:5001/api/v0')

// const baseStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   padding: '20px',
//   borderWidth: 2,
//   borderRadius: 2,
//   borderColor: '#eeeeee',
//   borderStyle: 'dashed',
//   backgroundColor: '#fafafa',
//   color: '#bdbdbd',
//   transition: 'border .3s ease-in-out'
// };

// const activeStyle = {
//   borderColor: '#2196f3'
// };

// const acceptStyle = {
//   borderColor: '#00e676'
// };

// const rejectStyle = {
//   borderColor: '#ff1744'
// };

// function IPFS(props) {


  
//   const [files, setFiles] = useState([]);

//   const onDrop = useCallback(acceptedFiles => {
//     setFiles(acceptedFiles.map(file => Object.assign(file, {
//       preview: URL.createObjectURL(file)
//     })));
//   }, []);

//   const {
//     getRootProps,
//     getInputProps,
//     isDragActive,
//     isDragAccept,
//     isDragReject
//   } = useDropzone({
//     onDrop,
//     accept: 'image/jpeg, image/png'
//   });

//   const style = useMemo(() => ({
//     ...baseStyle,
//     ...(isDragActive ? activeStyle : {}),
//     ...(isDragAccept ? acceptStyle : {}),
//     ...(isDragReject ? rejectStyle : {})
//   }), [
//     isDragActive,
//     isDragReject,
//     isDragAccept
//   ]);

//   const thumbs = files.map(file => (
//     <div key={file.name}>
//       <img
//         src={file.preview}
//         alt={file.name}
//       />
//     </div>
//   ));
//   console.log(files);
//   onChange(files[0])
//   console.log(files[0]);
  
//   const [fileUrl, updateFileUrl] = useState(``)
//   async function onChange(files) {
//     console.log("INSIDE",files)
//     // const file = e.target.files[0]
    
//     try {
//       const added = await client.add(files)
//       console.log(added);
//       const url = `https://ipfs.infura.io/ipfs/${added.path}`
//       updateFileUrl(url)
//       console.log(fileUrl);
//     } catch (error) {
//       console.log('Error uploading file: ', error)
//     }  
//   }



//   return (
//     <section>
//       <div {...getRootProps({style})}>
//         <input {...getInputProps()}   />
     
//         {
//         fileUrl && (
//           <img src={fileUrl} width="600px" />
//         )
//       }
//         <div>Drag and drop your images here.</div>
//       </div>
//       <aside>
//         {thumbs}
//       </aside>
//     </section>
//   )
// }
// export default IPFS;