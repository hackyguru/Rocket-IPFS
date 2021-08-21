import { NFTStorage, File } from "nft.storage";

const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDRmNmYwMDczMWY1ZmEyMTdEYzBhQzcxZTkyNzI2N2ZDNTY0ODUzMTAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyOTM5NDk3NTMzNCwibmFtZSI6ImJyb3dzZXJzMzAwMCJ9.sHgtn0urJzRtqjImxgEeYgJRMAXrgTZp-7k1Pn0Pxtg";

const nftclient = new NFTStorage({ token: apiKey });

const metadata = await nftclient.store({
  name: "Pinpie",
  description: "Pin is not delicious beef!",
  image: new File(
    [
      /* data */
    ],
    "pinpie.jpg",
    { type: "image/jpg" }
  ),
});
console.log(metadata.url);
// ipfs://bafyreib4pff766vhpbxbhjbqqnsh5emeznvujayjj4z2iu533cprgbz23m/metadata.json

function NFT() {
    const [fileUrl, updateFileUrl] = useState(``);
    async function onChange(e) {
      const file = e.target.files[0];
      try {
        const metadata = await nftclient.store({
            name: "Pinpie",
            description: "Pin is not delicious beef!",
            image: new File(
              [
               fs.readFileSync()
              ],
              "pinpie.jpg",
              { type: "image/jpg" }
            ),
          });
          console.log(metadata.url);
        const added = await client.add(file);
        const url = `https://ipfs.infura.io/ipfs/${added.path}`;
        updateFileUrl(url);
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
  