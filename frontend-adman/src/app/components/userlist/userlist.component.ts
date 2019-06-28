import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(
    private usrSvc: UsersService,
    private router: Router,
  ) { }

  users: any[];
  subscriptions = [];

  ngOnInit() {
    this.users = [];
    for (let i = 1; i < 5; i++) {
      this.subscriptions.push(this.usrSvc.getUserList(i).subscribe(_ => {
        let res = JSON.parse(_);
        if (res.data && res.data.length > 0) {
          res.data.map(user => {
            this.users.push(user);
          });
          this.users.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
        }
      }));
    }
  }

  seeDetails(id) {
    this.router.navigateByUrl(`/userDetails/${id}`);
  }

  OnDestroy() {
    this.subscriptions.map(sub => {
      sub.unsubscribe();
    });
  }
}
