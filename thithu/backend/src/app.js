import express from 'express';
import { connect } from 'mongoose';
import productRouter from './routers/product'
import cors from 'cors';
import authRouter from './routers/auth'
import cartRouter from './routers/cart';
const app = express();
app.use(cors());


app.use(express.json());
(async()=>{
    try {
        await connect(`mongodb://localhost:27017/demo-thi-thu2`)
    } catch (error) {
        console.log(error);
    }
})();


app.use(`/api`,productRouter);
app.use(`/api`,authRouter);
// app.use(`/api`,cartRouter);


export const viteNodeApp = app;
