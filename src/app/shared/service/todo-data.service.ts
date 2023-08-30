import { Injectable } from '@angular/core';
import { Itodo } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  todoArray : Array<Itodo> =[
    {todoItem :"angular",
   todoId :'asdfghjkl'
 }
   ]
  constructor() { }

  todoAddAll(){
    return this.todoArray
  }

  todoNew(obj : Itodo){
       this.todoArray.push(obj)
  }

  todoDelete(id:string){
   let  getId = this.todoArray.findIndex(todo =>{
   return  todo.todoId === id
   
  })
  this.todoArray.splice(getId,1)
}
}