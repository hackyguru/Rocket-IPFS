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
  Checkbox,
  CheckboxGroup,
  Input,
  Button,
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

function Backup(props) {
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
    updateFileUrl("19-08-2021");
  }

  // clean up
  //   useEffect(() => () => {
  //     files.forEach(file => URL.revokeObjectURL(file.preview));
  //   }, [files]);

  return (
    <Box width="350" height="400">
      <section>
        <Input placeholder="URL to backup data in IPFS" size="md" />
        <Box onClick={onChange} paddingTop="5">
          <Button colorScheme="blue">Add</Button>
        </Box>
        <Box paddingTop="5">
          <Checkbox color="white" defaultIsChecked>
            <Text fontFamily="monospace">Daily backups</Text>
          </Checkbox>
        </Box>
        {fileUrl && (
          <Box paddingTop="10" boxSize="sm" width="350" height="200">
            <Box
              bgImage="url('https://cdn.discordapp.com/attachments/873587956013752340/877891150936162375/settings2.png')"
              width="94%"
              height="42"
              borderRadius="20"
            >
              <Container>
                <Flex>
                  <Text color="white" fontFamily="monospace" paddingTop="2.5">
                    https://ipfs.io
                  </Text>
                  
                </Flex>
              </Container>
            </Box>
          </Box>
        )}
      </section>
    </Box>
  );
}
export default Backup;
