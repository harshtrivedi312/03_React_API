import BookService from "../services/BookService";
import Util from "../utils/Utils";
// import { NUMBER } from "sequelize/types";

const util = new Util();

class BookController {
    static async getAllBooks(request, response) {
        try {
            const allBooks = await BookService.getAllBooks();
            if (allBooks.length > 0) {
                util.setSucess(200, "Here are all Books Listed", allBooks);
            } else {
                util.setSucess(200, "There are no books to display");
            }
            return util.send(response);
        } catch (error) {
            util.setError(400, error);
            return util.send(response);
        }
    }

    static async addBook(request, response) {
        if (
            !request.body.title ||
            !request.body.price ||
            !request.body.description
        ) {
            util.setError(400, "please provide all the details");
            return util.send(response);
        }
        const newBook = request.body;
        try {
            const createBook = await BookService.addBook(newBook);
            util.setSucess(201, "Sucess adding book", createBook);
            return util.send(response);
        } catch (error) {
            util.setError(400, error.message);
            return util.send(response);
        }
    }

    static async updateBook(request, response) {
        const updatedBook = request.body;
        const { id } = request.params;

        if (!Number(id)) {
            util.setError(400, "invalid id");
            return util.send(request);
        }
        try {
            const alteredBook = await BookService.updateBook(id, updatedBook);
            if (!alteredBook) {
                util.setError(404, `cannot find book with given : ${id}`);
            } else {
                util.setSucess(201, "book updated", alteredBook);
            }

            return util.send(response);
        } catch (error) {
            util.setError(400, error.message);
            return util.send(response);
        }
    }

    static async deleteBook(request, response) {
        const { id } = request.params;
        if (!Number(id)) {
            util.setError(400, 'not a valid id');
            return util.send(request);
        }
        try {
            const deletedBook = await BookService.deleteBook(id);
            if (deletedBook) {
                util.setSucess(200, 'book deleted', deletedBook);
            }
            else {
                util.setError(404, `book with ${id} id number cannot be found`)
            }
            return util.send(response);

        } catch (error) {
            util.setError(400, error.message);
            return util.send(response);
        }
    }

    static async getOneBook(request, response) {
        const { id } = request.params;
        if (!Number(id)) {
            util.setError(400, 'Please provide a valid id');
            return util.send(request);
        }
        try {
            const getOneBook = await BookService.getSingleBook(id);
            if (getOneBook) {
                util.setSucess(200, getOneBook);
            }
            else {
                util.setError(404, `Book not found with given id ${id}`)

            }
            return util.send(response);
        } catch (error) {

            util.setError(400, error.message);
            return util.send(response);
        }
    }
}

export default BookController;
