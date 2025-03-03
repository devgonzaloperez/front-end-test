export const styles = {
    container: {
        mb: 4, 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "end" 
    },
    resultsText: {
        color: "rgba(0, 0, 0, 0.3)"
    },
    inputIcon: {
        color: "lightgrey"
    },
    input: {
        width: "100%",
        "& .MuiOutlinedInput-root": {
            "& fieldset": {border: "1px solid lightgrey"},
            "&.Mui-focused fieldset": {border: "1px solid lightgrey"},
            "&:hover fieldset": {border: "1px solid lightgrey"}
        }
    }
};