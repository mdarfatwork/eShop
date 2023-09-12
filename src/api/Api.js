import axios from "axios"

export async function ProductData(){
    // const products = await axios.get("https://fakestoreapiserver.reactbd.com/products");
    const products = await axios.get("https://mdarfat-portfolio.web.app/api/product/index.json");
    return products;
}