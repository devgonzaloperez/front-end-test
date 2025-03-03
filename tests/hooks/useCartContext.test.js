import { render } from '@testing-library/react';
import { useCartContext } from '../../src/hooks/useCartContext';

describe("useCartContext.js", () => {
    
    test("should throw an error if useCart is used outside of a CartProvider", () => {
        
        const TestComponent = () => {
            useCartContext();
            return null;
        };
        
        expect(() => render(<TestComponent />)).toThrow("useCart must be used within a CartProvider");

    });

});
