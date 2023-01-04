import React from "react";
import axios from "axios";

const SideSearch=()=>{
    function send() {
        const formData = new FormData();
        const files = document.getElementById("files");
        formData.append("file", files.files[0]);
        axios.post('http://127.0.0.1:5000/cleanse', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            let Data=response.data
            console.log(Data)
            console.log(JSON.parse(Data))
        })
        
    }
    return(
            <form className="side-search">
                <header>Cleanse</header>
                <div className="address-inputs">
                    <label>Address1: </label>
                    <input type='text'/>
                </div>
                <div className="address-inputs">
                    <label>Address2: </label>
                    <input type='text'/>
                </div>
                <div className="address-inputs" id="City">
                    <label>City: </label>
                    <input type='text'/>
                </div>
                <div className="address-inputs" id="State">
                    <label>State: </label>
                    <input type='text'/>
                </div>
                <div className="search-upload">
                    <button type="submit">Search</button>
                    <input type='file' id="files" title="Choose a video please" onChange={send}/>
                    <label for='files'>Upload</label>
                </div>
            </form>
 
    )
}
export default SideSearch