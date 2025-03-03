import { Box, Button } from "@mui/material";
import { styles } from "./styles";

export const OptionSelector = ({options, selected, select}) => {
    return(
        <Box sx={styles.container}>
            {
                options.map((option) => (
                    <Button 
                        key={option.code}
                        variant="outlined"
                        sx={{
                            border: (option.code === selected) 
                                ? "1px solid #000000DE" 
                                : "1px solid lightgrey", 
                            color: "#000000DE"
                        }}
                        onClick={() => select(option.code)} 
                    >
                        {option?.name?.trim() || "-"}
                    </Button>
                ))
            }
        </Box>
    )
};