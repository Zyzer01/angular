import { CommonModule, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { RoomsComponent } from "./rooms/rooms.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RoomsComponent, NgSwitch, NgSwitchCase, NgSwitchDefault]
})
export class AppComponent {

  roles = 'admin'
}
