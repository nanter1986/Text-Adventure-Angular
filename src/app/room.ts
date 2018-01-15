interface Room {
  imagePath: string;
  title: string;

  button1(): void;
  button2(): void;
  button3(): void;
  button4(): Room;
}
