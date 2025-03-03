import { Box, useMediaQuery, useTheme } from "@mui/material";
import { FixedSizeGrid } from "react-window";
import { memo, useMemo } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const ROW_HEIGHT = 140;
const GAP_SIZE = 16;

export const ProductCardGrid = memo(({ products }) => {

    const theme = useTheme();
    const { windowDimensions } = useWindowDimensions();
    const windowWidth = windowDimensions.windowWidth;

    const isXl = useMediaQuery(theme.breakpoints.up("xl"));
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));
    const isSm = useMediaQuery(theme.breakpoints.up("sm"));

    const columns = isXl ? 4 : isLg ? 3 : isSm ? 2 : 1;

    const columnWidth = useMemo(() => {
        const totalGaps = columns - 1;
        const totalGapSpace = totalGaps * GAP_SIZE;
        const totalAvailableWidth = windowWidth - totalGapSpace - 40; 

        if (isXl) return (totalAvailableWidth / columns); 
        if (isLg) return (totalAvailableWidth / columns) - 8; 
        if (isSm) return (totalAvailableWidth / columns) - 16; 
        return totalAvailableWidth - 24; 
    }, [windowWidth, columns, isXl, isLg, isSm]);

    const rowCount = Math.ceil(products.length / columns);
  
    return (
        <FixedSizeGrid
            columnCount={columns}
            columnWidth={columnWidth}
            height={windowDimensions.windowHeight - 300}
            rowCount={rowCount}
            rowHeight={ROW_HEIGHT + GAP_SIZE} 
            width={windowWidth - 64}
            style={{border: "1px solid lightgrey", borderRadius: 8, p: 0}}
        >
            {({columnIndex, rowIndex, style}) => {
                const productIndex = rowIndex * columns + columnIndex;
                if (productIndex >= products.length) return null;
                return (
                    <Box style={{...style, padding: GAP_SIZE/2}}>
                        <ProductCard isSkeleton={false} product={products[productIndex]} />
                    </Box>
                );
            }}
        </FixedSizeGrid>    
    );

});
