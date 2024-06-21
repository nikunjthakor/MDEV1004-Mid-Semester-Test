"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayBookList = void 0;
const book_1 = __importDefault(require("../Models/book"));
function DisplayBookList(req, res, next) {
    book_1.default.find({})
        .then((data) => {
        res.status(200).json({ success: true, msg: "Books List Retrived and Displayed", data: data });
    })
        .catch((err) => {
        console.error(err);
    });
}
exports.DisplayBookList = DisplayBookList;
//# sourceMappingURL=book.js.map