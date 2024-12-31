import mongoose from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from "mongoose";

@Schema()
export class Livro extends Document {

    @Prop({required: true})
    title: string;

    @Prop({required: true})
    author: string;

    @Prop()
    description?: string;

}

export const SchemaLivro = SchemaFactory.createForClass(Livro);