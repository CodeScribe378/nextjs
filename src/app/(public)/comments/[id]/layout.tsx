import {Metadata} from "next";
import React from "react";

export const metadata: Metadata ={
    title: 'Comment Layout title'
}

type Props ={
    children: React.ReactNode
}

const CommentPage =({children}: Props)=>{
    return(
        <div>
            {children}
        </div>
    )
}
export default CommentPage