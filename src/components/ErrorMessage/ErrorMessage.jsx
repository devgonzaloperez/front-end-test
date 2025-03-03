import { ErrorRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export const ErrorMessage = () => (
    <Box sx={{height: "160px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", color: "lightgrey"}}>
        <ErrorRounded sx={{fontSize: "48px", mb: 1}}/>
        <Typography sx={{textTransform: "uppercase", fontWeight: "bold"}}>Se produjo un error</Typography>
    </Box>
);