import {IPost} from "@/Models/IPosts/IPost";
import {FC} from "react";
import './PostComponent.css'
import Link from "next/link";
type Props ={
    post: IPost
}
const PostComponent: FC<Props> =({post})=>{
    return(
        <div className={'boxPosts'}>
            <Link href={'/posts/' + post.id.toString()} >{post.title}</Link>
        </div>
    )
}
export default PostComponent