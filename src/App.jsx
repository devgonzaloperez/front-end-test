
import { CssBaseline } from "@mui/material";
import { CartContextProvider } from "./context/Cart/CartContextProvider";
import { Router } from "./router/Router";

export const App = () => {    
    return (
        <CartContextProvider>
            <CssBaseline/>        
            <Router/>
        </CartContextProvider>
    )
};
