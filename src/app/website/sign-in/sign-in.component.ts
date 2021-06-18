import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  data = { Id: '', Pass: '' }
  constructor(private router: Router, private api: ApiService) { }

  onSubmit() {


    // PRINT MY DATA ON CONSOLE
    console.log(JSON.stringify(this.data))

    // SEND DATA TO BACKEND
    this.api.loginUser(JSON.stringify(this.data)).subscribe(
      res => {

        // PRINT RESULT ON CONSOLE
        console.log(res)

        // TEST IF THERE IS AN ERROR 
        if (res.error) return console.log('there is an error')

        console.log(res.Data)
        console.log(res.Data.AccountType)
        console.log(res.Data.Token)

        // REGISTER TOKEN IN LOCALSTORAGE
        localStorage.setItem('token', res.Data.Token)
        // var t = localStorage.getItem('token')
        // console.log('t value:' + t)

        // THE ROUTING
        if (res.Data.AccountType == 'Manager')
          this.router.navigate(["/manger-panel"]);
        else if (res.Data.AccountType == 'Admin')
          this.router.navigate(["/admin-panel"]);
      })




    // var x: number = parseInt((<HTMLInputElement>document.getElementById("member_number")).value);


    // if (x == 1) { this.router.navigate(["/admin-panel"]); }
    // else if (x == 2) {
    //   this.router.navigate(["/coach-panel"]);
    // }
    // else if (x == 3) {
    //   this.router.navigate(["/player-panel"]);
    // }
    // else if (x == 4) {
    //   this.router.navigate(["/manger-panel"]);
    // }

  }

  ngOnInit(): void {
  }

}
