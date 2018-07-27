import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['/assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  @Output()
  evt = new EventEmitter()

  @Input()
  isFavourite=true;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavourite=!this.isFavourite;
    this.evt.emit({newValue:this.isFavourite})
  }

}
