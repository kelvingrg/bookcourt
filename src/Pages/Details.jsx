import React, { useState } from "react";
import "./det.css";
import NavBar from "../components/common/NavBar";
import img from "@assets/throwing-basketball.jpg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import imgicon from "@assets/imageFiles.svg";
import editIcon from "@assets/edit.svg";
import Modal from "../components/common/Modal";
import addIcon from "@assets/addicon.svg";
import calender from "@assets/calender.svg";
import forward from "@assets/forward.svg";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import closeIcon from "@assets/close.svg";
import Input from "../components/common/Input";

function Details() {
  const [openTimeSlot, setTimeslot] = useState(false);
  const [selectionRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [calenderOpen, setCalenderOpen] = useState(false);
  const [opendd, setdd]=useState(false)

  const handleSelect = (ranges) => {
    debugger;
    console.log(ranges);
    setDateRange(ranges.selection);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  };
  const handlecloseDd=(e)=>{
    e.stopPropagation();
setdd(false)
  }
  return (
    <>
      <NavBar />
      <div className=" details-page lex-column">
        <div className="details-image-box">
          <img className="details-main-img" src={img} alt="" />
          <div className="details-image-content d-flex p-4 justify-content-between">
            <div className="d-flex flex-column justify-content-center ">
              <h3 className="text-white">court name</h3>
              <p>location</p>
            </div>

            <div className="align-self-end d-flex gap-3 ">
              <button>Book</button>
              <button>
                {" "}
                <img
                  src={editIcon}
                  alt=""
                  height={"20px"}
                  className="text-white"
                />
              </button>
              <button>
                <img
                  src={imgicon}
                  alt=""
                  height={"20px"}
                  className="text-white"
                />
              </button>
              <button onClick={() => setTimeslot(true)}>
                <img
                  src={addIcon}
                  alt=""
                  height={"20px"}
                  className="text-white"
                />
              </button>
            </div>
          </div>
        </div>
        <ReactQuill
          readOnly={true}
          theme="bubble"
          className="mt-3"
          value={"ajbckjskjdcksjdnkv"}
          name="description"
        />
      </div>
      {openTimeSlot && (
        <Modal onclose={() => setTimeslot(false)}>
          <>
            <div className="p-3 timeslot-select-modal">
              <label htmlFor="startDate :" className="range-label mt-1">
                Select Date Range :
                <img
                  src={calender}
                  height={"20px"}
                  alt=""
                  onClick={() => setCalenderOpen(true)}
                />
              </label>
              <div className="d-flex gap-2 align-items-center mt-2">
              <div className="timeslot-date flex-grow-1 border border-1 rounded-2 p-2 ">sdfdsf</div>
              <img src={forward} height={"20px"} alt="" />
              <div className="timeslot-date flex-grow-1 border border-1 rounded-2 p-2">sdfsdf</div>
              </div>
              
              {calenderOpen && (
                <div className=" calnder-box">
                  {" "}
                  <img
                    className="modal-close-icon"
                    src={closeIcon}
                    alt=""
                    height={"20px"}
                    onClick={() => setCalenderOpen(false)}
                  />
                  <DateRange
                    editableDateInputs={true}
                    onChange={handleSelect}
                    moveRangeOnFirstSelection={false}
                    ranges={[selectionRange]}
                    minDate={new Date()}
                  />
                  <div
                    className="d-flex justify-content-end p-2"
                    onClick={() => setCalenderOpen(false)}
                  >
                    <button className="common-button">select</button>
                  </div>
                </div>
              )}
              <div className="mt-3">
                <Input type={"number"} name={"cost"} label={"Cost"} />
              </div>
               <div className=" range-label position-relative mt-2" onClick={()=>setdd(true)}>
                Select Slots
                {opendd &&  <ul className="slot-list" >
               <li onClick={handlecloseDd}>sefsrgrer</li>
               <li>sefsrgrer</li>
               <li>sefsrgrer</li>
               <li>sefsrgrer</li>
               <li>sefsrgrer</li>
                </ul>}
              </div>
              <div className="d-flex justify-content-end gap-3 py-2 mt-2">
                <div className="common-button bg-black text-white">cancel</div>
                <div className="common-button">create</div>
              </div>
            </div>
          </>
        </Modal>
      )}
    </>
  );
}

export default Details;
