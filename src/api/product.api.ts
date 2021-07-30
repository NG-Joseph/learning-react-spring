import { ProductDto } from "./dto/product.dto";

export class ProductApi {
  // get products from localhost:3001/products
  public static async getProducts(): Promise<ProductDto[]> {
    const res = await fetch("http://localhost:3001/products", {
      method: "GET",
      
    });
    const data = await res.json();
    console.log(data); //test
    return data;
  }
}
