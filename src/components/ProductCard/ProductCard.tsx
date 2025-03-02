import { Box, Rating, Skeleton, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router';

export const ProductCard = ({isSkeleton, product}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(product?.imgUrl ? true : false);
    const navigate = useNavigate();

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const reviews = useMemo(() => generateRandomNumber(10, 100), []);
    const rating = useMemo(() => generateRandomNumber(3, 5), []);

    return (
        <Box 
            sx={{border: "1px solid lightgrey", borderRadius: 2, p: 2,cursor: "pointer", display: "flex", gap: 3, alignItems: "center", height: "140px", justifyContent: "center"}} 
            onClick={() => navigate(`/products/${product.id}`)}
        >
            
            <Box sx={{minWidth: "80px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                {(isSkeleton || !isImageLoaded || !product?.imgUrl)
                    ? <Skeleton variant="rounded" sx={{height: "100px", width: "100%"}}/>
                    : <img 
                        src={product.imgUrl} 
                        style={{height: "100px"}}
                        onLoad={() => setIsImageLoaded(true)}
                        onError={() => setIsImageLoaded(false)}
                        alt={`${product.brand} ${product.model}`}
                    />}
            </Box>
          
            <Box sx={{flex: 1, display: "flex", flexDirection: "column", alignSelf: "flex-start", height: "100%"}}>
                {
                    (isSkeleton)
                        ? <Skeleton sx={{width: "160px"}}/>
                        : (product.brand && product.model) && <Typography sx={{fontSize: "16px"}}>{product.brand} {product.model}</Typography>
                }
                {
                    (isSkeleton)
                        ? <Skeleton sx={{width: "100px"}}/>
                        : <Box sx={{display: "flex", alignItems: "center", gap: 0.5}}>
                            <Rating size="small" value={rating} precision={0.5} readOnly/>
                            <Typography sx={{color: "rgba(0, 0, 0, 0.4)", fontSize: "12px"}}>{`(${reviews})`}</Typography>
                        </Box>
                }
                <Box sx={{mt: 2.5}}>
                    {   (isSkeleton)
                        ? <Skeleton sx={{width: "48px"}}/>
                        : (product.price) 
                            ? <Typography sx={{fontSize: "18px", fontWeight: "bold"}}>€ {product.price}</Typography>
                            : <Typography sx={{color: "rgba(0, 0, 0, 0.3)", fontSize: "12px", lineHeight: "16px"}}>OUT OF STOCK</Typography>
                    }
                </Box>
            </Box>
        </Box>
    )

};
