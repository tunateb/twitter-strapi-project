import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/types/user.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-account-form',
  templateUrl: './edit-account-form.component.html',
  styleUrls: ['./edit-account-form.component.scss'],
})
export class EditAccountFormComponent implements OnInit {
  editForm = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  isLoading: boolean = false;

  constructor(private userService: UserService, private router:Router) {}

  ngOnInit(): void { }
  
  get user() {
    return this.userService.getUser()
  }

  saveChanges() {

    this.isLoading = true;

    const editedUserData = {
      username: this.editForm.username,
      email: this.editForm.email,
      password: this.editForm.password,
    };

    this.userService
      .updateUser(editedUserData)
      .subscribe((response: User) => this.userService.setUser(response));

    this.editForm = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    this.router.navigateByUrl(`/users/${this.user.id}`)
  }
}
