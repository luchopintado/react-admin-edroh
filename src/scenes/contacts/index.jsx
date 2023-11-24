import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {field: "id", headerName: "ID", flex: 0.5 },
        {field: "registrarId", headerName: "Registrar ID", flex: 1 },
        {field: "name", headerName: "Name", flex: 1.5, cellClassName: "name-column--cell" },
        {field: "phone", headerName: "Phone Number", flex: 1 },
        {field: "email", headerName: "Email", flex: 1.5 },
        {field: "address", headerName: "Address", flex: 2 },
        {field: "city", headerName: "City", flex: 1 },
        {field: "zipCode", headerName: "Zip Code", flex: 0.5 },
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
            backgroundColor: colors.primary[500]
        },
        "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700]
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]}!important`
        },
        "& .name-column--cell": {
            color: colors.greenAccent[300]
        },
    };

    return (
        <Box m="20px">
            <Header title="CONTACTS" subtitle="List of contacts for future references" />
            <Box mt="20px" sx={dataGridStyles}>
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
}

export default Contacts;