import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
@Input() imgeSrc: string='';

  constructor() { }

  ngOnInit(): void {
  }

}
