import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Policy } from '../policy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = 'http://localhost/Al-Wathba/Back-End/APIs/';

  loginUrl = 'http://localhost/Al-Wathba/Back-End/APIs/Accounts/login.php'
  
  
  memberData = 'dsfdsfdsfdsf'

  loginUser(data) { return this.http.post<any>(this.loginUrl, data) }
  //FOR SEND REQEST WITH TOKEN
  get() {
    return this.http.get<any>(this.memberData,
      {
        headers: new HttpHeaders()
          .set('Authorization', localStorage.getItem('token')),
        observe: 'response'
      })
  }
   ///////////////////////////////////////////////////////////////////
    addplayerURL ='http://localhost/Al-Wathba/Back-End/APIs/Players/AddPlayer.php'
  
  
  
  
  
  
  
  ///////////////////////////////////////////////////////////////////////////////////

  /*
  readPolicies(): Observable<Policy[]>{
    return this.httpClient.get<Policy[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }
  */
  ////////////////////////
  createPolicy(policy: Policy): Observable<Policy> {
    return this.http.post<Policy>(`${this.PHP_API_SERVER}Admins/AddAdmin.php`, policy);
  }






  ////////////////////////
  /*
  updatePolicy(policy: Policy){
    return this.httpClient.put<Policy>(`${this.PHP_API_SERVER}/api/update.php`, policy);   
  }
  */
  //////////////////////////
  /*
  deletePolicy(id: number){
    return this.httpClient.delete<Policy>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  }
  */
  /////////////////////////////









  ///////////////////////////////

  constructor(private http: HttpClient) { }
}
