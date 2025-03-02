export const styles = {
    container: {
        border: "1px solid lightgrey", 
        borderRadius: 2, 
        p: 2,
        cursor: "pointer", 
        display: "flex", 
        gap: 3, 
        alignItems: "center", 
        height: "140px", 
        justifyContent: "center"
    },
    imageContainer: {
        minWidth: "80px", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center"
    },
    imageSkeleton: {
        height: "100px", 
        width: "100%"
    },
    image: {
        height: "100px"
    },
    titleContainer: {
        flex: 1, 
        display: "flex", 
        flexDirection: "column", 
        alignSelf: "flex-start", 
        height: "100%"
    },
    titleSkeleton: {
        width: "160px"
    },
    titleText: {
        fontSize: "16px"  
    },
    ratingSkeleton: {
        width: "100px"
    },
    ratingContainer: {
        display: "flex", 
        alignItems: "center", 
        gap: 0.5
    },
    ratingQuantityText: {
        color: "rgba(0, 0, 0, 0.4)", 
        fontSize: "12px"
    },
    priceContainer: {
        mt: 2.5
    },
    priceSkeleton: {
        width: "48px"  
    },
    priceText: {
        fontSize: "18px", 
        fontWeight: "bold"
    },
    outOfStockText: {
        color: "rgba(0, 0, 0, 0.3)", 
        fontSize: "12px", 
        lineHeight: "16px"
    }
};