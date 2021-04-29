import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private readonly url = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get(this.url);
  }
  create(name, age, email){
    return this.http.post(this.url,{ name, age, email });
  }
  getOne(_id){
    return this.http.get(`${this.url}/${_id}`);
  }
}
