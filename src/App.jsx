import { BrowserRouter, Route, Routes } from "react-router";
import { GeneralLayout } from "./layouts/GeneralLayout/GeneralLayout";
import { ProductListPage } from "./pages/ProductListPage/ProductListPage";
import { ProductPage } from "./pages/ProductPage/ProductPage";

export const App = () => {    
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<GeneralLayout/>}>
                    <Route path="/products" element={<ProductListPage/>}/>
                    <Route path="/products/:id" element={<ProductPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};
