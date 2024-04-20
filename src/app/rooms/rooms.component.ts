import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { Rooms, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
  imports: [CommonModule, NgbAlert, RoomsListComponent],
})
export class RoomsComponent implements AfterViewInit {
  hotelName = "Toria's Crown"
  numberOfRooms = 10

  hideRooms = false

  heading = 'Room List'
  toggleRooms() {
    this.hideRooms = !this.hideRooms
    this.heading = 'Yara Lists'
  }

  @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;

  
  // @ngAfterViewInit() {
  //   this.headerComponent.title
  // }


rooms: Rooms = {
  totalRooms: 15,
  availableRooms: 2,
  bookedRooms: 10
}

roomList: RoomList[] = [
  {
    roomNumber: 1,
    roomType: 'Deluxe room',
    amenities: 'Air condition, Fridge, Kitchen',
    price: 2000,
    photos: 'https://unsplash.com/photos/a-person-standing-on-a-street-holding-an-umbrella-7l0uVeJBVeg',
    checkInTime: new Date('11-Nov-2024'),
    checkOutTime: new Date('21-Dec-2024'),
    rating: 4.5,
  },
  {
    roomNumber: 2,
    roomType: 'Executive room',
    amenities: 'Air condition, Fridge, Kitchen',
    price: 5000,
    photos: 'https://unsplash.com/photos/a-person-standing-on-a-street-holding-an-umbrella-7l0uVeJBVeg',
    checkInTime: new Date('11-Nov-2024'),
    checkOutTime: new Date('21-Dec-2024'),
    rating: 3.455,
  },
  {
    roomNumber: 3,
    roomType: 'Masters room',
    amenities: 'Air condition, Fridge, Kitchen',
    price: 3000,
    photos: 'https://unsplash.com/photos/a-person-standing-on-a-street-holding-an-umbrella-7l0uVeJBVeg',
    checkInTime: new Date('12-Nov-2024'),
    checkOutTime: new Date('12-Dec-2024'),
    rating: 4.0,
  },
]

selectedRoom!: RoomList
selectRoom(room: RoomList) {
  this.selectedRoom = room
}

addRoom() {
  const room: RoomList = {
    roomNumber: 4,
    roomType: 'Odogwu room',
    amenities: 'Air condition, Fridge, Kitchen',
    price: 3000,
    photos: 'https://unsplash.com/photos/a-person-standing-on-a-street-holding-an-umbrella-7l0uVeJBVeg',
    checkInTime: new Date('12-Nov-2024'),
    checkOutTime: new Date('12-Dec-2024'),
    rating: 4.0,
  }

  this.roomList = [...this.roomList, room]
}
}
function ngAfterViewInit(): (target: RoomsComponent, propertyKey: "") => void {
  throw new Error('Function not implemented.');
}

