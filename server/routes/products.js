import express from 'express'
import getEntrys from '../controller/productController.js'

const productRouter = express.Router()

productRouter.get("/", getEntrys);


export default productRouter;