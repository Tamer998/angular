import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
assets: any;
img: any;
logo: any;

@Input() title: string='';
@Output() avatarClicked = new EventEmitter <Event>();
  constructor() { }

  ngOnInit(): void {
    console.log("dfdvs")
  }

  avatarclick(event:Event){
    this.avatarClicked.emit(event)
console.log('ghost moveing')

  }
}
