import { useParams } from "react-router";
import { useQuery } from "../../hooks/useQuery";
import { Button, Box, Chip, Grid, Icon, Typography, CircularProgress, Skeleton, Snackbar } from "@mui/material";
import { CameraAltRounded,BatteryChargingFullRounded, MemoryRounded, StraightenRounded, FitnessCenterRounded, ScreenshotMonitorRounded, PhoneIphoneRounded, StorageRounded, LocalMallRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useMutation } from "../../hooks/useMutation";
import { useCartContext } from "../../hooks/useCartContext";

export const ProductDetailsPage = () => {

    const { productId } = useParams();

    const {isLoading: isProductLoading, data: product} = useQuery({path: `product/${productId}`, cache: true});

    const [selectedSpec, setSelectedSpec] = useState({colorCode: "", storageCode: ""});

    const {setCartQuantity} = useCartContext();

    const [snackbarText, setSnackbarText] = useState("");

    const {isLoading: isAddToCartLoading, mutate} = useMutation({
        path: "cart",
        method: "POST",
        onSuccess: (data) => {
            if(data?.count) setCartQuantity(data.count);
            setSnackbarText(`¡El producto ${product?.brand} ${product?.model} se ha añadido al carrito!`);
        },
        onError: (error) => {
            setSnackbarText(`Se produjo un error: ${error}.`);
        }
    });

    const handleAddButtonClick = () => {
        if(!product?.price){ 
            setSnackbarText(`El producto ${product?.brand} ${product?.model} no se encuentra disponible.`);
            return;
        };
        mutate({"id": productId, "colorCode": selectedSpec.colorCode, "storageCode": selectedSpec.storageCode});
    };

    const descriptionItems = [
        {id: 1, name: "CPU", icon: <MemoryRounded/>, value: product?.cpu},
        {id: 2, name: "RAM", icon: <StorageRounded/>, value: product?.ram},
        {id: 3, name: "SO", icon: <PhoneIphoneRounded/>, value: product?.os},
        {id: 4, name: "Resolución de Pantalla", icon: <ScreenshotMonitorRounded/>, value: product?.displaySize},
        {id: 5, name: "Batería", icon: <BatteryChargingFullRounded/>, value: product?.battery},
        {id: 6, name: "Cámaras", icon: <CameraAltRounded/>, value: `Principal: ${product?.primaryCamera[0]} / Frontal: ${product?.secondaryCmera}`},
        {id: 7, name: "Dimensiones", icon: <StraightenRounded/>, value: product?.dimentions},
        {id: 8, name: "Peso", icon: <FitnessCenterRounded/>, value: product?.weight}
    ];

    useEffect(() => {
        if(product){
            setSelectedSpec({colorCode: product.options.colors[0].code, storageCode: product?.options.storages[0].code});
        }
    }, [product]);

    return (
        <>        
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Box sx={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid lightgrey", borderRadius: 3, p: 6}}>
                        {(isProductLoading) ? <Skeleton variant="rounded" sx={{height: "280px", width: "200px"}}/> :<img src={product?.imgUrl} style={{height: "280px"}}/>}
                    </Box>
                </Grid>

                <Grid item xs={12} md={8}>
                                        
                    <Box sx={{mb: 2}}>
                        {(isProductLoading) 
                            ? <Skeleton variant="rounded" sx={{fontSize: "32px", width: "100px", mb: 2}}/>
                            : <Chip label={(product?.price ? "DISPONIBLE" : "NO DISPONIBLE")} sx={{mb: 1}}/>
                        }
                        {
                            (isProductLoading) 
                            ? <Skeleton variant="rounded" sx={{height: "40px", fontWeight: "bold", mb: 2, width: "50%"}}/>
                            : <Typography sx={{fontSize: "32px", fontWeight: "bold", mb: 1}}>{product?.brand} {product?.model}</Typography>
                        }
                        {
                            (isProductLoading) 
                            ? <Skeleton variant="rounded" sx={{fontSize: "32px", width: "100px"}}/>
                            : (product?.price) && <Typography sx={{fontSize: "28px"}}>€ {product?.price}</Typography>
                        }
                    </Box>
            
                    <Grid container spacing={2} sx={{mb: 2}}>
                        {descriptionItems.map((item) => (   
                            (isProductLoading)
                                ? <Grid key={item.id} item xs={12} lg={6} xl={4}>
                                    <Skeleton variant="rounded" sx={{height: "40px", width: "100%"}}/>
                                </Grid> 
                                : (item?.value) && <Grid key={item.id} item xs={12} lg={6} xl={4}>
                                    <Box sx={{display: "flex", alignItems: "center", gap: 1.5}}>
                                        <Icon sx={{backgroundColor: "lightgrey", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "100%", p: 2}}>
                                            {item.icon}	
                                        </Icon>
                                        <Box>
                                            <Typography sx={{color: "rgba(0, 0, 0, 0.3)"}}>{item.name}</Typography>
                                            <Typography>{item?.value}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>

                    <Box sx={{mb: 2}}>
                        <Typography sx={{mb: 1}}>Color</Typography>
                        {(isProductLoading)
                            ? <Skeleton variant="rounded" sx={{height: "40px", width: "50%"}}/>
                            :  <Box sx={{display: "flex", gap: 1}}>
                            {
                                product?.options.colors.map((color) => (
                                    <Button 
                                        key={color.code} 
                                        variant="outlined"
                                        sx={{
                                            border: (selectedSpec.colorCode === color.code) ? "1px solid #000000DE" : "1px solid lightgrey", 
                                            color: "#000000DE"
                                        }}
                                        onClick={() => setSelectedSpec({...selectedSpec, colorCode: color.code})}
                                    >
                                        
                                        {color.name}
                                    </Button>
                                ))
                            }
                        </Box>

                        }
                    
                    </Box>

                    <Box sx={{mb: 4}}>
                        <Typography sx={{mb: 1}}>Almacenamiento</Typography>
                        {(isProductLoading)
                            ? <Skeleton variant="rounded" sx={{height: "40px", width: "50%"}}/>
                            : <Box sx={{display: "flex", gap: 1}}>
                            {
                                product?.options.storages.map((storage) => (
                                    <Button 
                                        key={storage.code}
                                        variant="outlined"
                                        sx={{
                                            border: (selectedSpec.storageCode === storage.code) ? "1px solid #000000DE" : "1px solid lightgrey", 
                                            color: "#000000DE"
                                        }}
                                        onClick={() => setSelectedSpec({...selectedSpec, storageCode: storage.code})} 
                                    >
                                        {storage.name}
                                    </Button>
                                ))
                            }
                        </Box>
                        }
                    
                    </Box>

                    <Box sx={{width: "100%", display: "flex", alignItems: "center"}}>
                        {(isProductLoading) 
                            ? <Skeleton variant="rounded" sx={{height: "48px", width: "50%"}}/> 
                            : <Button 
                                variant="contained" 
                                sx={{width: {xs: "100%", md: "75%", lg: "calc(100%/3)", xl: "25%"}, minWidth: "160px", height: "48px", backgroundColor: "#000000DE", "&:hover": {backgroundColor: "#000000DE"}} 
                                } 
                                disabled={isAddToCartLoading} 
                                onClick={handleAddButtonClick}
                            >
                                {(isAddToCartLoading) 
                                ? <CircularProgress color="inherit" size={24}/> 
                                : <Box sx={{display: "flex", gap: 1, alignItems: "center", justifyContent: "center"}}>
                                    <LocalMallRounded/>
                                    <Typography>Añadir</Typography>
                                </Box>
                                }
                            </Button>
                        }
                    </Box>

                </Grid>
            </Grid>

            <Snackbar
                open={!!snackbarText}
                autoHideDuration={2000}
                onClose={() => setSnackbarText("")}
                message={snackbarText}
                anchorOrigin={{vertical: "bottom", horizontal: "right"}}        
            />
        
        </>
    )

};
