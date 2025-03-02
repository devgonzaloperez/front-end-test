import { Box, Breadcrumbs, Chip, Typography } from "@mui/material";
import { Outlet, useLocation, useNavigate, useParams } from "react-router";
import { HomeRounded, LocalMallRounded, NavigateNextRounded, PhoneIphoneRounded } from "@mui/icons-material";

export const GeneralLayout = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const {id} = useParams();

    const compareCurrentPath = (path) => location.pathname === path;

    const breadCrumbs = [
        {
            label: "Home", 
            path: "/products", 
            show: true, 
            isActive: location.pathname === "/products"
        },
        {
            label: "Product", 
            path: `/products/${id}`, 
            show: compareCurrentPath(`/products/${id}`), 
            isActive: compareCurrentPath(`/products/${id}`)
        }
    ];
    
    return (
        <Box sx={{background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)", padding: {xs: "16px", md: "32px"}, minHeight: "100vh"}}>
            <div style={{background: "white", borderRadius: "16px", padding: "24px", minHeight: "calc(100vh - 64px)"}}>

                {/* HEADER */}
                <Box style={{display: "flex", marginBottom: "32px", background: "rgba(255, 255, 255, 0.1)", flexDirection: "column", borderBottom: "1px solid rgba(0, 0, 0, 0.1)", paddingBottom: "8px"}}>
                    <Box sx={{display: "flex", justifyContent: "space-between", mb: 3, alignItems: "center"}}>
                        <div>INDITEL</div>
                        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(253,187,45,1)", color: "white", fontWeight: "bold", p: 1, fontSize: "24px", borderRadius: 3, px: 2, gap: 1, cursor: "default"}}>
                            <LocalMallRounded/>
                            <Typography sx={{fontSize: "20px", userSelect: "none"}}>3</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Breadcrumbs separator={<NavigateNextRounded fontSize="small"/>}>
                            {breadCrumbs.map((breadCrumb) => breadCrumb.show && 
                                <Chip key={breadCrumb.label} label={breadCrumb.label} onClick={() => navigate(breadCrumb.path)} sx={{
                                    color: (breadCrumb.isActive) ? "white" : "white", 
                                    backgroundColor: (breadCrumb.isActive) ? "rgba(253,187,45,1)": "lightgrey", 
                                    cursor: (breadCrumb.isActive) ? "default" : "pointer",
                                    ":hover": {
                                        color: (breadCrumb.isActive) ? "white" : "white", 
                                        backgroundColor: (breadCrumb.isActive) ? "rgba(253,187,45,1)": "rgba(0, 0, 0, 0.)", 
                                    }
                                }}/>)}
                        </Breadcrumbs>
                    </Box>
                </Box>
                
                {/* MAIN */}
                <main>
                    <Outlet/>
                </main>

            </div>        
        </Box>
    )
};
