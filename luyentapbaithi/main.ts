import {productmanager} from "../luyentapbaithi/Imanager/ProductManager";
import {Product} from "../luyentapbaithi/model/Product"
import {Iproductmanager} from "./Imanager/Iproductmanager";
import {ProductManager} from "../baithi/Imanager/ProductManager";

let input = require('readline-sync');
let product1 = new productmanager();

function showMainMenu() {
    let choice = -1
    do {
        console.log(`
        -----Main Menu-----
        1.Add Product.
        2.Get list.
        3.Delete Product.
        4.Edit.
        5.Find Product By Name
        0.Exit.
        `)
        choice = +input.question('Enter choice: ')
        switch (choice) {
            case 1:
                addproduct()
                break;
            case 2:
                getList()
                break;
            case 3:
                deleteProduct()
                break;
            case 4:
                editProduct()
                break;
            case 5:
                findByName()
                break;
        }

    } while (choice != 0)
}
let ID = 1;

function addproduct() {
    console.log(`-----Menu Add-----`);
    let id = ID;
    let name = input.question('Enter name: ');
    let type = input.question('Enter type: ');
    let price = +input.question('Enter price: ');
    let soluong = +input.question('Enter soluong: ');
    let ngaytao = input.question('Enter ngaytao: ');
    let mota = input.question('Enter mota: ');
    let product: Product = new Product(id, name, type, price, soluong, ngaytao, mota)
    product1.add(product)
    console.log('add finish!')
    return ID++
}

function getList() {
    let product: any = product1.getlist();
    let product2 = product.map((element) => {
       return element.getinfo()
    })
    console.log(product2)
    }


function deleteProduct() {
    console.log('-----Delete Menu-----')
    let id = +input.question('Enter id: ')
    product1.delete(id);
    console.log('-----Delete finish!-----')
}

function editProduct() {
    console.log('-----Edit Menu-----')
    let id = +input.question('Enter ID: ');
    let name = input.question('Enter name: ');
    let type = input.question('Enter type: ');
    let price = +input.question('Enter price: ');
    let soluong = +input.question('Enter soluong: ');
    let ngaytao = input.question('Enter ngaytao: ');
    let mota = input.question('Enter mota: ');
    let product: Product = new Product(id, name, type, price, soluong, ngaytao, mota)
    product1.edit(id, product);
    console.log('-----Edit finish!-----')
}

function findByName() {
    console.log('-----Find Menu-----')
    let name = input.question('Enter Name: ')
    console.log(product1.findByName(name));
}

showMainMenu()