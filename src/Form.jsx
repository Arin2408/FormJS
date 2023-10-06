import React from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
    function Submit(e) {
      e.preventDefault(); 
      console.log("Submitted")
      const formEle = document.querySelector("form");
      const formData = new FormData(formEle);
      fetch(
        "https://script.google.com/macros/s/AKfycbySjn2sQEh8QKIHX4K-RVyESn2oVs1PGCbDkCuQg27qXwCe8g05PBqEZtAaRVE607cY/exec",
        {
          method: "POST",
          body: formData
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
        toast.success("Data submitted successfully!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000, // Toast will be visible for 3 seconds
        });
    }

  
    return (
        <section className="px-5 m-[90px] lg:px-0 ">
          <div className="w-full bg-white max-w-[600px] mx-auto rounded-lg shadow-md md:p-10 bg-white">
              <div className="flex flex-col justify-center ">

              <h1 className="flex text-2xl text-blue-900 m-2 justify-center">Please fill the details and Confirm</h1>
            
                  <form onSubmit={(e) => Submit(e)}>
                    <div className="flex flex-col p-3">
                    <label className = 'text-green-700 py-2 font-medium' >Patient Name</label>
                    <input className="border rounded-md font-medium p-3" placeholder="Rahul" name="Name" type="text" />
                    </div>
                    <div className="flex flex-col p-3">
                    <label className = 'text-green-700 py-2 font-medium' >Email</label>
                    <input className="border rounded-md font-medium p-3" placeholder="example@email.com" name="Email" type="text" />
                    </div>

                    <div className="flex flex-col p-3">
                    <label className = 'text-green-700 py-2 font-medium' >Phone Number</label>
                    <input className="border rounded-md font-medium p-3" placeholder="9876543210" name="Phone_number" type="tel" />
                    </div>

                    <div className="flex flex-col p-3">
                      <label className = 'text-green-700 py-2 font-medium' >Date of Appointment</label>
                      <input className="border font-medium rounded-md p-3" placeholder="24/10/2023" type="Date" />
                    </div>

                    <div className="mb-5 px-4 flex items-center justify-between">
                      <label className="font-bold text-[16px] leading-7">
                         <span className="text-green-700">Choose time slot:</span>
                        <select
                          name="time"
                          className=" font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                        >
                          <option value="">Select</option>
                          <option value="Slot-1">09:00-09:30</option>
                          <option value="Slot-2">09:00-10:00</option>
                          <option value="Slot-3">10:00-10:30</option>
                          <option value="Slot-4">10:30-11:00</option>
                          <option value="Slot-5">11:00-11:30</option>
                          <option value="Slot-6">11:30-12:00</option>
                        </select>
                      </label>
                    </div>

                    <div className="mb-5 px-4 flex items-center justify-between">
                      <label className="font-bold text-[16px] leading-7">
                         <span className="text-green-700">Confirm your Doctor:</span>
                        <select
                          name="role"
                          className=" font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                        >
                          <option value="">Select</option>
                          <option value="neeraj">Dr. Neeraj Chopra</option>
                          <option value="usha">Dr. Usha Sharma</option>
                          <option value="vipul">Dr. Vipul Kumar</option>
                        </select>
                      </label>
                    </div>
                    


                    <div className="mb-5 flex px-4 items-center justify-between">
                      <label className="font-bold text-[16px] leading-7">
                      <span className="text-green-700" >Purpose of visit:</span>
                        
                        <select
                          name="role"
                          className="font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                        >
                          <option value="">Select</option>
                          <option value="regular">Regular Checkup</option>
                          <option value="first">First Time Appointment</option>
                          <option value="others">Others</option>


                        </select>
                      </label>
                    </div>
                    <div className="mb-5 px-4 flex items-center justify-between">
                <label className="font-bold text-[16px] leading-7">
                  <span className="text-green-700" >Gender:</span>
                  <select
                    name="gender"
                    className="font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

                    <div className="flex items-center justify-center">
                      <input className="border-blue-600 bg-blue-600 text-white flex justify-center rounded-md p-3" name="Name" type="submit" />
                    </div>
                    
                  </form>
                </div>
            </div>
        </section> 
    );
  
}