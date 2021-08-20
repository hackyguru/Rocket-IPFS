import { NFTStorage } from "nft.storage";


export default async function NTF(){

    const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ4N2FhMzlBMkRjNkQwMEJlRDk1NTc1M0Q4Zjk5M0M0NzMzZEExQmUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyOTQ2OTg0Nzc2NCwibmFtZSI6IlJvY2tldCJ9.NmEDDLhiu5sDfNpuVyvuPocTSsVbB73T6uR-5n5XK_8';
const client = new NFTStorage({ token: apikey })

const metadata = await client.store({
    name: 'guvi',
    description: 'adeedddd',
    image: new File('guvi.png',
    { type: 'image/png'}
    ),

})
console.log(metadata.url);
console.log("Hello");
return(<div>
    hello
</div>);



}