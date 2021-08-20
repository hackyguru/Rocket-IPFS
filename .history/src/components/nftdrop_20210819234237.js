import { NFTStorage, File } from "nft.storage";
import fs from "fs";
import { useState } from "react";

const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDRmNmYwMDczMWY1ZmEyMTdEYzBhQzcxZTkyNzI2N2ZDNTY0ODUzMTAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyOTM5NDk3NTMzNCwibmFtZSI6ImJyb3dzZXJzMzAwMCJ9.sHgtn0urJzRtqjImxgEeYgJRMAXrgTZp-7k1Pn0Pxtg";

const nftclient = new NFTStorage({ token: apiKey });

function NFT() {
  const [fileUrl, updateFileUrl] = useState(``);
  async function onChange(e) {
    const file = e.target.files[0];
    try {
      console.log(file);
      console.log(file.name);
      const metadata = await nftclient.store({
        name: "Pinpie",
        description: "Pin is not delicious beef!",
        image: new File(
          [
            fs.readFileSync(
              "https://bafybeibhtnf7siczzduc2r7ykg3s7tvak22un5ccy2qm3z5nbarfyapbny.ipfs.infura-ipfs.io/"
            ),
          ],
          file.name,
          {
            type: "image/png",
          }
        ),
      });
      console.log(metadata.url);
      updateFileUrl(metadata.url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
  return (
    <div className="App">
      <input type="file" onChange={onChange} />
      {fileUrl && <img src={fileUrl} width="600px" />}
    </div>
  );
}

export default NFT;
