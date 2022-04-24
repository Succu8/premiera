import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router , ParamMap} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
  }

  showCinema(){
    this.router.navigate(['admin_cinemas'], {relativeTo: this.route}).then();
  }

  showMovie(){
    this.router.navigate(['admin_movie'], {relativeTo: this.route}).then();
  }

  showSchedule(){
    this.router.navigate(['admin_schedule'], {relativeTo: this.route}).then();
  }
}
