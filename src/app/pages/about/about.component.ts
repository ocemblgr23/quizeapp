import {AfterContentChecked, AfterViewChecked, Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterContentChecked,AfterViewChecked{

  game:string="";
  games=['chess','cricket']
  updateGames(){
   this.games.push(this.game)
    this.game ="";
  }

  ngAfterContentChecked() {
    // console.log('chenges detcct')
  }

  ngAfterViewChecked() {
    console.log("afterview checked")
  }


}
