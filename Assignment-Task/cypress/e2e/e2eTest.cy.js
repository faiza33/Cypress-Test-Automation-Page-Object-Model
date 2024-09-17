/// <reference types = "cypress"/>
import ProductPage from "../pages/commands"

describe('Product Details', ()=>{
  const productPage = new ProductPage()
  beforeEach( ()=>{
  productPage.openHomePage()
  })

it ('Should display the logo image on the homepage and assert Homepage', ()=>{  
  productPage.itemsCentre();
  productPage.articlesPage();
})

it ('Verify thumbnail click opens overlay', ()=>{
  productPage.openProductCard(); 
  productPage.productView();
})

it ('Verify close overlay works', ()=>{ 
  productPage.productColorBox();
  productPage.closeOverlay();
  productPage.articlesPage();
})

it ('Should Show the pictures of the articles', ()=>{ 
  productPage.openProductCard(); 
  productPage.openProductImages();
})

it ('Verify product color matches selection', ()=>{ 
  productPage.productColorMatch();
})

it ('Validate article Price in overlay.', ()=>{
  productPage.openProductCard(); 
  productPage.productView();
  productPage.productPrice();
})

it ('Validate article Name in overlay.', ()=>{
  productPage.openProductCard(); 
  productPage.productView();
  productPage.productName();
})

it ('Verify Available Size  Information', ()=>{ 
  productPage.openProductCard(); 
  productPage.productView();
  productPage.productSize();
})

it ('Verify further detail information', ()=>{ 
  cy.wait(1000)
  productPage.openProductCard(); 
  productPage.productViewScroll();
  productPage.productInfoTabList();
  productPage.detailsTab();
  productPage.productFitTab();
  productPage.materialsAndCareTab();
  productPage.sustainabilityTab();
  productPage.productViewScroll();
})

it ('Verify Product details tab', ()=>{ 
  productPage.openProductCard(); 
  productPage.productViewScroll();
  productPage.assertDetailTab();
})

it ('Verify Product Fit tab', ()=>{ 
  productPage.openProductCard(); 
  productPage.productInfoTabList();
  productPage.assertProductFitTab();
  productPage.productViewScroll();
})

it ('Verify Material and Care Instruction tab', ()=>{
  productPage.openProductCard(); 
  productPage.productInfoTabList();
  productPage.productViewScroll();
  productPage.assertMaterialAndCareTab();
})

it ('Verify Information on sustainability tab', ()=>{  
  productPage.openProductCard(); 
  productPage.productInfoTabList();
  productPage.assertSustainabilityTab();
})

it ('Verify Footer is Sticky', ()=>{ 
  productPage.openProductCard(); 
  productPage.stickyFooter(); 
})

it ('Verify responsive layout', ()=>{ 
  cy.viewport('iphone-x')
  cy.viewport('samsung-s10')
  cy.viewport('macbook-15')
})
})
