import express from "express";
import morgan from 'morgan'; 

const app = express()
    .use(express.json())