import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-likecomponent',
  templateUrl: './likecomponent.component.html',
  styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }
        
        .highlighted {
            color: deeppink;
        }   
    `]
})


export class Likecomponent {
  
  @Input() iLike = false;
  @Input() totalLikes = 0;
    
    onClick(){
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
    }

}
