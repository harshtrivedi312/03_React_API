import {Router} from 'express';
import BookController from '../controllers/BookController';
import BookService from '../services/BookService';

const router = Router();

router.get("/", BookController.getAllBooks);
router.get("/:id",BookController.getOneBook);
router.post("/",BookController.addBook);
router.put("/:id",BookController.updateBook);
router.delete("/:id",BookController.deleteBook);


export default router;
