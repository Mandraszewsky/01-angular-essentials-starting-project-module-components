import { Component, Input, Output, EventEmitter, input, computed, signal, output } from '@angular/core';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

interface User {
    id: string;
    avatar: string;
    name: string;
}


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Input decorators:
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

  // Input signals & output function:
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar()
  // });


  ///// Method #1 //// Angular change detection mechanism (reying on zone.js):
  //selectedUser = DUMMY_USERS[randomIndex];

  //getter
  // get imagePathWithDetection() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  //event with managing state and changing date
  // onSelectUserWithDetection() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser = DUMMY_USERS[randomIndex];
  // }


  ///// Method #2 //// Signals to notify Angular about changes & updates:
  // signal is an object that stores a value and angular manages subscriptions to the signal to get notified about changes (containers)
  // selectedUserWithSignal = signal(DUMMY_USERS[randomIndex]);
  // imagePathWithSignal = computed(() => 'assets/users/' + this.selectedUserWithSignal().avatar);

  // onSelectUserWithSignal() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUserWithSignal.set(DUMMY_USERS[randomIndex]);
  // }

}
