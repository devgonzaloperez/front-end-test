const addToCartButtonWidth = {xs: "100%", md: "75%", lg: "calc(100%/3)", xl: "25%"};

export const styles = {
    imageContainer: {
        width: "100%", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        border: "1px solid lightgrey", 
        borderRadius: 3, 
        p: 6
    },
    imageSkeleton: {
        height: "280px", 
        width: "200px"
    },
    image: {
        height: "280px"
    },
    titleContainer: {
        mb: 2
    },
    chipSkeleton: {
        fontSize: "32px", 
        width: "100px", 
        mb: 2
    },
    chip: {
        mb: 1
    },
    titleSkeleton: {
        height: "40px", 
        fontWeight: "bold", 
        mb: 2, 
        width: "50%"
    },
    title: {
        fontSize: "32px", 
        fontWeight: "bold", 
        mb: 1
    },
    priceSkeleton: {
        fontSize: "32px", 
        width: "100px"
    },
    price: {
        fontSize: "28px"
    },
    descriptionContainer: {
        mb: 2
    },
    descriptionItemSkeleton: {
        height: "40px", 
        width: "100%"
    },
    descriptionItem: {
        display: "flex", 
        alignItems: "center", 
        gap: 1.5
    },
    descriptionItemIcon: {
        backgroundColor: "lightgrey", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        borderRadius: "100%", 
        p: 2
    },
    descriptionIconProperty: {
        color: "rgba(0, 0, 0, 0.3)"
    },
    colorOptionsContainer: {
        mb: 2
    },
    optionsTitle: {
        mb: 1
    },
    optionsSkeleton: {
        height: "40px", 
        width: "50%"
    },
    storageOptionsContainer: {
        mb: 4
    },
    addToCartButtonSkeleton: {
        width: addToCartButtonWidth, 
        minWidth: "160px"
    },
    addToCartButton: {
        width: addToCartButtonWidth, 
        minWidth: "160px", 
        height: "48px", 
        backgroundColor: "#000000DE", 
        "&:hover": {backgroundColor: "#000000DE"}
    },
    addToCartButtonContent: {
        display: "flex", 
        gap: 1, 
        alignItems: "center", 
        justifyContent: "center"
    }
};