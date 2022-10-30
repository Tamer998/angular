import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'no';

  clicktext='click';
  canceltext='cancel';


  clicked(name:string){

this.clicktext='welcome to Ps'

  console.log(name);



  }

}
