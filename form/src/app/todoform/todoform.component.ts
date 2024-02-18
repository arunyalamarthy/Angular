import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todoform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.scss'
})
export class TodoformComponent implements OnInit {

  todoInput = "hello";

  constructor(private ts:TodoserviceService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  addTask(){
        
    this.ts.addTodo(this.todoInput);
    this.todoInput="";
  }

  resetForm(){
    this.todoInput="";
  }
  
  
}
