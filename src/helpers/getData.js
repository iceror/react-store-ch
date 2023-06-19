import products from "../data/itemList.json"

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products)
        }, 1000)
        console.log(products);
    })
}