"use client";
import { useRouter } from "next/navigation";
import { Typography } from "@material-tailwind/react";
import { BsPencilFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { useContact } from "./hook/useContact";

const TABLE_HEAD = ["S/N", "Date Received", "Due Date by KAM /Customer", "Project Level", "TAT", "Project Life (Work Days)", "Status/Dependencies", "Customer", "Region", "KAM/ Owner", "Sector", "Pre-Sales task Assigned to", "Requirement / Query", "Pre-Sales Remarks / Updates", "Proposed Solution", 'Sale/ Rental/ Demo/ In-House/ Other', 'Submission to KAM/ Owner', 'Additional Remarks'];

const   View = ({ messages, handleDelete }) => {
  const router = useRouter();
  const {  getGGG,allMessages } =
  useContact();

  const handleUpdate = (id) => {
    router.push(`/deshboard/${id}`);
  };
  console.log('messagesmessages',getGGG())
  return (
    <>
    <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
      <div class="block w-full overflow-hidden md:w-max">
        <nav>
          <ul role="tablist" class="relative flex flex-row p-1 rounded-lg bg-blue-gray-50 bg-opacity-60">
            <li role="tab"
              class="relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900"
              data-value="all">
              <div class="z-20 text-inherit">
                &nbsp;&nbsp;All&nbsp;&nbsp;
              </div>
              <div class="absolute inset-0 z-10 h-full bg-white rounded-md shadow"></div>
            </li>
            <li role="tab"
              class="relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900"
              data-value="monitored">
              <div class="z-20 text-inherit">
                &nbsp;&nbsp;Monitored&nbsp;&nbsp;
              </div>
            </li>
            <li role="tab"
              class="relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900"
              data-value="unmonitored">
              <div class="z-20 text-inherit">
                &nbsp;&nbsp;Unmonitored&nbsp;&nbsp;
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div class="w-full md:w-72">
        <div class="relative h-10 w-full min-w-[200px]">
          <div class="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" aria-hidden="true" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
            </svg>
          </div>
          <input
            class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" " />
          <label
            class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Search
          </label>
        </div>
      </div>
    </div>
      <table className="mt-4 w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head, index) => (
              <th
                key={head}
                className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  {head}{" "}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* {messages && messages.map(({ sn, dateReceived, dueDateByKAM, projectLevel, projectLWC, status, customer, region, kamOwner, sector, pstAssign, requirement, psrUpdates, proposedSolution, srdiother, submissionTo, additionR }, index) => { */}
          {/* {messages && messages.map((records, index) => { */}
          {/* const isLast = index === messages.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

             return (
               <tr key={id}>
                 {Object.map(record => {
                   return <td className={classes}>
                     <div className="flex flex-col">
                       <Typography
                         variant="small"
                         color="blue-gray"
                         className="font-normal"
                       >
                         {subject}
                       </Typography>
                     </div>
                   </td>
                 })} */}

          {allMessages && allMessages.map((message, index) => {
            const isLast = index === allMessages.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            console.log("xssssss",message)
            return (
              <tr key={index}>
                {Object.keys(message).map((key) => {
                  return (
                    <td className={classes} key={key}>
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {message[key]}
                        </Typography>
                      </div>
                    </td>
                  );
                })}










                <td className="flex justify-center items-center gap-8 p-3">
                  <button
                    onClick={() => {
                      handleUpdate(id);
                    }}
                  >
                    <BsPencilFill className="text-blue-700 text-xl" />
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(id);
                    }}
                  >
                    <MdDeleteForever className=" text-3xl text-red-500" />
                  </button>
                </td>
              </tr>
              // <tr key={id}>
              //   <td className={classes}>
              //     <div className="flex flex-col">
              //       <Typography
              //         variant="small"
              //         color="blue-gray"
              //         className="font-normal"
              //       >
              //         {subject}
              //       </Typography>
              //     </div>
              //   </td>

              //   <td className={classes}>
              //     <div className="flex flex-col">
              //       <Typography
              //         variant="small"
              //         color="blue-gray"
              //         className="font-normal"
              //       >
              //         {email}
              //       </Typography>
              //     </div>
              //   </td>

              //   <td className={classes}>
              //     <Typography
              //       variant="small"
              //       color="blue-gray"
              //       className="font-normal"
              //     >
              //       {message}
              //     </Typography>
              //   </td>

              //   <td className="flex justify-center items-center gap-8 p-3">
              //     <button
              //       onClick={() => {
              //         handleUpdate(id);
              //       }}
              //     >
              //       <BsPencilFill className="text-blue-700 text-xl" />
              //     </button>
              //     <button
              //       onClick={() => {
              //         handleDelete(id);
              //       }}
              //     >
              //       <MdDeleteForever className=" text-3xl text-red-500" />
              //     </button>
              //   </td>
              // </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default View;
