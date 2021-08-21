import React, { Component } from "react";
import { useState } from "react";
import { create } from "ipfs-http-client";

const client = create("https://ipfs.infura.io:5001/api/v0");

function IPFSButton() {
  const [fileUrl, updateFileUrl] = useState(``);
  async function onChange(e) {
    const file = e.target.files[0];
    try {
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
      {fileUrl && // Simulate an HTTP redirect:
window.location.replace("http://www.w3schools.com")}
    </div>
  );
}

export default IPFSButton;
