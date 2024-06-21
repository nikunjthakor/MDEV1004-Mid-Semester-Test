//Books Controller

import { Request, Response, NextFunction } from 'express';

import Book from '../Models/book';

/**
 * function displays the Book list in JSON 
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function DisplayBookList(req: Request, res: Response, next: NextFunction): void
{
    Book.find({})
    .then((data) =>
    {
        res.status(200).json({success: true, msg: "Books List Retrived and Displayed", data: data})
    })
    .catch((err) =>
    {
        console.error(err);
    })
}