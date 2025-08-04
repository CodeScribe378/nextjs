import {IComments} from "@/Models/IComments/IComments";
import {FC} from "react";
import './CommentComponent.css'
import Link from "next/link";

type Props ={
    comment: IComments
}
const CommentComponent: FC<Props> =({comment})=>{
    return(
        <div className={'boxComment'}>
            <Link href={{pathname:'/comments/' + comment.id.toString(), query:{...comment} }}>{comment.name}</Link>
        </div>
    )
}
export default CommentComponent