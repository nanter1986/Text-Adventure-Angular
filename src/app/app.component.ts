import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "something";

button1Click(): void {
    this.title="good choice";
    //https://www.youtube.com/watch?v=zAhOWyhTF7g 
  }
}
