import { Component, Input } from "@angular/core";
import { UserDataService } from "./userdata.service";
import { DeptDataService } from "./dept.service";

@Component({
    selector : 'footer-comp',
    templateUrl : './footer.component.html',
    providers : [UserDataService,DeptDataService]
})

export class FooterComp{
    @Input()
    userdata
    deptdata

    isActive=false;
    
    constructor(ud:UserDataService,dd:DeptDataService){
        this.userdata=ud.loadUsers()
        this.deptdata=dd.loadDept()
    }
    pp="https://www.lorempixel.com/400/200/"
    city = "pune"

    callMe($event){
        console.log($event);
    }

    tweet = {
        totalLikes: 10,
        iLike: false
    }

    post = {
        voterCount: 10,
        myVote: 0
    }

    onVote($event){
        console.log($event);
    }

}