import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { TASKS } from '../mock-tasks';
import { Task } from 'src/app/Task';

@Injectable({
  providedIn: 'root'
})
// Algo como um UseCase
// consumindo uma API
export class TaskService {
  private apiUrl = "http://localhost:5000/tasks"

  constructor(private http:HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}` // literal string com 2 inputs
    return this.http.delete<Task>(url)
  }

}
