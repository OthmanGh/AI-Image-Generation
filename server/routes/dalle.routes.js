import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { getHelloMessage, generateImage } from '../controller/dalle.controller.js';

const router = express.Router();

router.route('/').get(getHelloMessage);
router.route('/').post(generateImage);

export default router;
