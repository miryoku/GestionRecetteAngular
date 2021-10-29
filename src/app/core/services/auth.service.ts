import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import jwt_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  IsLog = new BehaviorSubject<User|null>(this.user);


  private readonly TOKEN_KEY = 'TOKEN';
  private readonly url: string = environment.url_uri

  public token!: string | null
  
  constructor(private httpClient: HttpClient) {
    this.token=localStorage.getItem(this.TOKEN_KEY);
    
  }

  public get user(): User | null {
    if (!this.token) return null;
    return jwt_decode<User>(this.token);
  }

  login(data: User): Observable<void> {
    

    return this.httpClient.post<User>(this.url + 'Users/login', data).pipe(map(token => {
      localStorage.setItem(this.TOKEN_KEY,token.token);
      this.token = token.token;
      this.IsLog.next(this.user);
    }))
  }

  logout(){
    localStorage.removeItem(this.TOKEN_KEY);
    this.token=null; 
    this.IsLog.next(this.user);
  }

  refreshToken():Observable<void>{
    return this.httpClient.get<string>(this.url+'refreshToken').pipe(map(token=>{
      localStorage.setItem(this.TOKEN_KEY,token);
      this.token=token;
    }))
  }
}
