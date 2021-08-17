import * as express from "express";
const router = express.Router();
import {blogController} from '../controllers/blog.controller';
router.route('/')
    .get(blogController.getAll)
    .post(blogController.postBlog);

router.route('/:id')
    .get(blogController.getById)
    .put(blogController.updateBlog)
    .delete(blogController.deleteBlog);
module.exports = router;