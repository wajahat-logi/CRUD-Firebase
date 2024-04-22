"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  addDoc,
  collection,
  where,
  query,
  deleteDoc,
  updateDoc,
  doc,
  setDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../../firebase/auth";
import { contactSchema } from "../schema/contactSchema";
import { db } from "../../../../firebase/firebase";
import { dataarray } from "./dummy";
import { useToastMessages } from "../../message/useToastMessages";
import { dp_TPYRWChartData,dp_TQRRWChartData,dp_MVWSChartData,dp_MRWSChartData,dp_TVSChartData,dp_MAPYWSChartData } from './../../utils/constants';

 const useContact = () => {

    const [TPYRWChartData,setTPYRWChartData] = useState(dp_TPYRWChartData);
    const [TQRRWChartData,setTQRRWChartData] = useState(dp_TQRRWChartData);
    const [MVWSChartData,setMVWSChartData] = useState(dp_MVWSChartData);
    const [MRWSChartData,setMRWSChartData] = useState(dp_MRWSChartData);
    const [TVSChartData,setTVSChartData] = useState(dp_TVSChartData);
    const [MAPYWSChartData,setMAPYWSChartData] = useState(dp_MAPYWSChartData);


    useEffect(()=>{
        setTPYRWChartDataHandler();
    },[]);

    const setTPYRWChartDataHandler = async ()=>{

        const south = [];
        const north = [];
        const central = [];
        const q = query(collection(db, "Records"));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      const prevRecord = doc.data().grid;
      data = [...data, ...prevRecord]
    });


    
        setTPYRWChartData( [
            { data: [35,2,13,4,5,6],label: 'South' },
            { data: [35,2,3,4,5,6],label: 'North' },
            { data: [35,2,3,4,5,6],label: 'Central' },
          ]);

          setTQRRWChartData([
            {
              data: [
                { id: 0, value: 10, label: 'South' },
                { id: 1, value: 15, label: 'North' },
                { id: 2, value: 20, label: 'Central' },
              ],
            },
          ])


          setMVWSChartData([ { data: [1,2,3,4] }]);
          setMRWSChartData([
            {
              value: 1,
              direction: 'Central',
            },
            {
              value: 2,
              direction: 'North',
            },
            {
              value: 3,
              direction: 'South',
            },
          ]);

          setTVSChartData([ { data: [1,2,3,4] }]);
          setMAPYWSChartData([ { data: [1,2,3,4] }]);
    }



  return {
    TPYRWChartData,
    TQRRWChartData,
    MVWSChartData,
    MRWSChartData,
    TVSChartData,
    MAPYWSChartData
  };
};

export default useContact;