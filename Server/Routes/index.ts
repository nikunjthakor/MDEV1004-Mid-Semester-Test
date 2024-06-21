import express from 'express';
const router = express.Router();

import { DisplayBookList } from '../Controllers/book';

/* Endpooint */
/* GET Books page. */
router.get('/', function(req, res, next) {  DisplayBookList(req, res, next); });

export default router;
