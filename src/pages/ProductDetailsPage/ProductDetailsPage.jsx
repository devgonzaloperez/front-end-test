import { useParams } from "react-router";
import { useQuery } from "../../hooks/useQuery";
import { Button, Box, Chip, Grid, Icon, Typography, CircularProgress, Skeleton, Snackbar } from "@mui/material";
import { CameraAltRounded,BatteryChargingFullRounded, MemoryRounded, StraightenRounded, FitnessCenterRounded, ScreenshotMonitorRounded, PhoneIphoneRounded, StorageRounded, LocalMallRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useMutation } from "../../hooks/useMutation";
import { useCartContext } from "../../hooks/useCartContext";
import { styles } from "./styles";
import { OptionSelector } from "../../components/OptionSelector/OptionSelector";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

export const ProductDetailsPage = () => {

    const [selectedOptions, setSelectedOptions] = useState({colorCode: "", storageCode: ""});
    const {setCartQuantity} = useCartContext();
    const [snackbarText, setSnackbarText] = useState("");
    const cleanSnackbarText = () => setSnackbarText("");
    const { productId } = useParams();

    const {isLoading: isProductLoading, error: productError, data: product} = useQuery({path: `product/${productId}`, cache: true});

    useEffect(() => {
        if(product){
            setSelectedOptions({
                colorCode: product.options.colors[0].code, 
                storageCode: product?.options.storages[0].code
            });
        }
    }, [product]);

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

    const isProductAvailable = !!product?.price && product?.options?.colors?.length > 0 && product?.options?.storages?.length > 0;

    const handleAddButtonClick = () => {
        if(!isProductAvailable){ 
            setSnackbarText(`El producto ${product?.brand} ${product?.model} no se encuentra disponible.`);
            return;
        };
        mutate({"id": productId, "colorCode": selectedOptions.colorCode, "storageCode": selectedOptions.storageCode});
    };

    if(productError) return <ErrorMessage/>

    return (
        <>        

            <Grid container spacing={4}>

                <Grid item xs={12} md={4}>
                    <Box sx={styles.imageContainer}>
                        {(isProductLoading) 
                            ? <Skeleton variant="rounded" sx={styles.imageSkeleton}/> 
                            : <img src={product?.imgUrl} style={styles.image}/>
                        }
                    </Box>
                </Grid>

                <Grid item xs={12} md={8}>
                                        
                    <Box sx={styles.titleContainer}>
                        {(isProductLoading) 
                            ? <Skeleton variant="rounded" sx={styles.chipSkeleton}/>
                            : <Chip label={(isProductAvailable) ? "DISPONIBLE" : "NO DISPONIBLE"} sx={styles.chip}/>
                        }
                        {(isProductLoading) 
                            ? <Skeleton variant="rounded" sx={styles.titleSkeleton}/>
                            : <Typography sx={styles.title}>{product?.brand} {product?.model}</Typography>
                        }
                        {(isProductLoading) 
                            ? <Skeleton variant="rounded" sx={styles.priceSkeleton}/>
                            : (product?.price) && <Typography sx={styles.price}>€ {product?.price}</Typography>
                        }
                    </Box>
            
                    <Grid container spacing={2} sx={styles.descriptionContainer}>
                        {descriptionItems.map((item) => (   
                            (isProductLoading)
                                ? <Grid key={item.id} item xs={12} lg={6} xl={4}>
                                    <Skeleton variant="rounded" sx={styles.descriptionItemSkeleton}/>
                                </Grid> 
                                : (item?.value) && <Grid key={item.id} item xs={12} lg={6} xl={4}>
                                    <Box sx={styles.descriptionItem}>
                                        <Icon sx={styles.descriptionItemIcon}>
                                            {item.icon}	
                                        </Icon>
                                        <Box>
                                            <Typography sx={styles.descriptionIconProperty}>{item.name}</Typography>
                                            <Typography>{item?.value}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>

                    <Box sx={styles.colorOptionsContainer}>
                        <Typography sx={styles.optionsTitle}>Color</Typography>
                        {(isProductLoading)
                            ? <Skeleton variant="rounded" sx={styles.optionsSkeleton}/>
                            : <OptionSelector
                                options={product?.options.colors || []}
                                selected={selectedOptions.colorCode}
                                select={(colorCode) => setSelectedOptions({...selectedOptions, colorCode})}
                            />
                        }
                    </Box>

                    <Box sx={styles.storageOptionsContainer}>
                        <Typography sx={styles.optionsTitle}>Almacenamiento</Typography>
                        {(isProductLoading)
                            ? <Skeleton variant="rounded" sx={styles.optionsSkeleton}/>
                            : <OptionSelector
                                options={product?.options.storages || []}
                                selected={selectedOptions.storageCode}
                                select={(storageCode) => setSelectedOptions({...selectedOptions, storageCode})}
                            />
                        }
                    </Box>

                    {(isProductLoading) 
                        ? <Skeleton variant="rounded" sx={styles.addToCartButtonSkeleton}/> 
                        : <Button 
                            id={"add-button-test-id"}
                            variant="contained" 
                            sx={styles.addToCartButton} 
                            disabled={isAddToCartLoading} 
                            onClick={handleAddButtonClick}
                        >
                            {(isAddToCartLoading) 
                            ? <CircularProgress color="inherit" size={24}/> 
                            : <Box sx={styles.addToCartButtonContent}>
                                <LocalMallRounded/>
                                <Typography>Añadir</Typography>
                            </Box>
                            }
                        </Button>
                    }
                  
                </Grid>

            </Grid>

            <Snackbar
                id={"snackbar-test-id"}
                open={!!snackbarText}
                autoHideDuration={2000}
                onClose={cleanSnackbarText}
                message={snackbarText}
                anchorOrigin={{vertical: "bottom", horizontal: "right"}}        
            />
        
        </>
    )

};

