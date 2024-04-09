import React from "react";

// @material-tailwind/react
import {
  Input,
  Typography,
  Select,
  Option,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

// day picker
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

// @heroicons/react
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import DatePickerUI from "../globalcomponents/DatePickerUI";
import TextUI from "../globalcomponents/TextUI";
import SelectUI from "../globalcomponents/SelectUI";
import InputUI, { InputEmailUI, InputNumberUI } from "../globalcomponents/InputUI";

function FormUI({ formData, handleChange }) {

  return (
    <section className="py-2 container mx-auto">
      <Typography variant="h5" color="blue-gray">
        Basic Information
      </Typography>
      <Typography
        variant="small"
        className="text-gray-600 font-normal mt-1"
      >
        Update your profile information below.
      </Typography>
      <div className="flex flex-col mt-8">
        
        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
          <div className="w-full">
            <InputNumberUI name="sn" id="sn" label={'S/N'} onChange={handleChange} />
          </div>
          <div className="w-full">
            <InputUI name="dateReceived" id="dateReceived" onChange={handleChange} label={'Date Received'} />
          </div>
          <div className="w-full">
            <DatePickerUI name="dueDateByKAM" id="dueDateByKAM" label={'Due Date by KAM /Customer'} date={""} />
          </div>
        </div>


        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <div className="w-full">
            <SelectUI  name="projectLevel" id="projectLevel" label={'Project Level'} />
          </div>
          <div className="w-full">
            <InputUI name="tat" id="tat" onChange={handleChange} label={'TAT'}  />
          </div>
          <div className="w-full">
            <InputNumberUI  name="projectLWC" id="projectLWC" onChange={handleChange} label={'Project Life (Work Days)'} />
          </div>
        </div>


        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <div className="w-full">
            <SelectUI name="status" id="status" onChange={handleChange} label={'Status/Dependencies'} />
          </div>
          <div className="w-full">
            <SelectUI name="customer" id="customer" onChange={handleChange} label={'Customer'}  />
          </div>
          <div className="w-full">
            <SelectUI name="region" id="region" onChange={handleChange} label={'Region'} />
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <div className="w-full">
            <SelectUI name="kamOwner" id="kamOwner" onChange={handleChange} label={'KAM/ Owner'} />
          </div>
          <div className="w-full">
            <SelectUI name="sector" id="sector" onChange={handleChange} label={'Sector'}  />
          </div>
          <div className="w-full">
            <SelectUI name="pstAssign" id="pstAssign" onChange={handleChange} label={'Pre-Sales task Assigned to'} />
          </div>
        </div>


        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
          <div className="w-full">
            <InputUI name="requirement" id="requirement" onChange={handleChange} label={'Requirement / Query'} />
          </div>
          <div className="w-full">
            <InputNumberUI name="psrUpdates" id="psrUpdates" onChange={handleChange} label={'Pre-Sales Remarks / Updates'} />
          </div>
          <div className="w-full">
            <InputNumberUI name="proposedSolution" id="proposedSolution" onChange={handleChange} label={'Proposed Solution'}  />
          </div>
        </div>
        
        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
          <div className="w-full">
            <InputNumberUI  name="srdiother" id="srdiother" onChange={handleChange} label={'Sale/ Rental/ Demo/ In-House/ Other'} />
          </div>
          <div className="w-full">
            <InputUI name="submissionTo" id="submissionTo" onChange={handleChange} label={'Submission to KAM/ Owner'} />
          </div>
          <div className="w-full">
            <InputNumberUI name="additionR" id="additionR" onChange={handleChange} label={'Additional Remarks'}  />
          </div>
        </div>


      </div>
    </section>
  );
}

export default FormUI;