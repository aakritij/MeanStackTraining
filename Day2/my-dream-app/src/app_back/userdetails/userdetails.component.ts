import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  id;
  action;
  constructor(private _ac:ActivatedRoute, private _action:ActivatedRoute)  { 

  }

  ngOnInit() {
    this.id=this._ac.snapshot.params['id'];
    this.action=this._action.snapshot.params['action'];
  }

}
