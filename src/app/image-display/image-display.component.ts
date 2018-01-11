import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {
  @Input()
  title:string='new title';

  constructor() { }

  ngOnInit() {

  }

}
