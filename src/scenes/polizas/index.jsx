import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { mockDataPolizas } from "../../data/mockDataCentra";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import getDataGridStyles from "../global/styles";


const columns = [
    { field: 'nroPoliza', headerName: 'Nro. Poliza', width: 150 },
    { field: 'aseguradora', headerName: 'Aseguradora', width: 150 },
    { field: 'ramo', headerName: 'Ramo', width: 120 },
    { field: 'inicioVigencia', headerName: 'Inicio Vigencia', width: 150 },
    { field: 'cliente', headerName: 'Cliente', width: 150 },
    { field: 'sumaAsegurada', headerName: 'Suma Asegurada', width: 150 },
    { field: 'primaNeta', headerName: 'Prima Neta', width: 120 },
    { field: 'primaTotal', headerName: 'Prima Total', width: 120 },
    { field: 'ejecutivoComercial', headerName: 'Ejecutivo Comercial', width: 180 },
    { field: 'financiamiento', headerName: 'Financiamiento', width: 150 },
    { field: 'uso', headerName: 'Uso', width: 120 },
];

const Polizas = () => {
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
            <Header title="Polizas" />
            <Box mt="20px" sx={dataGridStyles}>
                <DataGrid
                    getRowId={(row) => row.nroPoliza}
                    rows={mockDataPolizas}
                    columns={columns} />
            </Box>
        </Box>
    );
}

export default Polizas;