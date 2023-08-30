import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { UtilityService } from '../../service/utility.service';
import { TodoDataService } from '../../service/todo-data.service';
import { Itodo } from '../../model/model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
id !: UtilityService;

  constructor(private _MaterialModule:MaterialModule,
     private _utilityService :UtilityService,
     private _todoDataService : TodoDataService) { }

  ngOnInit(): void {
  }
  onAdd(todo :HTMLInputElement,id:UtilityService){
      let obj :Itodo= {
        todoItem : todo.value,
        todoId : this._utilityService.getIdmethod()
      }
      todo.value =''
      console.log(obj)
    this._todoDataService.todoNew(obj)
  }
}
