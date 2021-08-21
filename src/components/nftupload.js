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
} from "@chakra-ui/react";
import {
  FiUpload,
  FiShare2,
  FiHelpCircle,
  FiInfo,
  FiSettings,
} from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineQrcode, AiTwotoneCopy, AiFillDelete } from "react-icons/ai";
import { NFTStorage } from "nft.storage";
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

function NFTUpload(props) {
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

  const [data, updateData] = useState();
  const [data1, updateData1] = useState();

  async function onChange(e) {
    
    const file = e.target.files[0];
    try{
        const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ4N2FhMzlBMkRjNkQwMEJlRDk1NTc1M0Q4Zjk5M0M0NzMzZEExQmUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyOTQ2OTg0Nzc2NCwibmFtZSI6IlJvY2tldCJ9.NmEDDLhiu5sDfNpuVyvuPocTSsVbB73T6uR-5n5XK_8';
        const client = new NFTStorage({ token: apikey })
        
        const metadata = await client.store({
            name: file.name,
            description: 'NFT IPFS',
            image: new File( [file],file.name,
            { type: 'image/png'}
            ),
        
        })
       
      updateData(metadata.url);
      updateData1(metadata.ipnft);
    
    } catch(error){
        console.log(error);
    }
  }

  // clean up
  //   useEffect(() => () => {
  //     files.forEach(file => URL.revokeObjectURL(file.preview));
  //   }, [files]);

  return (
    <Box width="350" height="400">
      <section>
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} onChange={onChange} />

          <div>Drag and drop your NFT asset here.</div>
        </div>
        {data && data1 && (
          <Box paddingTop="10" boxSize="sm" width="350" height="200">
            <Box
              bgImage="url('https://media.discordapp.net/attachments/873587956013752340/878398476159967262/nftcardpng.png')"
              width="330"
              height="280"
              borderRadius="20"
            >
              <Container>
                <Flex>
                  <Text color="white" fontFamily="monospace" paddingTop="2.5">
                    demo.png
                  </Text>
                  <Spacer />
                  <Box>
                    <IconButton
                      color="white"
                      variant="unstyled"
                      icon={<AiTwotoneCopy />}
                    ></IconButton>
                    <IconButton
                      color="white"
                      variant="unstyled"
                      icon={<AiFillDelete />}
                    ></IconButton>
                  </Box>
                </Flex>
                <Box paddingTop="10" boxSize="sm" width="350" height="200">
                  {/* <Image src={} width="150px" /> */}
                  <Text color="white" fontFamily="monospace" paddingTop="2.5">
                    ipnft :
                  </Text>
                  <h6> {data1}</h6>
                  <br></br>
                  <Text color="white" fontFamily="monospace" paddingTop="2.5">
                    nft url:
                  </Text>
                  <h6> {data}</h6>
                </Box>
              </Container>
            </Box>
          </Box>
        )}
      </section>
    </Box>
  );
}
export default NFTUpload;
