import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private router:Router) { }
  go_to_add_player()
  {
    this.router.navigate(["/add-player"])
  }

  go_to_add_coach()
  {
    this.router.navigate(["/add-coach"])
  }

  go_to_add_match()
  {
    this.router.navigate(["/add-match"])
  }
  go_to_add_employee()
  {
    this.router.navigate(["/add-employee"])
  }

  go_to_add_training()
  {
    this.router.navigate(["/add-training"])
  }

  go_to_add_news()
  {
    this.router.navigate(["/add-news"])
  }
  go_to_add_eq()
  {
    this.router.navigate(["/add-eq"])
  }













  ngOnInit(): void {
  }

}
