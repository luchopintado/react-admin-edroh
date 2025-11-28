/* eslint-disable react/prop-types */
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutline';
import CalendarTodayOutlined from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarCharOutlinedIcon from '@mui/icons-material/BarChartOutlined';
// import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
// import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
// import MapOutLinedIcon from '@mui/icons-material/MapOutlined'

import "react-pro-sidebar/dist/css/styles.css";


const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={selected === title}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const MenuHeader = ({ isCollapsed, setIsCollapsed, color }) => (
    <MenuItem
        onClick={() => setIsCollapsed(!isCollapsed)}
        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
        style={{
            margin: "10px 0 20px 0",
            color
        }}
    >
        {!isCollapsed && (
            <Box display="flex" justifyContent="space-between" alignItems="center" ml="15">
                <Typography variant="h3" color={color}>
                    Centra.
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                </IconButton>
            </Box>
        )}
    </MenuItem>
);

const ProfileSection = ({ titleColor }) => (
    <Box mb="25px">
        <Box display="flex" justifyContent="center" alignItems="center">
            <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={"./assets/elon-musk-user.jpeg"}
                style={{ cursor: "pointer", borderRadius: "50%" }}
            />
        </Box>

        <Box textAlign="center">
            <Typography variant="h2" color={titleColor} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>Jason Toro</Typography>
            <Typography>Insurance Broker</Typography>
        </Box>
    </Box>
);

const getSidebarStyles = (primaryColor) => ({
    "& .pro-sidebar-inner": {
        background: `${primaryColor} !important`,
    },
    "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
    },
    "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important",
    },
    "& .pro-inner-item:hvoer": {
        color: "#868dfb !important",
    },
    "& .pro-menu-item.active": {
        color: "#6870fa !important",
    }
});

const menuItems = [
    { label: "Dashboard", icon: HomeOutlinedIcon, to: "/dashboard" },
    { label: "" },
    { label: "Clientes", icon: PeopleOutlinedIcon, to: "/clientes" },
    { label: "Activos", icon: ContactOutlinedIcon, to: "/contacts" },
    { label: "Polizas", icon: ReceiptOutlinedIcon, to: "/polizas" },
    { label: "Siniestros", icon: PersonOutlinedIcon, to: "/form" },
    { label: "" },
    { label: "Usuarios", icon: CalendarTodayOutlined, to: "/calendar" },
    { label: "Aseguradoras", icon: HelpOutlinedIcon, to: "/faq" },
    { label: "Configuracion", icon: BarCharOutlinedIcon, to: "/bar" },
    // { label: "Charts" },
    // { label: "Pie Chart", icon: PieChartOutlinedIcon, to: "/pie" },
    // { label: "Line Chart", icon: TimelineOutlinedIcon, to: "/line" },
    // { label: "Geography Chart", icon: MapOutLinedIcon, to: "/geography" },
];

const CustomSidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box sx={getSidebarStyles(colors.primary[600])}>
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuHeader isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} color={colors.grey[100]} />

                    {!isCollapsed && <ProfileSection colors={colors.grey[100]} />}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                    {
                        menuItems.map((menuItem, idx) => {
                            if (menuItem.to) {
                                return <Item
                                    key={`mitem-${menuItem.label || idx}`}
                                    title={menuItem.label}
                                    to={menuItem.to}
                                    icon={<menuItem.icon />}
                                    selected={selected}
                                    setSelected={setSelected}
                                />;
                            } else {
                                return (
                                    <Typography
                                        key={`mitem-t-${menuItem.label || idx}`}
                                        variant="h6"
                                        color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}
                                    >
                                        {menuItem.label}
                                    </Typography>
                                );
                            }
                        })
                    }
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
}

export default CustomSidebar;