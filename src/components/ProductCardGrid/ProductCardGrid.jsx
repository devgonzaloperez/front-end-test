import { Grid } from "@mui/material";
import { memo } from "react";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductCardGrid = memo(({ products }) => (
    <Grid container spacing={2}>
        {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} lg={4} xl={3}>
                <ProductCard isSkeleton={false} product={product}/>
            </Grid>
        ))}
    </Grid>
));