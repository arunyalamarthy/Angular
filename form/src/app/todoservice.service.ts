import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  taskId = 2;
  todoliist = [
    {
     id:1, 'task':"Task1"
    },
    {
     id:1, 'task':"Task1"
    }

 ]

  constructor() { }

  addTodo(taskName: any){

    this.todoliist.push({"id": ++this.taskId, 'task': taskName});
  }

  deleteTodo(index:any){
          this.todoliist.splice(index,1);
  }
}
