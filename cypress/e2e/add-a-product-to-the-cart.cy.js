describe("Add a product to the cart", () => {

    it("should add a product to the cart", () => {
        
        cy.visit("http://localhost:3000/");

        cy.get("#product-card-test-id")
            .should("have.length.greaterThan", 0)
            .and("be.visible")
            .as("productCards");  
    
        cy.get("@productCards")
            .first()
            .click();
    
        cy.location("pathname")
            .should("match", /^\/products\/[^/]+\/[^/]+$/);
    

        cy.get("#add-button-test-id")
            .should("have.length", 1)
            .and("be.visible")
            .click(); 

        cy.get("#snackbar-test-id") 
            .should("be.visible") 
            .and("contain.text", "El producto")  
            .and("contain.text", "se ha añadido al carrito");

    });

});