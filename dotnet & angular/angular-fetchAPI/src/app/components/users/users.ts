import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit{
  ngOnInit(): void {
    this.getUsers();
  }
  http = inject(HttpClient);
  userList = signal<any[]>([]);

  getUsers(){
    debugger;
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any) => {
      debugger;
      this.userList.set(res);
    })
  }
}
