import { useNavigate } from "react-router";
import { useCartContext } from "../../hooks/useCartContext";
import { Box, Typography } from "@mui/material";
import { LocalMallRounded, PhoneIphoneRounded } from "@mui/icons-material";
import { styles } from "./styles";
import logo from '/images/logo.png';

export const Header = () => {

    const navigate = useNavigate();

    const {cartQuantity} = useCartContext();

    const handleLogoClick = () => navigate("/products");

    return (
        <Box style={styles.container}>

            <Box sx={styles.logoContainer} onClick={handleLogoClick}>
                <img src={logo} alt="INDITEL Logo" style={{height: "40px"}}/>
                <Typography sx={styles.logoText}>INDITEL</Typography>
            </Box>

            <Box sx={styles.cartQuantityContainer}>
                <LocalMallRounded/>
                <Typography sx={styles.cartQuantity}>{cartQuantity}</Typography>
            </Box>

        </Box>
    )
};
 