import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:5000/users').subscribe((data: any) => {
      this.users = data.users;
    });
  }

  deleteUser(userId: string) {
    this.http.delete(`http://localhost:5000/users/${userId}`).subscribe(() => {
      this.users = this.users.filter(user => user.id !== userId);
    });
  }
}
