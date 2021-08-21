import { NFTStorage, File } from "nft.storage";

const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDRmNmYwMDczMWY1ZmEyMTdEYzBhQzcxZTkyNzI2N2ZDNTY0ODUzMTAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyOTM5NDk3NTMzNCwibmFtZSI6ImJyb3dzZXJzMzAwMCJ9.sHgtn0urJzRtqjImxgEeYgJRMAXrgTZp-7k1Pn0Pxtg";

const client = new NFTStorage({ token: apiKey });

const metadata = await client.store({
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

function 