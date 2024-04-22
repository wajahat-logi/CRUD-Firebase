"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "../../../firebase/auth";
import { GRID_KEYS } from "../utils/constants";
import FooterUI from "../welcome/FooterUI";
import GridUI3 from "./GridUI3";
import { useContact } from "./hook/useContact";
import useGraph from "./hook/useGraph";
import SlideoutUI from "./SlideoutUI";
import { TPYRWChart,TQRRWChart,MVWSChart,MRWSChart,TVSChart,MAPYWSChart } from "../graphs/chart";



const Deshboard = () => {
  const params = useParams();
  const { authUser } = useAuth();
  const { getGridData, schema, handleSubmit, handleDelete, saveGridData } = useContact();
  const { TPYRWChartData, TQRRWChartData,MVWSChartData,MRWSChartData,TVSChartData,MAPYWSChartData } = useGraph();
  const [isDisable, setDisable] = useState(false);

  const [formData, setFormData] = useState(GRID_KEYS);
  const [gridData, setGridData] = useState([]);
  const [gs, setGs] = useState({
    openSlideout: false
  })


  useEffect(() => {
    const fetch = async () => {
      const data = await getGridData();
      setGridData(data);
    };
    fetch();
  }, [])


  useEffect(() => {
    setDisable(true);
  }, [gridData]);

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

  const onSaveHandler = () => {
    saveGridData(gridData);
  }


  return (
    <>
      <div className=" p-1 flex-col mb-8 container mx-auto flex items-center justify-between text-blue-gray-900 ">
        {/* <SlideoutUI saveHandler={saveHandler} formData={formData} handleChange={handleChange} openSlideout={gs.openSlideout} closeSlideout={() => setGsHandler('openSlideout', false)} />
        <GridUI3 addMemberHandler={addMemberHandler} rows={gridData} setRows={setGridData} handleDelete={handleDelete} /> */}
       
        <TPYRWChart min={2019} max={2024} series={TPYRWChartData}/>
        <TQRRWChart  series={TQRRWChartData}/>
        <MVWSChart series={MVWSChartData}/>
        <MRWSChart dataset={MRWSChartData}/>
        <TVSChart series={TVSChartData}/>
        <MAPYWSChart series={MAPYWSChartData}/>
      </div>
      <FooterUI setDisable={setDisable} isDisable={isDisable} onSaveHandler={onSaveHandler} />
    </>
  );
};

export default Deshboard;
