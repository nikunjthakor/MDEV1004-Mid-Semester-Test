import express from 'express';
const router = express.Router();

import { AddBook, DeleteBook, DisplayBookById, DisplayBookList, UpdateBook } from '../Controllers/book';

/* Endpooint */
/* GET Books page. */
router.get('/', function(req, res, next) {  DisplayBookList(req, res, next); });


/* GET Movie by ID. */
router.get('/:id', (req, res, next) => {  DisplayBookById(req, res, next); });

/* Add New Movie */
router.post('/add', (req, res, next) => {  AddBook(req, res, next); });

/* Update Movie */
router.put('/update/:id', (req, res, next) => {  UpdateBook(req, res, next); });

/* Delete Movie */
router.delete('/delete/:id', (req, res, next) => {  DeleteBook(req, res, next); });


export default router;
