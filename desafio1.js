class ProductManager {
    constructor(){
        this.products=[

        ]
    }

    getProducts=()=>{
        return this.products
    }

    generateIds=()=>{
        const counter = this.products.length
        if(counter===0){
            return 1
        }
        else{
            return (this.products[counter-1].id)+1
        }
    }

    addProduct=(title, description, price,thumbnail,code,stock)=>{
    
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.error("Ingrese todos los datos del product")
            return
        }
        else{
                
        const productFiltrado= this.products.find(element=>element.code==code)  
        const id=this.generateIds();
            if (!productFiltrado){
            const newproduct={
                id,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
        return this.products.push(newproduct)
        }

        else{
            console.error("El codigo del producto ya existe")
        }
        
        }

    }

    getProdudctById=(id)=>{
    const productEncontrado=this.products.find(element=>element.id==id)
        if (!productEncontrado)
    {
        console.error("NOT FOUND")
        return
    }

    else{
        return productEncontrado
    }
    }
}

const productmanager = new ProductManager();
productmanager.addProduct("product1","description1",10,"url","code1",1000)
productmanager.addProduct("product2","description2",22,"url","code2",2000)
productmanager.addProduct("product3","description3",33,"url","code3",3000)
productmanager.addProduct("product4","description4",44,"url","code4",4000)
productmanager.addProduct("product5","description5",55,"url","code5",5000)
productmanager.addProduct("product6","description6",66,"url","code6",6000)

console.log(productmanager.getProducts())
console.log(productmanager.getProdudctById(4))