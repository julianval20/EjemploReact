import { useState } from "react"
import App from "./Post"
function PostList(){
    
    const handleDelete = (id) =>{
        console.log("Deleted...", id)
        setPosts(posts.filter(post=>post.id !==id))
    }

    const handleAdd = () =>{
        console.log("Adding...");
        const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
        const newPost = {
          id: newId,
        };
        setPosts([...posts, newPost]);

        
    }

    const [posts, setPosts] = useState([
        {"id": 1, "edad": 5, "nombre": "Juan"},
        {"id": 2, "edad": 7, "nombre": "María"},
        {"id": 3, "edad": 8, "nombre": "Ana"},
        {"id": 4, "edad": 9, "nombre": "Carlos"}
    ]);
    
    return (
        <>
          {posts.map((post) => (
            <App key={post.id} post={post} onDelete={handleDelete} />
          ))}
          <button onClick={handleAdd}>Añadir</button>
        </>
      );
}
export default PostList