import { PipeTransform, Pipe } from "../../node_modules/@angular/core";

@Pipe({
    name: 'summary'
})
export class SummaryDemo implements PipeTransform {

    transform(value:string,limit:number){
        var mylimit=limit

        return value.substring(0, mylimit ? limit:10) + ' read more...'
    }

}