import {Request, Response} from "express";
import {blogService} from '../services/blog.service';
import AppError from '../utils/app.error';
class BlogController {
    public getAll(req:Request,res:Response) {
       //service
        res.send(blogService.getAllBlogs())
    }
    public getById(req:Request,res:Response){
        res.status(200).json({
            message: 'success',
            data: blogService.getBlogById(req.params.id)
        });
    }
    public postBlog(req:Request,res:Response) {
        blogService.postBlog(req.body);
        res.status(201).json({message: 'Successfully posted!'});
    }
    public updateBlog(req:Request, res:Response){
        blogService.updateBlog(req);
        res.status(200).json({message: 'Successfully updated!'})
    }
    public deleteBlog(req:Request, res:Response){
        blogService.deleteBlog(req.params.id);
        res.status(200).json({message: 'Successfully deleted!'})
    }
}
export const blogController = new BlogController();