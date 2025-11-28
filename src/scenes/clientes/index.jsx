import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { mockDataClients } from "../../data/mockDataCentra";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import getDataGridStyles from "../global/styles";


const columns = [
    { field: "id", headerName: "ID" },
    { field: "tipoDocumento", headerName: "Tipo Doc.", flex: 1 },
    { field: "nroDocumento", headerName: "Numero Doc.", flex: 1 },
    { field: "nombreRazon", headerName: "Nombre", flex: 1 },
    { field: "celularContacto", headerName: "Celular contacto", flex: 1 },
    { field: "nombreContacto", headerName: "Nombre contacto", flex: 1 },
    { field: "direccion", headerName: "Direccion", flex: 1 },
    { field: "email", headerName: "Correo de contacto", flex: 1 },
];

const Clientes = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dataGridStyles = getDataGridStyles(colors);

    const renderCell = ({ row }) => {
        const boxProps = {
            width: "60%",
            m: "0 auto",
            p: "5px",
            display: "flex",
            justifyContent: "center",
            borderRadius: "4px",
            // backgroundColor: colors.greenAccent[row.access === "admin" ? 600 : 700],
        };
        return (
            <Box {...boxProps} >
                <Typography ml="4px">
                    { row.access }
                </Typography>
            </Box>
        );
    };
    columns[5].renderCell = renderCell;

    return (
        <Box m="20px">
            <Header title="Clientes" subtitle="Administrar los clientes" />
            <Box mt="20px" sx={dataGridStyles}>
                <DataGrid
                    rows={mockDataClients}
                    columns={columns} />
            </Box>
        </Box>
    );
}

export default Clientes;