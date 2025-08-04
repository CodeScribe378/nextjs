import {Metadata} from "next";
import PostSingleComponent from "@/components/PostSingleComponent/PostSingleComponent";
import {FC} from "react";


type Props ={
    params: Promise<{id: string}>
}

export const generateMetadata = async({params}: Props): Promise<Metadata>=>{
    const {id} = await params
    return{
        title: 'Post Page title' + id
    }
}

const PostPage: FC<Props>=async({params})=>{
    const {id} = await params
    return(
        <div>
            {id && <PostSingleComponent id={id}/>}
        </div>
    )
}
export default PostPage