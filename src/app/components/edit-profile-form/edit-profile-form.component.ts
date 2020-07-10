import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/types/user.type';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.scss'],
})
export class EditProfileFormComponent implements OnInit {
  editForm = {
    profileName: '',
    profileInfo: '',
    location: '',
    website: '',
  };

  isLoading: boolean = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  get user() {
    return this.userService.getUser();
  }

  saveChanges() {
    this.isLoading = true;

    const editedUserData = {
      userInfoText: this.editForm.profileInfo,
      userLocation: this.editForm.location,
      userWebsite: this.editForm.website,
      profileName: this.editForm.profileName,
    };

    this.userService
      .updateUser(editedUserData)
      .subscribe((response: User) => this.userService.setUser(response));

    this.editForm = {
      profileName: '',
      profileInfo: '',
      location: '',
      website: '',
    };

    this.router.navigateByUrl(`/users/${this.user.id}`);
  }
}
