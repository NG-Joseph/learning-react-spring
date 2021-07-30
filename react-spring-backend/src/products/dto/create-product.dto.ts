export class CreateProductDto {
    productName: string;
    productPrice: number;
    productDescription: string;
    productCategory: EnumProductCategories;
    productImageUrl: string;
    productQuantity: number; 
    productTags: string[];
    
}


export enum EnumProductCategories {
    Fashion = "fashion",
    Food = "food",
    Home = "home",
    Electronics = "electronics",
    Furniture = "furniture",
}

    

