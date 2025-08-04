import {GetPost} from "@/services/api.service";
import './PostSingleComponent.css'
import {FC} from "react";
type Props ={
    id: string
}

const PostSingleComponent: FC<Props> = async({id})=>{
    const post = await GetPost(id)
    return(
        <div className={'boxPostSingle'}>
          body: {post.body}
        </div>
    )
}
export default PostSingleComponent