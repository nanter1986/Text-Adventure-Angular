import { port } from './port';


export class Market implements Room{
  imagePath = '../assets/provoli.jpg';
  title = 'The Market';

  button1 = () => {
    this.title = 'a big market';
  }

  button2 = () => {
    this.title = 'a park';
  }

  button3 = () => {
    this.title = 'a bus station';
  }

  button4 = () => {
     return new port();
  }
}
