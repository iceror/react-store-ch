import products from "../data/productList.json"

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products)
        }, 1000)
        console.log(products);
    })
}