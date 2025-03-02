import { Box, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { useState, useMemo, memo } from "react";
import { ErrorRounded, SearchRounded } from "@mui/icons-material";
import { useQuery } from "../../hooks/useQuery";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useDebounce } from "../../hooks/useDebounce";

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
            <Grid container spacing={2} sx={{mb: 4, display: "flex", alignItems: "center", justifyContent: "end"}}>
                {(filteredProducts) && 
                    <Grid item xs={12} sm={6} lg={8} xl={9}>
                        <Typography sx={{color: "rgba(0, 0, 0, 0.3)"}}>{filteredProducts.length} Results</Typography>
                    </Grid>
                }
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <TextField
                        type="text"
                        variant="outlined"
                        placeholder="Search by brand or model"
                        value={search}
                        onChange={handleSearchChange}
                        slotProps={{
                            input: {
                                endAdornment: <SearchRounded sx={{color: "lightgrey"}}/>,
                            }
                        }}
                        autoFocus
                        sx={{
                            width: "100%",
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  border: "1px solid lightgrey",
                                },
                                "&.Mui-focused fieldset": {
                                  border: "1px solid lightgrey",
                                },
                                "&:hover fieldset": {
                                  border: "1px solid lightgrey",
                                },
                              },
                        }}
                    />
                </Grid>
            </Grid>
            {
                (areProductsLoading)
                    ? <SkeletonGrid/>
                    : (error)
                        ? <ErrorMessage />
                        : <ProductGrid products={filteredProducts}/>
            }
        </>
    );
};

// Separate components to prevent unnecessary re-renders
const SkeletonGrid = () => (
    <Grid container spacing={2}>
        {Array(24).fill(null).map((_, index) => (
            <Grid key={index} item xs={12} sm={6} lg={4} xl={3}>
                <ProductCard isSkeleton/>
            </Grid>
        ))}
    </Grid>
);

const ErrorMessage = () => (
    <Grid sx={{height: "160px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", color: "lightgrey"}}>
        <Typography sx={{textTransform: "uppercase"}}>Something went wrong.</Typography>
        <Typography sx={{textTransform: "uppercase"}}>Please try again.</Typography>
        <ErrorRounded sx={{fontSize: "64px"}}/>
    </Grid>
);

const ProductGrid = memo(({ products }) => (
    <Grid container spacing={2}>
        {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} lg={4} xl={3}>
                <ProductCard isSkeleton={false} product={product}/>
            </Grid>
        ))}
    </Grid>
));
