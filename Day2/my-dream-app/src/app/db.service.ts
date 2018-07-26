import { Http, Response, Headers } from "../../node_modules/@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Rx";
import { Injectable } from "../../node_modules/@angular/core";

@Injectable()
export class HttpService {

    constructor(private http:Http){

    }

    sendData(user: any){
        const body = JSON.stringify(user);
        const headers = new Headers();

        headers.append('Content-type','application/json');
        return this.http.post('https://aakriti-pro.firebaseio.com/aakriti.json', body,{
            headers: headers
        }).map((data: Response) => data.json())
    }

    getOwnData(){
        return this.http.get('https://aakriti-pro.firebaseio.com/aakriti.json').map((response: Response) => response.json())
    }
}