import {GetUsers} from "@/services/api.service";
import UserComponent from "@/components/UserComponent/UserComponent";


const UsersComponent = async()=>{
    const users = await GetUsers()
    return(
        <div>
            {users.map((user)=> <UserComponent key={user.id} user={user}/>)}
        </div>
    )
}
export default UsersComponent
