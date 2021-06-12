import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }     from '@angular/router';

import { Observable } from 'rxjs';
import { ApiService } from '../../api.service';
import { map }                from 'rxjs/operators';
//import { Http, RequestMethod, Request, Response } from "@angular/http";
import {Router,  NavigationExtras} from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Policy } from 'src/policy';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {




  policies:  Policy[];
    selectedPolicy:  Policy  = {
      Id: null,
      FirstName: null,
      LastName: null,
      FatherName: null,
      MotherName: null,
      BirthDate:null,
      Address: null,
      Phone:null,
      Pass:null

    };



    
      //////////
      createOrUpdatePolicy(form){
        //
        //if(this.selectedPolicy ){
          //&& this.selectedPolicy.Id
          //null;
          
          //form.value.Id = this.selectedPolicy.Id;
          
          /*this.apiService.updatePolicy(form.value).subscribe((policy: Policy)=>{
            console.log("Policy updated" , policy);
          });
          */
        
        //else{
    
          this.apiService.createPolicy(form.value).subscribe((policy: Policy)=>{
            console.log("Policy created, ", policy);
          });
        //}
        //}
    
      }
    
      selectPolicy(policy: Policy){
        this.selectedPolicy = policy;
      }
      
    
      /*deletePolicy(Id){
        this.apiService.deletePolicy(Id).subscribe((policy: Policy)=>{
          console.log("Policy deleted, ", policy);
        });
      }
      */
      //////////




  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    
    
    /*this.apiService.readPolicies().subscribe((policies: Policy[])=>{
      this.policies = policies;
      console.log(this.policies);
    })
    */
  }
  
  
}