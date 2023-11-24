import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const renderCell = ({ row }) => (
        <Typography color={colors.greenAccent[500]}>
            ${ row.cost }
        </Typography>
    );
    const columns = [
        {field: "id", headerName: "ID", flex: 0.5 },
        {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
        {field: "email", headerName: "Email", flex: 1 },
        {field: "cost", headerName: "Cost", flex: 0.75, type: "number", headerAlign: "right", align: "right", renderCell },
        {field: "phone", headerName: "Phone Number", flex: 0.75 },
        {field: "date", headerName: "Date", flex: 0.75 },
    ];

    const dataGridStyles = {
        "& .MuiDataGrid-root": {
            border: "none"
        },
        "& .MuiDataGrid-cell": {
            borderBottom: "none"
        },
        "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700]
        },
        "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400]
        },
        "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700]
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]}!important`
        },
        "& .MuiCheckBox-root": {
            color: `${colors.grey[400]}!important`
        },
        "& .Mui-checked": {
            color: "unset"
        },
        "& .name-column--cell": {
            color: `${colors.greenAccent[200]}!important`
        },
    };

    return (
        <Box m="20px">
            <Header title="INVOICES" subtitle="List of Invoice Balance" />
            <Box mt="20px" sx={dataGridStyles}>
                <DataGrid
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}
                />
            </Box>
        </Box>
    );
}

export default Invoices;