import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import getDataGridStyles from "../global/styles";

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

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dataGridStyles = getDataGridStyles(colors);

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