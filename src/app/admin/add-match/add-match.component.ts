import { FormsModule } from '@angular/forms';
import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() data: string;

  writeToConsole(){
    console.log(this.data);
  }




}
