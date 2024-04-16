
import {
  CardHeader,
  Input,
  Typography
} from "@material-tailwind/react";
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridEventListener,
  GridRowEditStopReasons,
  GridRowId,
  GridRowModel,
  GridRowModes,
  GridRowModesModel,
  GridRowsProp,
  GridSlots,
  GridToolbarContainer,
} from '@mui/x-data-grid';
import {
  randomArrayItem,
  randomId
} from '@mui/x-data-grid-generator';
import * as React from 'react';
import { dp_customer, dp_kamOwner, dp_pstAssign, dp_region, dp_sector, dp_status, GRID_KEYS } from '../utils/constants';
import {
  MagnifyingGlassIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";

const roles = ['Market', 'Finance', 'Development'];
const randomRole = () => {
  return randomArrayItem(roles);
};

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  ) => void;
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { ...GRID_KEYS, id }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'dateReceived' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

export default function GridUI3({ addMemberHandler, rows, setRows, handleDelete }) {
  // const [rows, setRows1] = React.useState(gridData);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };


  const makeDate = (date) => {
    if (date?.seconds) {
      return date.toDate();
    }
    return date;
  }

  const columns: GridColDef[] = [
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
    { editable: true, field: 'sn', headerName: 'S/N', width: 70 },
    {
      editable: true, valueGetter: makeDate, type: 'date', field: 'dateReceived', headerName: 'Date Received', width: 130
    },
    {
      editable: true, valueGetter: makeDate, type: 'date', field: 'dueDateByKAM', headerName: 'Due Date by KAM /Customer', width: 130
    },
    {
      editable: true, valueGetter: makeDate, type: 'date', field: 'projectLevel', headerName: 'Project Level', width: 130
    },
    { editable: true, field: 'tat', headerName: 'TAT', width: 130 },
    { editable: true, field: 'projectLWC', headerName: 'Project Life (Work Days)', width: 130 },
    { editable: true, type: 'singleSelect', valueOptions: dp_status, field: 'status', headerName: 'Status/Dependencies', width: 130 },
    { editable: true,type: 'singleSelect', valueOptions: dp_customer, field: 'customer', headerName: 'Customer', width: 130 },
    { editable: true,type: 'singleSelect', valueOptions: dp_region, field: 'region', headerName: 'Region', width: 130 },
    { editable: true, type: 'singleSelect', valueOptions: dp_kamOwner, field: 'kamOwner', headerName: 'KAM/ Owner', width: 130 },
    { editable: true, type: 'singleSelect', valueOptions: dp_sector, field: 'sector', headerName: 'Sector', width: 130 },
    { editable: true, type: 'singleSelect', valueOptions: dp_pstAssign, field: 'pstAssign', headerName: 'Pre-Sales task Assigned to', width: 130 },
    { editable: true, field: 'requirement', headerName: 'Requirement / Query', width: 130 },
    { editable: true, field: 'psrUpdates', headerName: 'Pre-Sales Remarks / Updates', width: 130 },
    { editable: true, field: 'proposedSolution', headerName: 'Proposed Solution', width: 130 },
    { editable: true, field: 'srdiother', headerName: 'Sale/ Rental/ Demo/ In-House/ Other', width: 130 },
    { editable: true,  valueGetter: makeDate, type: 'date', field: 'submissionTo', headerName: 'Submission to KAM/ Owner', width: 130 },
    { editable: true, field: 'additionR', headerName: 'Additional Remarks', width: 130 },

  ];

  return (
    <Box
      sx={{
        height: 500,
        margin: '10px 0px 0px 0px',
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
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
          <Button onClick={addMemberHandler} className="flex items-center gap-3" size={"sm"}>
            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
          </Button>
        </div>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar as GridSlots['toolbar'],
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
  );
}


