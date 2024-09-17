class ProductPage{
    openHomePage(){
    cy.visit('http://localhost:8080/')
    cy.wait(1000)
    }
    openProductCard(){
    cy.reload()
    cy.get('.product-page__card', { timeout: 15000 }).eq(0).click()
    }
    stickyFooter(){
    cy.get('.product-sticky-footer', { timeout: 15000 }).should('be.visible')
    }
    productView(){
    cy.get('.product-view').should('be.visible')
    }
    articlesPage(){
    cy.get('.product-page').should('be.visible')
    }
    itemsCentre(){
    cy.get('.items-center').should('be.visible')
    }
    productView(){
    cy.get('.product-view').should('be.visible')
    }
    productColorBox(){
    cy.get('.product-page__color-box', { timeout: 15000 }).should('be.visible')
    cy.get('.product-page__color-box', { timeout: 15000 }).eq(0).should('have.css', 'background-color', 'rgb(255, 255, 255)').click()
    }
    openProductImages(){
    cy.get('.shared-modal',{ timeout: 15000 }).should('be.visible')
    cy.get('.product-gallery', { timeout: 15000 }).should('be.visible')
    cy.get('.arrow--right').click()
    cy.get('.arrow--left').click()
    }
    productColorMatch(){
    cy.get('.product-page__color-box',{ timeout: 15000 }).should('be.visible')
    cy.get('.product-page__color-box',{ timeout: 15000 }).eq(0).should('have.css', 'background-color', 'rgb(255, 255, 255)').click()
    cy.get('.product-view__container',{ timeout: 15000 }).should('be.visible')
    cy.get('.product-detail__color-value',{ timeout: 15000 }).should('have.text', 'WHITE')
    }
    productPrice(){
    cy.get('.product-detail__price').should('be.visible')
    }
    productName(){
    cy.get('.product-detail__name',{ timeout: 15000 }).should('be.visible')
    }
    productSize(){
    cy.get('img[data-v-4f70c374]').each(($sizeButton) => {
    cy.wrap($sizeButton).should('not.be.disabled')
    });
    }
    closeOverlay(){
    cy.get('.product-view__container').should('be.visible')
    cy.get('.close-button-container__button').click()
    }
    productViewScroll(){
    cy.get('.product-view').scrollTo('bottom')
    }
    sustainabilityTab(){
    cy.get('.product-info__tab-item').eq(3).should('have.text', 'SUSTAINABILITY')
    }
    detailsTab(){
    cy.get('.product-info__tab-item').eq(0).should('have.text', 'DETAILS')
    }
    productFitTab(){
    cy.get('.product-info__tab-item').eq(1).should('have.text', 'FIT')
    }
    materialsAndCareTab(){
    cy.get('.product-info__tab-item').eq(2).should('have.text', 'MATERIAL & CARE INSTRUCTIONS')
    }
    assertDetailTab(){
    cy.get('.product-info__tab-list').scrollIntoView().should('be.visible')
    cy.get('.product-details-tab__icon-container').should('have.text', '13.005.22.2253.62A4.3XL  406316254075')
    }
    productInfoTabList(){
    cy.get('.product-info__tab-list').scrollIntoView().should('be.visible')
    }
    assertProductFitTab(){
    cy.get('.product-info__tab-list').scrollIntoView().should('be.visible')
    cy.get('.product-info__tab-item').eq(1).should('have.text', 'FIT').click()
    cy.get('.fit-tab').should('have.text', 'Fit: Regular FitBack length: bei Größe M ca. 75 cm')
    }
    assertMaterialAndCareTab(){
    cy.get('.product-info__tab-item').eq(2).should('have.text', 'MATERIAL & CARE INSTRUCTIONS').click()
    cy.get('.material-care-tab').should('have.text', 'Material  Fabric: chambray  Material Composition 99% Cotton, 1% Elastane Quality: lightweight Care Instructions   Machine wash 40° No dry cleaning Do not chlore Handwarm ironing Tumble with reduced thermal pressure')
    }
    assertSustainabilityTab(){
    cy.get('.product-info__tab-item').eq(3).should('have.text', 'SUSTAINABILITY').click()
    cy.get('.sustainability-tab__icon-container').should('be.visible')
    cy.get('.sustainability-tab__detail-content').should('be.visible')
    cy.get('.sustainability-tab__text').should('have.text', 'CERTIFIED SUSTAINABLE FIBRE')
    }

}

export default ProductPage