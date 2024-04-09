import {
    MagnifyingGlassIcon,
    UserPlusIcon,
} from "@heroicons/react/24/outline";
import {
    Button,
    CardHeader,
    Input,
    Typography
} from "@material-tailwind/react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {  editable: true, field: 'sn', headerName: 'S/N', width: 70 },
    {  editable: true, field: 'dateReceived', headerName: 'Date Received', width: 70 },
    {  editable: true, field: 'dueDateByKAM', headerName: 'Due Date by KAM /Customer', width: 70 },
    {  editable: true, field: 'projectLevel', headerName: 'Project Level', width: 70 },
    {  editable: true, field: 'tat', headerName: 'TAT', width: 70 },
    {  editable: true, field: 'projectLWC', headerName: 'Project Life (Work Days)', width: 70 },
    {  editable: true, field: 'status', headerName: 'Status/Dependencies', width: 70 },
    {  editable: true, field: 'customer', headerName: 'Customer', width: 70 },
    {  editable: true, field: 'region', headerName: 'Region', width: 70 },
    {  editable: true, field: 'kamOwner', headerName: 'KAM/ Owner', width: 70 },
    {  editable: true, field: 'sector', headerName: 'Sector', width: 70 },
    {  editable: true, field: 'pstAssign', headerName: 'Pre-Sales task Assigned to', width: 70 },
    {  editable: true, field: 'requirement', headerName: 'Requirement / Query', width: 70 },
    {  editable: true, field: 'psrUpdates', headerName: 'Pre-Sales Remarks / Updates', width: 70 },
    {  editable: true, field: 'proposedSolution', headerName: 'Proposed Solution', width: 70 },
    {  editable: true, field: 'srdiother', headerName: 'Sale/ Rental/ Demo/ In-House/ Other', width: 70 },
    {  editable: true, field: 'submissionTo', headerName: 'Submission to KAM/ Owner', width: 70 },
    {  editable: true, field: 'additionR', headerName: 'Additional Remarks', width: 70 },
];

export default function GridUI2({ addMemberHandler, gridData, handleDelete }) {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <CardHeader style={{margin: '30px 0px 0px 0px'}} floated={false} shadow={false} className="rounded-none">
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
            <DataGrid
                rows={gridData}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                getRowId={(row) => row.sn}
            />
        </div>
    );
}