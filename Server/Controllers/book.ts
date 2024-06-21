//Books Controller

import { Request, Response, NextFunction } from 'express';

import Book from '../Models/book';
import { SanitizeArray } from '../Util';

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



/**
 * Display Book By Id 
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function DisplayBookById(req: Request, res: Response, next: NextFunction): void
{
    // endpoint should be /api/:id
    let id = req.params.id;

    // checking if id is valid
    if (id.length != 24)
        {
            res.status(400).json({success: false, msg: "A valid ID is required to retrive a Book", data: ""});
        }
        else
        {
            Book.findById({_id: id})
            .then((data) =>
            {
                if(data)
                {
                    res.status(200).json({success: true, msg: "One Book Retrived and Displayed", data: data})
                }
                else
                {
                    res.status(404).json({success: false, msg: "Book not found", data: ""});
                }
            })
            .catch((err) =>
            {
                console.error(err);
            })
        }
}

/**
 *Add New Book 
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function AddBook(req: Request, res:Response, next: NextFunction): void
{
    let genres = (req.body.genres) ?  SanitizeArray(req.body.genres as string) : SanitizeArray("");
    let directors = (req.body.directors) ? SanitizeArray(req.body.directors as string) : SanitizeArray("");
    let actors = (req.body.actors) ? SanitizeArray(req.body.actors as string) : SanitizeArray("");
    let writers = (req.body.writers) ? SanitizeArray(req.body.writers as string) : SanitizeArray("");

    let newbook = new Book({
        bookID: req.body.bookID,
        title: req.body.title,
        authors: req.body.studio,
        genres: genres,
        country: req.body.country,
        description: req.body.description,
        publicationDate: req.body.publicationDate,
        publisher: req.body.publisher,
        pageCount: req.body.pageCount,
        language: req.body.language,
        ISBN: req.body.ISBN,
        imageURL: req.body.imageURL
     });
 
     Book.create(newbook)
     .then(() =>
     {
        res.status(200).json({success: true, msg: "New Book added", data: newbook});
     })
     .catch((err) =>
     {
        console.error(err);
     })
}


/**
 * Update Existing Book
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function UpdateBook(req:Request, res:Response, next:NextFunction): void
{
    // endpoint should be /api/update/:id
    let id = req.params.id;

    // ensure that the id is valid
    if (id.length != 24)
    {
        res.status(400).json({success: false, msg: "A valid ID is required to update a Book", data: ""});
    }
    else
    {
        let genres = (req.body.genres) ?  SanitizeArray(req.body.genres as string) : SanitizeArray("");
        let directors = (req.body.directors) ? SanitizeArray(req.body.directors as string) : SanitizeArray("");
        let actors = (req.body.actors) ? SanitizeArray(req.body.actors as string) : SanitizeArray("");
        let writers = (req.body.writers) ? SanitizeArray(req.body.writers as string) : SanitizeArray("");

        let bookToUpdate = new Book({
            _id: id,
            bookID: req.body.bookID,
            title: req.body.title,
            authors: req.body.studio,
            genres: genres,
            country: req.body.country,
            description: req.body.description,
            publicationDate: req.body.publicationDate,
            publisher: req.body.publisher,
            pageCount: req.body.pageCount,
            language: req.body.language,
            ISBN: req.body.ISBN,
            imageURL: req.body.imageURL
        });

        Book.updateOne({_id: id}, bookToUpdate)
        .then(() =>
        {
            res.status(200).json({success: true, msg: "Book updated Successfully", data: bookToUpdate});
        })
        .catch((err) =>
        {
            console.error(err);
        })
    }
}


/**
 *For delete a Book function
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function DeleteBook(req:Request, res:Response, next:NextFunction): void
{
    // endpoint should be /api/delete/:id
    let id = req.params.id;

    // ensure that the id is valid
    if (id.length != 24)
    {
        res.status(400).json({success: false, msg: "A valid ID is required to delete a Book", data: ""});
    }
    else
    {
        Book.deleteOne({_id: id})
        .then(() =>
        {
            res.status(200).json({success: true, msg: "Book deleted", data: id});
        })
        .catch((err) =>
        {
            console.error(err);
        })
    }
}