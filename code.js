
function Products(imageUrl,name,price){
     this.imageUrl : imageUrl,
     this.name : name,
     this.price : price
}

const product = new Products("http://localhost:3000/images/teddy_1.jpg",'Norbert',2900);
const product1 = new Products("http://localhost:3000/images/teddy_2.jpg",'Arnold',3900);
const product2 = new Products("http://localhost:3000/images/teddy_3.jpg",'Lenny and Carl',5900);
const product3 = new Products("http://localhost:3000/images/teddy_4.jpg",'Gustav',4500);
const product4 = new Products("http://localhost:3000/images/teddy_5.jpg",'Garfunkel',5500);


let products = [];
products.push(product,product1,product2,product3,product4);

function populateTableList(){
	let listOfProducts = '';
    
    products.forEach(prod =>
    listOfProducts += `
        <tr class="text-center">
            <td><img src=${prod.imageUrl} class="img-fluid img-thumbnail w-50"></td>
            <td class="w-25 align-middle">${prod.name}</td> 
            <td class="w-25 align-middle">${prod.price}€</td>
            <td class="w-25 align-middle"><button class="btn btn-info">View</button></td>
        </tr>
         `
        )
 
document.getElementById('productList').innerHTML = "listOfProducts";
}
























