import {GetPosts} from "@/services/api.service";
import PostComponent from "@/components/PostComponent/PostComponent";



const PostsComponents =async ()=>{
    const posts = await GetPosts()
    return(
        <div>
            {posts.map((post)=><PostComponent key={post.id} post={post}/>)}
        </div>
    )
}
export default PostsComponents