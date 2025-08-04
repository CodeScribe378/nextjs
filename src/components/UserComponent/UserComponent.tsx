import {IUsers} from "@/Models/IUsers/IUsers";
import {FC} from "react";
import Link from "next/link";
import './UserComponent.css'

type Props = {
    user: IUsers
}

const UserComponent: FC<Props> =({user})=>{
    return (
        <div className={'boxUsers'}>
           <Link href={'/users/' + user.id.toString()}>{user.name}</Link>
        </div>
    )
}
export default UserComponent