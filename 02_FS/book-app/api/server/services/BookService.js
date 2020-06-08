import database from "../src/models";

class BookService {
   
    // 1. should be able to read all books
    static async getAllBooks() {
        try {
            return await database.Book.findAll();
        } catch (error) {
            throw error;
        }
    }

    //2. add new books

    static async addBook(newBook) {
        try {
            return await database.Book.create(newBook);
        } catch (error) {
            throw error;
        }
    }



    //3. update books

    static async updateBook(id, updateBook) {

        try {
            const bookToUpdate = await database.Book.findOne({
                where: { id: Number(id) }

            });
            if (bookToUpdate) {
                await database.Book.update(updateBook, {
                    where: { id: Number(id) }
                })
                return updateBook;
            }
            return null;
        } catch (error) {
            throw error;
        }

    }


    //4. delete books
    static async deleteBook(id) {

        try {
            const bookToDelete = await database.Book.findOne({
                where: { id: Number(id) }

            });
            if (bookToDelete) {
                const deleteBook = await database.Book.destroy({
                    where: { id: Number(id) }
                })
                return deleteBook;
            }
            return null;
        } catch (error) {
            throw error;
        }

    }





    //5. get one single book by id.

    static async getSingleBook(id) {
        try {
            const theBook = await database.Book.findOne({
                where: { id: Number(id) }
            });
            return theBook;

        } catch (error) {
            throw error;
        }
    }
}


export default BookService;