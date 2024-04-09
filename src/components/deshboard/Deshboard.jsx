"use client";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useParams } from "next/navigation";
import { useContact } from "./hook/useContact";
import { useAuth } from "../../../firebase/auth";
import View from "./View";
import Model from "./Model";
import Table from "./Table";
import GridUI from "./GridUI";
import UserForm, { GenericForm } from "./UserForm";
import SlideoutUI from "./SlideoutUI";
import GridUI2 from "./GridUI2";
// import NavbarUI from "./NavbarUI";

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

const Deshboard = () => {
  const params = useParams();
  const { authUser } = useAuth();

  const { initialValues, schema, handleSubmit, handleDelete, allMessages } = useContact();

  const [formData, setFormData] = useState(data);
  const [gridData, setGridData] = useState([]);
  const [gs, setGs] = useState({
    openSlideout: false
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const setGsHandler = (name, value) => {
    setGs((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addMemberHandler = () => {
    setGsHandler('openSlideout', true);
  }


  return (
    <div className="flex-col container mx-auto flex items-center justify-between text-blue-gray-900 ">
      <GridUI addMemberHandler={addMemberHandler} gridData={gridData} handleDelete={handleDelete} />
      <SlideoutUI formData={formData} handleChange={handleChange} openSlideout={gs.openSlideout} closeSlideout={() => setGsHandler('openSlideout', false)} />
      {/* 
      <Model />
      <View messages={allMessages} /> */}
      {/* <GridUI2 /> */}
      {/* <Table /> */}
      {/* <View messages={allMessages} /> */}
    </div>
  );
};

export default Deshboard;
