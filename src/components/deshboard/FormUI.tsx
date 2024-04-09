
import {
  Typography
} from "@material-tailwind/react";
import DatePickerUI from "../globalcomponents/DatePickerUI";
import InputUI, { InputNumberUI } from "../globalcomponents/InputUI";
import SelectUI from "../globalcomponents/SelectUI";

function FormUI({ formData, handleChange }) {

  const inputHandler = (e)=>{
    handleChange(e.target.name, e.target.value)
  }



  const options = [1, 2, 3, 4, 5];
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
            <InputNumberUI value={formData.sn} name="sn" id="sn" label={'S/N'} onChange={inputHandler} />
          </div>
          <div className="w-full">
            <DatePickerUI onSelect={inputHandler} name="dateReceived" date={formData.dateReceived} id="dateReceived" label={'Date Received'} />
          </div>
          <div className="w-full">
            <DatePickerUI onSelect={inputHandler} name="dueDateByKAM" date={formData.dueDateByKAM} id="dueDateByKAM" label={'Due Date by KAM /Customer'} />
          </div>
        </div>


        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <div className="w-full">
            <DatePickerUI onSelect={inputHandler} name="projectLevel" date={formData.projectLevel} id="projectLevel" label={'Project Level'} />
          </div>
          <div className="w-full">
            <InputUI name="tat" value={formData.tat} id="tat" onChange={inputHandler} label={'TAT'} />
          </div>
          <div className="w-full">
            <InputNumberUI name="projectLWC" value={formData.projectLWC} id="projectLWC" onChange={inputHandler} label={'Project Life (Work Days)'} />
          </div>
        </div>


        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <div className="w-full">
            <SelectUI options={options} name="status" value={formData.status} id="status" onChange={(e)=> handleChange("status",e)} label={'Status/Dependencies'} />
          </div>
          <div className="w-full">
            <SelectUI options={options} name="customer" value={formData.customer} id="customer" onChange={(e)=> handleChange("customer",e)} label={'Customer'} />
          </div>
          <div className="w-full">
            <SelectUI options={options} name="region" value={formData.region} id="region" onChange={(e)=> handleChange("region",e)} label={'Region'} />
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <div className="w-full">
            <SelectUI options={options} name="kamOwner" value={formData.kamOwner} id="kamOwner" onChange={(e)=> handleChange("kamOwner",e)} label={'KAM/ Owner'} />
          </div>
          <div className="w-full">
            <SelectUI options={options} name="sector" value={formData.sector} id="sector" onChange={(e)=> handleChange("sector",e)} label={'Sector'} />
          </div>
          <div className="w-full">
            <SelectUI options={options} name="pstAssign" value={formData.pstAssign} id="pstAssign" onChange={(e)=> handleChange("pstAssign",e)} label={'Pre-Sales task Assigned to'} />
          </div>
        </div>


        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
          <div className="w-full">
            <InputUI name="requirement" value={formData.requirement} id="requirement" onChange={inputHandler} label={'Requirement / Query'} />
          </div>
          <div className="w-full">
            <InputNumberUI name="psrUpdates" value={formData.psrUpdates} id="psrUpdates" onChange={inputHandler} label={'Pre-Sales Remarks / Updates'} />
          </div>
          <div className="w-full">
            <InputNumberUI name="proposedSolution" value={formData.proposedSolution} id="proposedSolution" onChange={inputHandler} label={'Proposed Solution'} />
          </div>
        </div>

        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
          <div className="w-full">
            <InputNumberUI name="srdiother" value={formData.srdiother} id="srdiother" onChange={inputHandler} label={'Sale/ Rental/ Demo/ In-House/ Other'} />
          </div>
          <div className="w-full">
            <DatePickerUI onSelect={inputHandler} name="submissionTo" date={formData.submissionTo} id="submissionTo" label={'Submission to KAM/ Owner'} />
          </div>
          <div className="w-full">
            <InputNumberUI name="additionR" value={formData.additionR} id="additionR" onChange={inputHandler} label={'Additional Remarks'} />
          </div>
        </div>


      </div>
    </section>
  );
}

export default FormUI;