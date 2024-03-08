import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import AxiosInstance from "../api/apicall";
import { TIMINGS } from "../Constants/constants";
import { Calendar } from "react-date-range";

function Details() {
  const { id } = useParams();
  const [openTimeSlot, setTimeslot] = useState(false);
  const [selectionRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [calenderOpen, setCalenderOpen] = useState(false);
  const [opendd, setdd] = useState(false);
  const [selectedSolt, setSelectedSlot] = useState([]);
  const [filterdTimings, setFilteredTimings] = useState(TIMINGS);
  const [cost, setCost] = useState(0);
  const [bookModal, setBookModal] = useState(true);
  const [selectedDate, setselectedDate] = useState(new Date().toLocaleDateString());
  const [allSlots,setAllSlots]=useState([])
  const [bookedSlots,setBookedSots]=useState([])
  useEffect(() => {
    getLatestCreatedDate();
    getSingleCourtData();
  }, []);
  useEffect(()=>{
    getavailableSlotData(selectedDate)
  },[selectedDate])
  const handleSelect = (ranges) => {
    setDateRange(ranges.selection);
  };
  const handlecloseDd = (e, slot) => {
    e.stopPropagation();
    setSelectedSlot([...selectedSolt, slot]);
    const newTimings = filterdTimings.filter(
      (element) => element.id !== slot.id
    );
    setFilteredTimings(newTimings);

    setdd(false);
  };
  const getSingleCourtData = () => {
    AxiosInstance.get("/users/getSingleCourtData", { params: { courtId: id } })
      .then((response) => {})
      .catch((err) => {});
  };
  const createCourtSchedules = () => {
    AxiosInstance({
      url: "/admin/addtimeslots",
      method: "post",
      data: {
        startDate: selectionRange.startDate,
        endDate: selectionRange.endDate,
        selectedTimings: selectedSolt,
        cost,
        courtId: id,
      },
    })
      .then((res) => {})
      .catch((res) => {});
  };
  const getLatestCreatedDate = () => {
    AxiosInstance("/admin/getLatestCreatedDate", { params: { courtId: id } })
      .then((resp) => {})
      .catch((err) => {});
  };
  const getavailableSlotData=(date)=>{
    AxiosInstance.get('/users/getslotsdata',{params:{date:date,courtId:id}}).then((res)=>{
setAllSlots(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const selectorDeselect=(slotId)=>{

if(bookedSlots.includes(slotId)){
  const temp=bookedSlots.filter((id)=>id!==slotId)
  setBookedSots(temp)

}else{
  setBookedSots([...bookedSlots,slotId])

}
  }
  const initiateBooking =async ()=>{
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
  );

  if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
  }

  // creating a new order
  debugger
  const result = await AxiosInstance.post("/payment/orders",{slotIds:bookedSlots,courtId:id});

  if (!result) {
      alert("Server error. Are you online?");
      return;
  }

  // Getting the order details back
  const { amount, id: order_id, currency,receipt } = result.data;

  const options = {
      key: "rzp_test_RmJEvDzXfqDrXm", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "bookMy court",
      description: "Test Transaction",
      order_id: order_id,
      handler: async function (response) {
          const data = {
              orderCreationId: order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
              orderId:receipt,
              slotIds:bookedSlots,
              date:selectedDate
          };

          const result = await AxiosInstance.post("/payment/success", data);
      },
      prefill: {
          name: "Soumya Dey",
          email: "SoumyaDey@example.com",
          contact: "9999999999",
      },
      notes: {
          address: "Soumya Dey Corporate Office",
      },
      theme: {
          color: "#61dafb",
      },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
  }

  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
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
                e
              </label>
              <div className="d-flex gap-2 align-items-center mt-2">
                <div className="timeslot-date flex-grow-1 border border-1 rounded-2 p-2 ">
                  {new Date(selectionRange.startDate).toLocaleDateString()}
                </div>
                <img src={forward} height={"20px"} alt="" />
                <div className="timeslot-date flex-grow-1 border border-1 rounded-2 p-2">
                  {new Date(selectionRange?.endDate).toLocaleDateString()}
                </div>
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
                <Input
                  type={"number"}
                  name={"cost"}
                  label={"Cost"}
                  onchange={(e) => setCost(e.target.value)}
                />
              </div>
              <div
                className=" range-label position-relative mt-2"
                onClick={() => setdd(true)}
              >
                Select Slots
                {opendd && (
                  <ul className="slot-list">
                    {filterdTimings.map((slot, index) => (
                      <li onClick={(e) => handlecloseDd(e, slot)}>
                        {slot.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="d-flex flex-wrap gap-2">
                {selectedSolt.map((slot) => (
                  <span className="border border-1 rounded-2 px-2 py-1 mt-1 fs-6 ">
                    {slot.name}
                  </span>
                ))}
              </div>

              <div className="d-flex justify-content-end gap-3 py-2 mt-2">
                <div className="common-button bg-black text-white">cancel</div>
                <div className="common-button" onClick={createCourtSchedules}>
                  create
                </div>
              </div>
            </div>
          </>
        </Modal>
      )}
      {bookModal && (
        <Modal onclose={() => setBookModal(false)}>
          <>
            <div className="p-3 timeslot-select-modal h-100 d-flex flex-column">
              <label htmlFor="startDate :" className="range -label mt-1">
                Select Date :
                <input
                  type="date"
                  className="p-1 px-2 mx-2 border rounded-1 "
                  value={selectedDate}
                  onChange={(e) => setselectedDate(e.target.value)}
                />
              </label>

              <div
              >
                Available Slots :
                <div className="d-flex flex-wrap gap-2 flex-grow-1 mt-1">
               {allSlots.map((slot)=>   <span className={`${bookedSlots.includes(slot._id)? 'bg-info-subtle ':slot.slot.bookedBy?' notAvailableSlots':'availalbleslots' } px-2 py-1 mt-2`} onClick={()=>selectorDeselect(slot._id)} >
                   {slot.slot.name}</span>)}
                </div>
              </div>
              <div className="d-flex justify-content-end gap-3 py-2 mt-2 ">
                  <div className="common-button bg-black text-white">
                    cancel
                  </div>
                  <div className="common-button" onClick={initiateBooking}>
                    Book
                  </div>
                </div>
            </div>
          </>
        </Modal>
      )}
    </>
  );
}

export default Details;
