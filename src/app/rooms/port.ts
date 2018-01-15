import { Market } from './market';

export class port implements Room {
  imagePath = '../assets/port.jpg';
  title = 'The Port';

  button1 = () => {
    console.log("2");
    this.title = 'a coffee shop';
  }

  button2 = () => {
    this.title = 'a clothes shop';
  }

  button3 = () => {
    this.title = 'a jewlery shop';
  }

  button4 = () => {
    return new Market();
  }
}
