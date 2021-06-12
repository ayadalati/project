import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  
  constructor(private router:Router) { }
  
  go_to_admin_panel()
  {
    var x:number =parseInt((<HTMLInputElement>document.getElementById("member_number")).value);
    
   
     if(x==1)
       {this.router.navigate(["/admin-panel"]);}
       else if(x==2)
       {
        this.router.navigate(["/coach-panel"]);
       }
       else if(x==3)
       {
        this.router.navigate(["/player-panel"]);
       }
       else if(x==4)
       {
        this.router.navigate(["/manger-panel"]);
       }

  }

  ngOnInit(): void {
  }

}
