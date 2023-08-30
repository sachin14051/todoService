import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../model/model';
import { TodoDataService } from '../../service/todo-data.service';
import { UtilityService } from '../../service/utility.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoArray !: Array<Itodo>;
  id !: string
  constructor( private _todoDataServive:TodoDataService , _utilityService:UtilityService) { }

  ngOnInit(): void {

    this.todoArray = this._todoDataServive.todoAddAll()
  }

  onDelete(id:string){

    let getConfirm = confirm('confirm delete');
    if(getConfirm){    
     this._todoDataServive.todoDelete(id)
    }
  //  console.log(id);
  
  }
 


}
