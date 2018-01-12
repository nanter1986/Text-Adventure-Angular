export abstract class Room{
  imagePath: string;
  title: string;

  constructor(public path:string,public titleForRoom: string){
    this.imagePath=path;
    this.title=titleForRoom;
  }

  abstract button1():void;
  abstract button2():void;
  abstract button3():void;
  abstract button4():void;
}
