import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { mockDataInvoices } from "../../data/mockData";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import getDataGridStyles from "../global/styles";

const invoicesColumns = [
    {field: "id", headerName: "ID", flex: 0.5 },
    {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    {field: "email", headerName: "Email", flex: 1 },
    {field: "cost", headerName: "Cost", flex: 0.75, type: "number", headerAlign: "right", align: "right" },
    {field: "phone", headerName: "Phone Number", flex: 0.75 },
    {field: "date", headerName: "Date", flex: 0.75 },
];
const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const renderCell = ({ row }) => (
        <Typography color={colors.greenAccent[500]}>
            ${ row.cost }
        </Typography>
    );
    invoicesColumns[3].renderCell = renderCell;


    const dataGridStyles = getDataGridStyles(colors);

    return (
        <Box m="20px">
            <Header title="INVOICES" subtitle="List of Invoice Balance" />
            <Box mt="20px" sx={dataGridStyles}>
                <DataGrid
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={invoicesColumns}
                />
            </Box>
        </Box>
    );
}

export default Invoices;