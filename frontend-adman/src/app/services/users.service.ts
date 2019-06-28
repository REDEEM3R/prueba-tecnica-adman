import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  getUserList(page) {
    return this.http.get('/api/getUserList',  {responseType: 'text', params: {pageNumber: page}});
  }

  getUserDetails(id) {
    return this.http.get('api/getSingleUser', {responseType: 'text', params: {uid: id}});
  }
}
