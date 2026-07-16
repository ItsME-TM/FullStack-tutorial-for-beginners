import { Component, OnInit, signal } from '@angular/core';
import { TaskItem, TaskService } from '../services/task-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit {
  tasks = signal<TaskItem[]>([]);
  newTaskTitle = '';
  editingTaskId: number | null = null;
  editTitle = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks.set(data);
    });
  }

  addTask() {
    if (!this.newTaskTitle.trim()) return;
    const newTask: TaskItem = { id: 0, title: this.newTaskTitle.trim(), isCompleted: false };
    this.taskService.addTask(newTask).subscribe(() => {
      this.loadTasks();
      this.newTaskTitle = '';
    });
  }

  toggleCompleted(task: TaskItem) {
    const updated = { ...task, isCompleted: !task.isCompleted };
    this.taskService.updateTask(updated).subscribe(() => {
      this.loadTasks();
    });
  }

  startEdit(task: TaskItem) {
    this.editingTaskId = task.id;
    this.editTitle = task.title;
  }

  saveEdit(task: TaskItem) {
    const updated = { ...task, title: this.editTitle.trim() };
    this.taskService.updateTask(updated).subscribe(() => {
      this.loadTasks();
      this.editingTaskId = null;
      this.editTitle = '';
    });
  }

  cancelEdit() {
    this.editingTaskId = null;
    this.editTitle = '';
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.loadTasks();
    });
  }
}
