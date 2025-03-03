import { Grid } from "@mui/material";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductCardSkeletonGrid = () => (
    <Grid container spacing={2}>
        {Array(24).fill(null).map((_, index) => (
            <Grid key={index} item xs={12} sm={6} lg={4} xl={3}>
                <ProductCard isSkeleton/>
            </Grid>
        ))}
    </Grid>
);