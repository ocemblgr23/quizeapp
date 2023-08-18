import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnChanges{
@Input() games?: string[];

ngOnChanges(changes: SimpleChanges) {
  console.log(changes)
}

}
