import { Box, Rating, Skeleton, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router';
import { generateRandomNumberFromString } from '../../utils/generateRandomNumberFromString';
import { styles } from './styles';

export const ProductCard = ({isSkeleton, product}) => {

    const [isImageLoaded, setIsImageLoaded] = useState(!!product?.imgUrl);
    const navigate = useNavigate();

    const rating = useMemo(() => generateRandomNumberFromString(3, 5, product?.model), []);
    const ratingQuantity = useMemo(() => generateRandomNumberFromString(10, 100, product?.model), []);

    const handleCardClick = () => {
        navigate(`/products/${product.brand.replaceAll(" ", "-").toLowerCase()}-${product.model.replaceAll(" ", "-").toLowerCase()}/${product.id}`);
    }; 

    return (
        <Box sx={styles.container} onClick={handleCardClick} id={(product) && "product-card-test-id"}>
            
            <Box sx={styles.imageContainer}>
                {(isSkeleton || !isImageLoaded || !product?.imgUrl)
                    ? <Skeleton variant="rounded" sx={styles.imageSkeleton}/>
                    : <img 
                        src={product.imgUrl} 
                        style={styles.image}
                        onLoad={() => setIsImageLoaded(true)}
                        onError={() => setIsImageLoaded(false)}
                        alt={`${product.brand} ${product.model}`}
                    />}
            </Box>
          
            <Box sx={styles.titleContainer}>
                {(isSkeleton)
                    ? <Skeleton sx={styles.titleSkeleton}/>
                    : (product.brand && product.model) && <Typography sx={styles.titleText}>{product.brand} {product.model}</Typography>
                }
                {(isSkeleton)
                    ? <Skeleton sx={styles.ratingSkeleton}/>
                    : <Box sx={styles.ratingContainer}>
                        <Rating size="small" value={rating} precision={0.5} readOnly/>
                        <Typography sx={styles.ratingQuantityText}>{`(${ratingQuantity})`}</Typography>
                    </Box>
                }
                <Box sx={styles.priceContainer}>
                    {(isSkeleton)
                        ? <Skeleton sx={styles.priceSkeleton}/>
                        : (product.price) 
                            ? <Typography sx={styles.priceText}>€ {product.price}</Typography>
                            : <Typography sx={styles.outOfStockText}>NO DISPONIBLE</Typography>
                    }
                </Box>
            </Box>
            
        </Box>
    )

};
