import React, { Component } from "react";

const ipfsClient = require("");
const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
});

export class IPFS extends Component {
  //constructor props
  constructor(props) {
    super(props);
    this.state = {
      fileName: "", //stores fileName
      buffer: null, //stores fileBuffer
      fileLink: null, //stores the link to the file eg:https://ipfs.infura.io/ipfs/fileHash
      fileHash: null, //stores the fileHash
      items: [], //stores all the file descriptions
      text: "", //keeps the text intact
      toAdd: true,
    };
  }

  //functions
  captureFile = (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    //setting fileName
    const fileName = file.name;
    this.setState({ fileName });

    //reading the buffer of the file
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => this.setState({ buffer: Buffer(reader.result) });
  };

  handleInput = (e) => this.setState({ text: e.target.value });

  addFile = async (e) => {
    //generating and storing fileHash
    e.preventDefault();

    //setting to add to false so the user doesnt add a file
    this.setState({ toAdd: false });

    await ipfs.add(this.state.buffer, (err, result) => {
      //setting the fileHash
      const fileHash = result[0].hash;
      this.setState({ fileHash });

      //waiting for the hash to be generated and then add it to the list
      const fileLink = "https://ipfs.infura.io/ipfs/" + result[0].hash;
      this.setState({ fileLink });

      //adding new item
      const newItem = (
        <a href={this.state.fileLink} target="_blank">
          <span className="descr">FileName :</span>
          {this.state.fileName} <br />{" "}
          <span className="descr">Description :</span>
          {this.state.text} <br /> <span className="descr">FileHash :</span>
          {this.state.fileHash}
        </a>
      );

      // updating the new array items by
      const items = [...this.state.items, newItem];
      this.setState({ items });

      //setting the description of the function
      this.setState({ text: "" });

      //setting to add to false so the user doesnt add a file
      this.setState({ toAdd: true });

      //console logging the error if there is any
      if (err) {
        console.log(err);
        return;
      }
    });
  };

  //ui html code
  render() {
    return (
      <div>
        <h1>IPFS Drop</h1>
        <div class="context"></div>

        <div class="area">
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <form className="box-form" onSubmit={this.addFile}>
            <h1>Drop Your Files</h1>
            <input type="file" onChange={this.captureFile} required />
            <input
              id="box-descr"
              type="text"
              placeholder="Enter some description for your file"
              value={this.state.text}
              onChange={this.handleInput}
            />
            <input type="submit" id="sub-but" />
            <br />
            {this.state.toAdd ? (
              <span>You can add a file now</span>
            ) : (
              <span>Please wait the file is being uploaded</span>
            )}
          </form>

          <div className="uploaded">
            <h1>Dropped files</h1>
            <ul>
              {this.state.items.map((item) => (
                <li key={this.props.id}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default IPFS;
