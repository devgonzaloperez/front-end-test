import { act, fireEvent, render, screen } from '@testing-library/react';
import { Breadcrumbs } from '../../../src/components/Breadcrumbs/Breadcrumbs';
import { BrowserRouter, MemoryRouter, Navigate, Route, Routes } from 'react-router';
import { Box } from '@mui/material';

describe("Breadcrumbs.jsx", () => {
    
    test("should render home breadcrumb", () => {
        const BreadcrumbsMock = () => {
            return (
                <BrowserRouter>
                    <Breadcrumbs/>
                </BrowserRouter>
            );
        };

        render(<BreadcrumbsMock/>);

        const breadcrumbTitle = screen.getByText("Home");

        expect(breadcrumbTitle).toBeInTheDocument();
    });

    test("should render product breadcrumb", async () => {
        const productName = "example-product";
        const productId = "123";

        render(
            <MemoryRouter initialEntries={[`/products/${productName}/${productId}`]}>
                <Routes>
                    <Route path="/products/:productName/:productId" element={<Breadcrumbs/>}/>
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText("Example Product")).toBeInTheDocument();
    });

    test("should navigate to home page when the Home breadcrumb is clicked", () => {
        const productName = "example-product";
        const productId = "123";

        render(
            <MemoryRouter initialEntries={[`/products/${productName}/${productId}`]}>
                <Routes>
                    <Route path='/' element={<Navigate to="/products"/>}/>
                    <Route path='/products' element={<Box>Products Page Mock</Box>}/>
                    <Route path="/products/:productName/:productId" element={<Breadcrumbs/>}/>
                </Routes>
            </MemoryRouter>
        );

        const homeBreadcrumb = screen.getByText("Home");
        
        act(() => fireEvent.click(homeBreadcrumb));
        expect(window.location.pathname).toBe("/");
    });

});
