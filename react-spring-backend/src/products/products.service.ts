import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

constructor (
  @InjectRepository(Product) private readonly productsRepository: Repository<Product>
  
) { }



  async create(createProductDto: CreateProductDto) {
    let newProduct  =  this.productsRepository.create(createProductDto);
    return await this.productsRepository.save(newProduct);
    
  }

 async findAll() {
    return await this.productsRepository.find()
  }

  async findOne(id: number) {
     return await this.productsRepository.findOne(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.productsRepository.update(id, updateProductDto);
  }

  async delete(id: number) {
    return await this.productsRepository.delete(id)
  }
}
