import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map }                from 'rxjs/operators';
import { Http, RequestMethod, Request, Response } from "@angular/http";

import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
