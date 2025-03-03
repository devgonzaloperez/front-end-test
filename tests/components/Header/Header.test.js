import { Header } from '../../../src/components/Header/Header';
import { BrowserRouter } from 'react-router';
import { CartContextProvider } from '../../../src/context/Cart/CartContextProvider';
import { act, fireEvent, render, screen } from '@testing-library/react';

describe("Header.jsx", () => {
    
    const HeaderMock = () => {
        return (
            <CartContextProvider>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </CartContextProvider>
        );
    };

    beforeEach(() => {
        render(<HeaderMock/>);
    });

    test("should render the logo", () => {
        const logo = screen.getByText("INDITEL");
        expect(logo).toBeInTheDocument();
    });

    test("should render the cart quantity", () => {
        const cartQuantity = screen.getByText("0");
        expect(cartQuantity).toBeInTheDocument();
    });

    test("should navigate to the products page when the logo is clicked", () => {
        const logo = screen.getByText("INDITEL");
        act(() => fireEvent.click(logo));
        expect(window.location.pathname).toBe("/products");
    });

});
