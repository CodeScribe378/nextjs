
import {Metadata} from "next";
import UserSingleComponent from "@/components/UserSingleComponent/UserSingleComponent";
import {FC} from "react";


type Props ={
    params: Promise<{id: string}>
}
export const generateMetadata = async ({params}: Props): Promise <Metadata>=>{
    const {id} = await params

    return{
        title: 'User Page title' + id
    }
}
const UserPage: FC<Props>= async({params})=>{
    const {id}= await params
    return(
        <div>
            {id &&  <UserSingleComponent id={id}/>}
        </div>
    )
}
export default UserPage