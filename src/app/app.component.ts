import { CommonModule, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, ViewContainerRef, viewChild } from '@angular/core';
import { RoomsComponent } from "./rooms/rooms.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RoomsComponent, NgSwitch, NgSwitchCase, NgSwitchDefault]
})
export class AppComponent implements AfterViewInit {

  roles = 'admin'

  // Dynamic components //
  @ViewChild('user', { read: ViewContainerRef}) vcr!: ViewContainerRef;

  @ViewChild('changedText', { static: true }) changedText!: ElementRef;

  
  
  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent)
    
    this.changedText.nativeElement.textContent = "The new"
  }
  // Dynamic components //
}
