"use client";

import React, { useRef, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useParams } from "next/navigation";
import { useContact } from "./hook/useContact";
import { useAuth } from "../../../firebase/auth";
import View from "./View";
import UserForm, { GenericForm } from "./UserForm";

const Model = ({ handleGetDataP }) => {
  const params = useParams();
  const { authUser } = useAuth();

  const { initialValues, schema, handleSubmit, handleDelete, SetData, allMessages } =
    useContact();

  function openDialog(e) {
    const dialogBackdrop = document.querySelector('[data-dialog-backdrop="dialog-xxl"]');
    dialogBackdrop.style.opacity = '1';
    dialogBackdrop.style.pointerEvents = 'auto';

  }


  function onClose(e) {
    const dialogBackdrop = document.querySelector('[data-dialog-backdrop="dialog-xxl"]');
    dialogBackdrop.style.opacity = '0';
    dialogBackdrop.style.pointerEvents = 'none';

  }

  function onConfirm(e) {


  }
  const data = {
    sn: 0,
    dateReceived: '',
    dueDateByKAM: '',
    projectLevel: '',
    tat: '',
    projectLWC: 0,
    status: '',
    customer: '',
    region: '',
    kamOwner: '',
    sector: '',
    pstAssign: '',
    requirement: '',
    psrUpdates: 0,
    proposedSolution: 0,
    srdiother: 0,
    submissionTo: '',
    additionR: 0,
  };
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const childRef = useRef(null);

  const handleGetData = () => {
    // if (childRef.current) {
    //   const childData = childRef.current.getData();
    //   console.log('Data from Child:', childData);
    // }
    const dialogBackdrop = document.querySelector('[data-dialog-backdrop="dialog-xxl"]');

    dialogBackdrop.style.opacity = '0';
    dialogBackdrop.style.pointerEvents = 'none';
    SetData(formData);
    // handleGetDataP();
  };

  // const [formData, setFormData] = useState(data);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };


  return (
    <>

      {/* <button data-ripple-light="true" data-dialog-target="dialog" onClick={openDialog}
                class="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Open Dialog
            </button>
            <div data-dialog-backdrop="dialog" data-dialog-backdrop-close="true"
                class="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300">
                <div data-dialog="dialog"
                    class="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl">
                    <div
                        class="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
                        Its a simple dialog.
                    </div>
                    <GenericForm />
                
                    <div class="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
                        <button data-ripple-dark="true" data-dialog-close="true" onClick={onClose}
                            class="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            Cancel
                        </button>
                        <button data-ripple-light="true" data-dialog-close="true" onClick={onConfirm}
                            class="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            Confirm
                        </button>
                    </div>
                </div>
                
            </div> */}

      <button data-ripple-light="true" data-dialog-target="dialog-xxl" onClick={openDialog}
        class="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        Open Dialog XXL
      </button>
      <div data-dialog-backdrop="dialog-xxl" data-dialog-backdrop-close="true"
        class="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300">
        <div data-dialog="dialog-xxl"
          class="relative h-screen w-screen min-w-[100vw] max-w-[100vw] bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
          <div
            class="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
            Its a simple dialog.
          </div>


          <div
            class="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
            <div className="flex items-center justify-center ">
              <div className="grid grid-cols-4 gap-4">
                {/* Your content for the four columns */}
                <div className="bg-gray-200 p-4"><GenericForm formData={formData} handleChange={handleChange} />  1</div>

              </div>
              
            </div>
          </div>
          <div class="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
            <button data-ripple-dark="true" data-dialog-close="true" onClick={onClose}
              class="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Cancel
            </button>
            <button data-ripple-light="true" data-dialog-close="true" onClick={handleGetData}
              class="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Confirm
            </button>
          </div>
        </div>
      </div>



    </>
  );
};

export default Model;
