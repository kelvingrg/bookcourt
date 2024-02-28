import React, { useRef, useState } from "react";
import Input from "../components/common/Input";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import NavBar from "../components/common/NavBar";
import addIcon from '@assets/addicon.svg'
import './NewCourt.css'
import AxiosInstance from "../api/apicall";

function NewCourt() {
  const [courtData,setCourtData]=useState({
    name:'',
    
  })
  const handleChange = (e) => {
    setCourtData({...courtData,[e.target.name]:e.target.value})
  };
  const handledescriptionChange = (e) => {
    setCourtData({...courtData,description:e})
  };
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleAddIconClick = () => {
    fileInputRef.current.click(); // Programmatically trigger file input
  };
  const handleFileInputChange = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter(file => {
      return file.type.startsWith('image/') || file.type.startsWith('video/');
    });
    setSelectedFiles(prevFiles => [...prevFiles, ...validFiles]);
  };
  const createNewCourt=()=>{
        // Create a new FormData object
        const formDataToSend = new FormData();

        // Append files to FormData object
        selectedFiles.forEach((file, index) => {
          formDataToSend.append(`files`, file);
        });
    
        // Append other JSON data to FormData object
        Object.entries(courtData).forEach(([key, value]) => {
          formDataToSend.append(key, value);
        });
    
    AxiosInstance({
      url:'/admin/createnewcourt', 
      method:'post',
      data:formDataToSend,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res)=>{
  
      console.log(res.data.message);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <>
    <NavBar/>

    <div className="container-fluid">
      <div className="row">
     
        <div className="mt-3 d-flex justify-content-between gap-3 px-3">
        <h3>Add new Court</h3>
          <span className="d-flex gap-3">
          <button className="common-button bg-black text-white" >Cancel</button>
        <button className="common-button" onClick={createNewCourt}>Create</button>
          </span>
     
      </div>
        <div className="col-lg-4 col-md-6 mt-xxl-2">
            <Input type={"text"} value={courtData.name} label={"Name"} name={'name'} onchange={handleChange} />
          </div>
          <div className="col-lg-4 col-md-6 mt-3">
            <Input type={"text"} value={courtData.location} label={"location"} name={'location'} onchange={handleChange} />
          </div>
          <div className="col-lg-4 col-md-6 mt-3">
            <Input type={"text"} value={courtData.type} label={"type"} name={'type'} onchange={handleChange} />
          </div>
          <div className="col-lg-4 col-md-6 mt-3">
            <Input type={"text"} value={courtData.address1} label={"address line  1"}  name={'address1'}onchange={handleChange} />
          </div>
          <div className="col-lg-4 col-md-6 mt-3">
            <Input type={"text"} value={courtData.address2} label={"address line 2"}  name={'address2'} onchange={handleChange} />
          </div>
          <div className="col-lg-4 col-md-6 mt-3">
            <Input type={"text"} value={courtData.address3} label={"address line 3"} name={'address3'} onchange={handleChange} />
          </div>
          <div className="col-lg-4 col-md-6 mt-3">
            <Input type={"text"} value={courtData.landMark} label={"land mark"} name={'landMark'} onchange={handleChange} />
          </div>
          <div className="col-lg-4 col-md-6 mt-3">
            <Input type={"number"} value={courtData.pin} label={"Pin code"} name={'pin'} onchange={handleChange} />
          </div>
          <div className="col-lg-4 col-md-6 mt-3">
            <Input type={"number"} value={courtData.contactNumber} label={"contact number"} name={'contactNumber'} onchange={handleChange} />
          </div>
          <div className="d-flex mt-3 flex-wrap gap-2">
          {selectedFiles.map((file, index) => (
            <>
            {file.type.startsWith('image/') && (
              <img src={URL.createObjectURL(file)} alt=""  height={150} />
            )}
            {file.type.startsWith('video/') && (
              <video src={URL.createObjectURL(file)} controls  height={150} />
            )}
               </>
        ))}
            <div className="addnewcourtPic">
            <input 
             type="file" 
             style={{ display: 'none' }} 
             ref={fileInputRef} 
             onChange={handleFileInputChange} 
             multiple 
             accept="image/*,video/*"    />
            <img src={addIcon} alt=""  width={'150px'} height={'150px'} onClick={handleAddIconClick}/>
            </div>
          </div>
          <ReactQuill  readOnly={true}  theme="snow" className="mt-3" value={courtData.description} name='description' onChange={handledescriptionChange} style={{'height': '500px'}}/>
      
      </div>
     
    </div>
    </>
  );
}

export default NewCourt;
