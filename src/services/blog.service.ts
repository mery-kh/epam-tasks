import * as fs from 'fs';
import * as path from "path";
import {uid} from "uid";
let blogs:any[] = JSON.parse(fs.readFileSync(path.join('data', 'blogs.json'), 'utf-8'));
class BlogService{
     getAllBlogs(){
        return  blogs;
    }
    getBlogById(data:any) {
        return  blogs.find(({id}) => id === data);
    }
    postBlog(data:any) {
        // const newId = (+blogs[blogs.length - 1].id + 1).toString();
        const newId = uid(16);
        console.log(newId);
        const newBlog = Object.assign({id: newId}, data);
        blogs.push(newBlog);
        fs.writeFileSync(path.join( 'data', 'blogs.json'), JSON.stringify(blogs));
        return newBlog;
    }
    updateBlog(data:any){
        let blog =  blogs.find(({id}) => id === data.params.id);
        blog.name = data.body.name;
        fs.writeFileSync(path.join( 'data', 'blogs.json'), JSON.stringify(blogs));
    }
    deleteBlog(data:any) {
        let blog =  blogs.find(({id}) => id === data);
        const index = blogs.indexOf(blog);
        if (index > -1) {
            blogs.splice(index, 1);
        }
        fs.writeFileSync(path.join( 'data', 'blogs.json'), JSON.stringify(blogs));
    }
}
export const blogService = new BlogService();