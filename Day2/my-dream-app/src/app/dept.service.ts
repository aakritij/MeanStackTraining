import { Injectable, Component } from "@angular/core";

@Component({
    selector : 'dept-comp',
    templateUrl : './footer.component.html',
    providers : [DeptDataService]
})

@Injectable()
export class DeptDataService {

    loadDept():string[] {
        return ['Department1','Department2','Department3']
        //return []
    }
}