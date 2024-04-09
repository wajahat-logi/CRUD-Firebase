import { PencilIcon } from "@heroicons/react/24/solid";
import {
    ArrowDownTrayIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Input,
} from "@material-tailwind/react";
import { GRID_KEYS } from "../utils/constants";
// import { useRouter } from "next/router";
import { useContact } from "./hook/useContact";


const TABLE_HEAD = ["S/N", "Date Received", "Due Date by KAM /Customer", "Project Level", "TAT", "Project Life (Work Days)", "Status/Dependencies", "Customer", "Region", "KAM/ Owner", "Sector", "Pre-Sales task Assigned to", "Requirement / Query", "Pre-Sales Remarks / Updates", "Proposed Solution", 'Sale/ Rental/ Demo/ In-House/ Other', 'Submission to KAM/ Owner', 'Additional Remarks'];

const TABLE_ROWS = [
    {
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
    },
    {
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
    }, {
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
    }, {
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
    }, {
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
    }
];

const GridUI = ({ addMemberHandler, gridData, handleDelete }) => {
    // const router = useRouter();
    const { getGGG, allMessages } = useContact();

    const handleUpdate = (id) => {
        // router.push(`/deshboard/${id}`);
    };

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
                            <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Add member
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
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
                        {TABLE_ROWS.map(
                            (
                                {
                                    sn,
                                    dateReceived,
                                    dueDateByKAM,
                                    projectLevel,
                                    tat,
                                    projectLWC,
                                    status,
                                    customer,
                                    region,
                                    kamOwner,
                                    sector,
                                    pstAssign,
                                    requirement,
                                    psrUpdates,
                                    proposedSolution,
                                    srdiother,
                                    submissionTo,
                                    additionR,
                                },
                                index,
                            ) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={sn}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Avatar
                                                    // src={img}
                                                    // alt={name}
                                                    size="md"
                                                    className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                                                />
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-bold"
                                                >
                                                    {/* {name} */}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {sn}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {dateReceived}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {dueDateByKAM}
                                            </Typography>
                                        </td><td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {projectLevel}
                                            </Typography>
                                        </td><td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {tat}
                                            </Typography>
                                        </td><td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {projectLWC}
                                            </Typography>
                                        </td><td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {status}
                                            </Typography>
                                        </td><td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {customer}
                                            </Typography>
                                        </td><td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {region}
                                            </Typography>
                                        </td><td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {kamOwner}
                                            </Typography>
                                        </td><td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {sector}
                                            </Typography>
                                        </td><td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {pstAssign}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {requirement}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {psrUpdates}
                                            </Typography>
                                        </td> <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {proposedSolution}
                                            </Typography>
                                        </td> <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {srdiother}
                                            </Typography>
                                        </td> <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {submissionTo}
                                            </Typography>
                                        </td> <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {additionR}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Chip
                                                    size="sm"
                                                    variant="ghost"
                                                    value={status}
                                                    color={
                                                        status === "paid"
                                                            ? "green"
                                                            : status === "pending"
                                                                ? "amber"
                                                                : "red"
                                                    }
                                                />
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                                                    <Avatar
                                                        // src={
                                                        //     account === "visa"
                                                        //         ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                                                        //         : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                                                        // }
                                                        size="sm"
                                                        // alt={account}
                                                        variant="square"
                                                        className="h-full w-full object-contain p-1"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal capitalize"
                                                    >
                                                        {/* {account.split("-").join(" ")} {accountNumber} */}
                                                    </Typography>

                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Tooltip content="Edit User">
                                                <IconButton variant="text">
                                                    <PencilIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
            
        </Card>
    );
}

export default GridUI;