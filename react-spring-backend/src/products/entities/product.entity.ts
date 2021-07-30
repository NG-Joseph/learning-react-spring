import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm'
import { EnumProductCategories } from '../dto/create-product.dto';
@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productName: string;

    @Column()
    productDescription: string;

    @Column({type: "float"})
    productPrice: number;

    @Column()
    productImageUrl: string;

    @Column({enum:EnumProductCategories, type: "enum", name: "productCategory", default: EnumProductCategories.Furniture})
    productCategory: EnumProductCategories;

    @Column()
    productQuantity: number;

    @CreateDateColumn()
    productCreatedOn: Date;
}
