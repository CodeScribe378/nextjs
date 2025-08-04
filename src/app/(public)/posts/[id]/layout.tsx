import {Metadata} from "next";
import React from "react";

export const metadata: Metadata ={
    title: 'Post Layout title'
}

type Props ={
    children: React.ReactNode
}

const PostLayout = ({children}: Props)=>{
    return(
        <div>
            {children}
        </div>
    )
}
export default PostLayout