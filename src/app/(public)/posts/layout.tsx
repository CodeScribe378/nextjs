import {Metadata} from "next";
import React from "react";

export const metadata: Metadata ={
    title: 'PostsLayout title metadata'
}
type Props = {
    children: React.ReactNode
}

const PostsLayout =({children}: Props)=>{
    return(
        <div>
            {children}
            posts layout
        </div>
    )
}
export default PostsLayout