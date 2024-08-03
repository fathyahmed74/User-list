import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  username: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  searchText: string = '';
  users: User[] = [

{ username: 'ahmed', email: 'ahmed@gmail.com', phone: '123-456-7890'},
{ username: 'aly', email: 'aly@gmail.com', phone: '098-765-4321' },
{ username: 'hossam', email: 'hossam@gmail.com', phone: '456-123-7890' },
{ username: 'islam', email: 'isalm@gmail.com', phone: '789-456-1230'} ,
{ username: 'marwan', email: 'marwan@gmail.com', phone: '789-456-1230'} ,
{ username: 'mostafa', email: 'mostafa@gmail.com', phone: '789-456-1230'} 


      ];
  filteredUsers: User[] = [...this.users];
  searchUsers() {
    const searchTextLower = this.searchText.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.email.toLowerCase().includes(searchTextLower) ||
      user.username.toLowerCase().includes(searchTextLower) ||
      user.phone.includes(this.searchText)
    );

}
}

  
