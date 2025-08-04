
import {GetUser} from "@/services/api.service";
import './UserSingleComponent.css'
import {FC} from "react";

type Props ={
    id: string
}
const UserSingleComponent: FC<Props>=async ({id})=>{
        const user = await GetUser(id)
    return(
        <div className={'box'}>
            <p>name: {user.name}</p>
            <p>username: {user.username}</p>
            <p>phone: {user.phone}</p>
            <p>website: {user.website}</p>
            <p> street: {user.address.street}</p>
            <p> suite: {user.address.suite}</p>
            <p> city: {user.address.city}</p>
            <p> zipcode: {user.address.zipcode}</p>

        </div>
    )
}
export default UserSingleComponent
