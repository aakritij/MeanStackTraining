import { Injectable } from "@angular/core";


@Injectable()
export class UserDataService {

    loadUsers():string[] {
        return ['admin','manager','employee']
    }
}