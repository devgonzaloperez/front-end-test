import { useNavigate } from "react-router";
import { useCartContext } from "../../hooks/useCartContext";
import { Box, Typography } from "@mui/material";
import { LocalMallRounded, PhoneIphoneRounded } from "@mui/icons-material";
import { styles } from "./styles";

export const Header = () => {

    const navigate = useNavigate();

    const {cartQuantity} = useCartContext();

    const handleLogoClick = () => navigate("/products");

    return (
        <Box style={styles.container}>

            <Box sx={styles.logoContainer} onClick={handleLogoClick}>
                <PhoneIphoneRounded/>
                <Typography sx={styles.logoText}>INDITEL</Typography>
            </Box>

            <Box sx={styles.cartQuantityContainer}>
                <LocalMallRounded/>
                <Typography sx={styles.cartQuantity}>{cartQuantity}</Typography>
            </Box>

        </Box>
    )
};
 