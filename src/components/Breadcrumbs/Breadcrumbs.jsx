import { NavigateNextRounded } from "@mui/icons-material";
import { Breadcrumbs as BreadcrumbsMUI, Typography } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router";
import { styles } from "./styles";
import { capitalizeWords } from "../../utils/capitalizeWords";

export const Breadcrumbs = () => {

    const {productName, productId} = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const compareCurrentPath = (path) => location.pathname === path;

    const breadCrumbs = [
        {
            label: "Home", 
            path: "/products", 
            show: true, 
            isActive: location.pathname === "/products"
        },
        {
            label: capitalizeWords(productName?.replaceAll("-", " ")),
            path: `/products/${productName}/${productId}`, 
            show: compareCurrentPath(`/products/${productName}/${productId}`), 
            isActive: compareCurrentPath(`/products/${productName}/${productId}`)
        }
    ];

    return (
        <BreadcrumbsMUI 
            separator={<NavigateNextRounded fontSize="small"/>} 
            sx={styles.breadcrumbs}
        >
            {breadCrumbs.map((breadCrumb) => breadCrumb.show && 
                <Typography 
                    key={breadCrumb.label}
                    label={breadCrumb.label} 
                    onClick={() => navigate(breadCrumb.path)} 
                    sx={{
                        color: (breadCrumb.isActive) ? "default" : "default", 
                        cursor: (breadCrumb.isActive) ? "default" : "pointer",
                        ":hover": {color: (breadCrumb.isActive) ? "default" : "default"}
                    }}
                >
                    {breadCrumb.label}
                </Typography>
            )}
        </BreadcrumbsMUI>
    )
};
