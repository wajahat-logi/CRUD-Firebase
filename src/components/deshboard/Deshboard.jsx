"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { useAuth } from "../../../firebase/auth";
import GridUI from "./GridUI";
import { useContact } from "./hook/useContact";
import SlideoutUI from "./SlideoutUI";
import { GRID_KEYS } from "../utils/constants";
import GridUI2 from "./GridUI2";
import GridUI3 from "./GridUI3";


const Deshboard = () => {
  const params = useParams();
  const { authUser } = useAuth();
  const { initialValues, schema, handleSubmit, handleDelete, allMessages } = useContact();

  const [formData, setFormData] = useState(GRID_KEYS);
  const [gridData, setGridData] = useState([]);
  const [gs, setGs] = useState({
    openSlideout: false
  })

  const handleChange = (name, value) => {
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

  const saveHandler = () => {
    setGridData(p => ([...p, formData]))
    setGsHandler('openSlideout', false);
    setFormData(GRID_KEYS);
  }

  return (
    <div className="flex-col mb-8 container mx-auto flex items-center justify-between text-blue-gray-900 ">
      <SlideoutUI saveHandler={saveHandler} formData={formData} handleChange={handleChange} openSlideout={gs.openSlideout} closeSlideout={() => setGsHandler('openSlideout', false)} />
      {/* <GridUI addMemberHandler={addMemberHandler} gridData={gridData} handleDelete={handleDelete} /> */}
      {/* <GridUI2 addMemberHandler={addMemberHandler} gridData={gridData} handleDelete={handleDelete} /> */}
      <GridUI3 addMemberHandler={addMemberHandler} gridData={gridData} handleDelete={handleDelete}  />
    </div>
  );
};

export default Deshboard;
