import React, { useEffect, useState } from 'react';

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

const UserForm = () => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
      {/* Add more form fields here */}

      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="projectLevel">
          S/N
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          type="number"
          id="snID"
          name="sn"
          value={formData.sn}
          onChange={handleChange}
        />
      </div>



      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="projectLevel">
          Project Level
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          id="projectLevel"
          name="projectLevel"
          value={formData.projectLevel}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="tat">
          TAT
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          id="tat"
          name="tat"
          value={formData.tat}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="status">
          Status
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="">Select status</option>
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="status">
          Status
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="">Select status</option>
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="status">
          Status
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="">Select status</option>
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="status">
          Status
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="">Select status</option>
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="status">
          Status
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="">Select status</option>
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="status">
          Status
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="">Select status</option>
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="status">
          Status
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="">Select status</option>
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="status">
          Status
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="">Select status</option>
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      {/* Add more form fields here */}

      <div className="mt-6">
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};



export const GenericForm = ({formData,handleChange}) => {
  // const [formData, setFormData] = useState(data);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // React.useImperativeHandle(ref, () => ({
  //   getData: () => formData,
  // }));

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log(formData);
  // };
  // console.log(formData);
  // console.log('formData:', formData);
  // console.log('ref.current:', ref);
  return (
    <div className="max-w-lg mx-auto h-64 overflow-y-auto">

      <form >
        {Object.keys(formData).map((key) => (
          <div className="mb-4" key={key}>
            <label className="block mb-2 font-bold text-gray-700" htmlFor={key}>
              {key}
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type={typeof formData[key] === 'number' ? 'number' : 'text'}
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
            />
          </div>
        ))}
      </form>
    </div>

  );
};


export default UserForm;


