import { port } from './port';


export class Market implements Room{
  imagePath = '../assets/provoli.jpg';
  title = 'The Market';

  button1 = () => {
    this.title = 'a statue.there is a button on it. will you press it?';
  }

  button2 = () => {
    this.title = 'a park.there is a coin on the floor.will you take it?';
  }

  button3 = () => {
    this.title = 'a bus station. someone is looking at you. will you talk to him?';
  }

  button4 = () => {
     return new port();
  }

  button5 = () => {
     return new port();
  }
}
