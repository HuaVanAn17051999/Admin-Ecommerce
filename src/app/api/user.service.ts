import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../_module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  
  user: User;
  insert(user: User){
    let url = this.baseUrl + '/users';
    return this.http.post(url, user)
    .pipe(catchError(this.errorHander));
    
  }
  update(id: number, user: User){
    let url = this.baseUrl + '/users' + id;
    return this.http.put(url, user)
    .pipe(catchError(this.errorHander));
  }
  delete(id){
    let url = this.baseUrl + '/users' + id;
    return this.http.delete(id)
    .pipe(catchError(this.errorHander))
  }

  getListUser(): Observable<any[]>{
    let url = this.baseUrl + '/users/ListUserAsync';
    return this.http.get<any[]>(url)
    .pipe(catchError(this.errorHander))
  }
  getById(id: number) : Observable<any> {
    let url = this.baseUrl + '/users/' + id;
    return this.http.get(url)
    .pipe(catchError(this.errorHander))
  }

  private errorHander(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server error")
  }
}
