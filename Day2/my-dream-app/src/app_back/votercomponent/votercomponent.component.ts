import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votercomponent',
  templateUrl: './votercomponent.component.html',
  styleUrls: ['./votercomponent.component.css']
})
export class VotercomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   @Input() voteCount
   @Input() myVote = 0;
    
    @Output() vote = new EventEmitter();
    
    upVote(){
        if (this.myVote == 1)
            return;
        
        this.myVote++;

        this.vote.emit({ myVote: this.myVote });
    }
    
    downVote(){
        if (this.myVote == -1)
            return;
            
        this.myVote--;
        
        this.vote.emit({ myVote: this.myVote });
    }

}
