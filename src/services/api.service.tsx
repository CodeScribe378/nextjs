import {IUsers} from "@/Models/IUsers/IUsers";
import {IPost} from "@/Models/IPosts/IPost";
import {IComments} from "@/Models/IComments/IComments";

const baseUrl = 'https://jsonplaceholder.typicode.com'


export const GetUsers = async(): Promise <IUsers[]>=>{
  return await fetch(baseUrl + '/users')
      .then ((value)=> value.json())

}

export const GetUser = async(id: string): Promise <IUsers>=>{
  return await fetch(baseUrl + '/users/' + id )
      .then((value)=>value.json())
}

export const GetPosts = async(): Promise<IPost[]>=>{
 return await fetch(baseUrl + '/posts')
      .then ((value)=>value.json())

}

export const GetPost = async(id: string): Promise<IPost>=>{
 return await fetch(baseUrl + '/posts/' + id)
      .then((value)=>value.json())

}

export const GetComments =async(): Promise<IComments[]>=>{
  return await fetch (baseUrl + '/comments')
      .then ((value)=> value.json())

}

