import { ErrorRounded } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useLocation } from "react-router";
import { styles } from "./styles";

export const ErrorMessage = () => {

    const location = useLocation();

    const refreshToHome = () => {
        window.location.href = "/";
    };

    return(

        <Box sx={styles.container}>
            <ErrorRounded sx={styles.icon}/>
            <Typography sx={styles.text}>Se produjo un error</Typography>
            <Button variant="contained" sx={styles.button} onClick={refreshToHome}>
                {location === "/" ? "Recargar" : "Volver"}
            </Button>
        </Box>
    )

};