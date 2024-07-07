import { Model } from 'mongoose';
import { InjectModel, PropOptions } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schemas/product.schema';

@Injectable()
export class ProductService {
	constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }

	async create(createProductDto: CreateProductDto): Promise<{message: string}> {
		const createdProduct = new this.productModel(createProductDto);
		await createdProduct.save();
		
		return {message: "Create Successfully"};
	}

	async findAll(): Promise<Product[]> {
		return await this.productModel.find().exec();
	}

	async findOne(id: string): Promise<Product> {
		return await this.productModel.findById(id).exec();
	}

	async update(id: string, updateProductDto: UpdateProductDto): Promise<{message: string}>{
		const updatedProduct = await this.productModel.findByIdAndUpdate(
			id,
			updateProductDto,
			{new: true},
		).exec();

		return {message: "Update Successfully"};
	}

	async remove(id: string): Promise<{message: string}> {
		const deletedProduct = await this.productModel.findByIdAndDelete(id).exec();

		return {message: "Delete Successfully"};
	}
}
