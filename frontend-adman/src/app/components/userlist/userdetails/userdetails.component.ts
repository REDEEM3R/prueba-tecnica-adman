import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usrSvc: UsersService,
  ) { }

  user: any;
  subscriptions = [];

  ngOnInit() {
    this.subscriptions.push(this.route.params.subscribe(_ => {
      this.subscriptions.push(this.usrSvc.getUserDetails(_.id).subscribe(_ => {
        let res = JSON.parse(_);
        if (res.data) {
          this.user = res.data;
        }
      }));
    }));
  }

  OnDestroy() {
    this.subscriptions.map(sub => {
      sub.unsubscribe();
    });
  }

}
