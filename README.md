# EcommerceApiApp

#Introduction
1. This is Ecommerce Api App which is made using nodejs and mongo db.
2. for this using mongodb cloud db site.

#Step to use and run this application
1. open terminal in vs code or cmd in project folder -->run command npm i to insatll all packages.
2. Start server using command npm start.
3. Open postman to test whether application working or not
4. make request get using 'localhost:8000/products'
5. All product list will visible here.

#step to add product into list
1. Open postman to test whether application working or not
2. make request post using 'localhost:8000/products/create'
3. select body tab add parameters according to list.
4. make post request .
5. make request get using 'localhost:8000/products'
6. All product list will visible here  after adding new product.

# step to update product into list
1.Open postman to test whether application working or not
2. make request post using '/products/:id/update_quantity/?number=10 (any number)'
3. API to update quantity of a product (can be decremented).
4. after updating product will get message update suceessfully.
5.  make request get using 'localhost:8000/products'
6. All product list will visible here  after updating product

# step to delete product into list
1.Open postman to test whether application working or not
2.API to delete products --> 'localhost:8000/products/:id'
3.after deleting product will get message "Product deleted Successfully..."
4. make request get using 'localhost:8000/products' 
5. All  product list will visible here after deleting product.
3.
