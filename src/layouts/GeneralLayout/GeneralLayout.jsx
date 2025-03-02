import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { styles } from "./styles";
import { Header } from "../../components/Header/Header";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";

export const GeneralLayout = () => {
    return (
        <Box sx={styles.container}>
            <Header/>
            <Breadcrumbs/>
            <main>
                <Outlet/>
            </main>
        </Box>        
    )
};
