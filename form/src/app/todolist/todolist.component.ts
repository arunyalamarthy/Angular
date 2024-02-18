import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent implements OnInit{

  constructor(private ts: TodoserviceService) {


  }

  todos: any;
  ngOnInit(): void {
    this.todos = this.ts.todoliist;
  }

  removeTodo(index:any){
    this.ts.deleteTodo(index)
  }
 
}
