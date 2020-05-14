const {products} = require('../db.json')

module.exports = {
    getProducts: (req, res)=>{
        res.json(products)
    },
    addProducts:(req, res)=>{
        const {name} = req.body;
        products.push({
            name:name,
            id: products.length
        });
        res.json({
            'success':true,
            'msg':'successfully added'
        });
    },
    updateProduct: (req, res)=>{
        const { id } = req.params;
        const { name } = req.body;
        products.forEach((product, id)=>{
            if(product.id === Number(id)){
                product.name = name;
            }
        });
        res.json({
            'success':true,
            'msg':'update'
        })
    },
    deleteProduct:(req, res)=>{
        const { id } = req.params
        products.forEach((product, id)=>{
            if(product.id === Number(id)){
                product.splice(i,1)
            }
        });
        res.json({
            'success':true,
            'msg':'delete'
        })
    }
}