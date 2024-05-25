import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import getDataGridStyles from "../global/styles";

const columns = [
    {field: "id", headerName: "ID" },
    {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    {field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left" },
    {field: "phone", headerName: "Phone Number", flex: 1 },
    {field: "email", headerName: "Email", flex: 1 },
    {field: "access", headerName: "Access Level", flex: 1, headerAlign: "center" },
];

const RoleIconComponent = {
    admin: AdminPanelSettingsOutlinedIcon,
    manager: SecurityOutlinedIcon,
    user: LockOpenOutlinedIcon
};

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dataGridStyles = getDataGridStyles(colors);

    const renderCell = ({ row }) => {
        const IconComponent = RoleIconComponent[row.access];
        const boxProps = {
            width: "60%",
            m: "0 auto",
            p: "5px",
            display: "flex",
            justifyContent: "center",
            borderRadius: "4px",
            backgroundColor: colors.greenAccent[row.access === "admin" ? 600 : 700],
        };
        return (
            <Box {...boxProps} >
                <IconComponent />
                <Typography ml="4px">
                    { row.access }
                </Typography>
            </Box>
        );
    };
    columns[5].renderCell = renderCell;

    return (
        <Box m="20px">
            <Header title="TEAM" subtitle="Managing the Team Members" />
            <Box mt="20px" sx={dataGridStyles}>
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns} />
            </Box>
        </Box>
    );
}

export default Team;