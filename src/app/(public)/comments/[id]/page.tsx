import {Metadata} from "next";
import {FC} from "react";
import {IComments} from "@/Models/IComments/IComments";



type Props={
    params: Promise<{id:string}>
    searchParams: Promise<IComments>
}

export const generateMetadata = async({params}: Props): Promise<Metadata>=>{
    const {id} = await params
    return{
        title: 'Comment Page Title' + id
    }
}

const CommentPage: FC<Props> =async({searchParams})=>{
    const awaitedComment = await searchParams

    return (
        <div>{awaitedComment && <div>body: {awaitedComment.body}
                                         <p>email: {awaitedComment.email}</p>
                                         <p>postId: {awaitedComment.postId}</p></div>}</div>
    )

}
export default CommentPage