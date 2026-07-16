import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface TaskItem {
  id: number;
  title: string;
  isCompleted: boolean;
}


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5197/api/Tasks';

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<TaskItem[]>(this.apiUrl);
  }

  addTask(task: TaskItem){
    return this.http.post<TaskItem>(this.apiUrl, task);
  }

  updateTask(task: TaskItem){
    return this.http.put(`${this.apiUrl}/${task.id}`, task, { responseType: 'text' });
  }

  deleteTask(taskId: number){
    return this.http.delete(`${this.apiUrl}/${taskId}`, { responseType: 'text' });
  }
}
