import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { GeneralLayout } from '../layouts/GeneralLayout/GeneralLayout';
import { ProductListPage } from '../pages/ProductListPage/ProductListPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage/ProductDetailsPage';

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<GeneralLayout/>}>
                <Route path="/" element={<Navigate to="/products"/>}/>
                <Route path="/products" element={<ProductListPage/>}/>
                <Route path="/products/:productName/:productId" element={<ProductDetailsPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
