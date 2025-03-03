import { Box, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { useState, useMemo } from "react";
import { ErrorRounded, SearchRounded } from "@mui/icons-material";
import { useQuery } from "../../hooks/useQuery";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useDebounce } from "../../hooks/useDebounce";
import { styles } from "./styles";
import { ProductCardSkeletonGrid } from "../../components/ProductCardSkeletonGrid/ProductCardSkeletonGrid";
import { ProductCardGrid } from "../../components/ProductCardGrid/ProductCardGrid";

export const ProductListPage = () => {

    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search);

    const {isLoading: areProductsLoading, error, data: products} = useQuery({path: "product"});

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredProducts = useMemo(() => {
        return (products || []).filter((product) => 
            product.brand.toLowerCase().includes(debouncedSearch.toLowerCase()) 
            || product.model.toLowerCase().includes(debouncedSearch.toLowerCase())
        );
    }, [products, debouncedSearch]);
    
    return (
        <>
            <Grid container spacing={2} sx={styles.container}>
                {(!areProductsLoading && filteredProducts) && 
                    <Grid item xs={12} sm={6} lg={8} xl={9}>
                        <Typography sx={styles.resultsText}>{filteredProducts.length} Results</Typography>
                    </Grid>
                }
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <TextField
                        type="text"
                        variant="outlined"
                        placeholder="Busca por marca o modelo"
                        value={search}
                        onChange={handleSearchChange}
                        slotProps={{input: {endAdornment: <SearchRounded sx={styles.inputIcon}/>}}}
                        autoFocus
                        sx={styles.input}
                    />
                </Grid>
            </Grid>
            {
                (areProductsLoading)
                    ? <ProductCardSkeletonGrid/>
                    : (error)
                        ? <ErrorMessage/>
                        : <ProductCardGrid products={filteredProducts}/>
            }
        </>
    );
};





