import { Box } from "@mui/material";

import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";


const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="GEOGRAPHY CHART" subtitle="Simple Geography Chart" />

            <Box mt="20px" height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius={4}>
                <GeographyChart />
            </Box>
        </Box>
    );
}

export default Geography;
