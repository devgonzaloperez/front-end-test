import { BrowserRouter, Route, Routes } from "react-router";
import { GeneralLayout } from "./layouts/GeneralLayout/GeneralLayout";
import { ProductListPage } from "./pages/ProductListPage/ProductListPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage/ProductDetailsPage";
import { CssBaseline } from "@mui/material";

export const App = () => {    
    return (
        <>
            <CssBaseline/>        
            <BrowserRouter>
                <Routes>
                    <Route element={<GeneralLayout/>}>
                        <Route path="/products" element={<ProductListPage/>}/>
                        <Route path="/products/:id" element={<ProductDetailsPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
};
