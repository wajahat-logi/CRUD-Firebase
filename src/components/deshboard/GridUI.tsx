import {
    UserPlusIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    IconButton,
    Input,
    Typography
} from "@material-tailwind/react";
import TextUI from "../globalcomponents/TextUI";
import { TABLE_HEAD, TABLE_ROWS } from "../utils/constants";
import { useState } from "react";



const GridUI = ({ addMemberHandler, gridData, handleDelete }) => {
    
    return (
        <Card className="mt-10 h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Members list
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            These are details about the last members
                        </Typography>
                    </div>
                    <div className="flex w-full shrink-0 gap-2 md:w-max">
                        <div className="w-full md:w-72">
                            <Input
                                label="Search"
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            />
                        </div>
                        <Button onClick={addMemberHandler} className="flex items-center gap-3" size="sm">
                            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member

                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardBody style={{ height: '50vh' }} className="overflow-scroll px-0 p-0 overflow-y-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead className="sticky top-0 bg-white">
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {gridData.map(
                            (element, index,) => {
                                return <tr  key={element.sn}>
                                    {
                                        Object.keys(element).map(e => {
                                            const isLast = index === TABLE_ROWS.length - 1;
                                            const classes = isLast
                                                ? "p-4"
                                                : "p-4 border-b border-blue-gray-50";

                                            return (
                                                <td className={classes}>
                                                    <TextUI label={element[e]} className="font-normal" />
                                                </td>
                                            );
                                        })
                                    }
                                </tr>
                            },
                        )}
                    </tbody >
                </table >
            </CardBody >
        </Card >
    );
}

export default GridUI;