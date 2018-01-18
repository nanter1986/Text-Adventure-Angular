import { Component } from '@angular/core';
import { port } from './rooms/port';
import { Market } from './rooms/market';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentRoom: Room = new port();
  title: string = this.currentRoom.title;
  imagePath:string=this.currentRoom.imagePath;

  //choices

  button1Click(): void {
    this.currentRoom.button1();
    this.setStrings();
  }

  button2Click(): void {
    this.currentRoom.button2();
    this.setStrings();
  }

  button3Click(): void {
    this.currentRoom.button3();
    this.setStrings();
  }

  button4Click(): void {
    this.currentRoom=this.currentRoom.button4();
    this.setStrings();
    console.log(this.imagePath);
  }

  button5Click(): void {
    this.currentRoom=this.currentRoom.button5();
    this.setStrings();
    console.log(this.imagePath);
  }

  button6Click(): void {

  }

  button7Click(): void {

  }

  button8Click(): void {
     
  }

  setStrings():void{
    this.title= this.currentRoom.title;
    this.imagePath=this.currentRoom.imagePath;
  }
}
