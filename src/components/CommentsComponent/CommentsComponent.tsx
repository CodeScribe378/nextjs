import {GetComments} from "@/services/api.service";
import CommentComponent from "@/components/CommentComponent/CommentComponent";

const CommentsComponent = async()=>{
    const comments = await GetComments()
    return(
        <div>
            {comments.map((comment)=><CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    )
}
export default CommentsComponent