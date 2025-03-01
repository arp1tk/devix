import axios from "axios"

async function getBlogs() {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
        timeout: 10000, // 10 seconds timeout
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      return []; // Return an empty array to avoid breaking the component
    }
  }
  
interface IBlog{
    title:string;
    completed:boolean;
}
function Todo({title , completed}: IBlog){
    return <div>
        <h2>{title}</h2>
        <p>{completed?"Completed":"Not Completed"}</p>
    </div>
}
export default async function Blog(){
    const blogs = await getBlogs();
    return(
        <div>
         {blogs.map((blog:IBlog , index:number)=> <Todo key={index} title={blog.title} completed={blog.completed}></Todo>)}   
                    </div>
    )
}