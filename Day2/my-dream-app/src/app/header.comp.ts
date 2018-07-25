import { Component, Input } from "@angular/core";

@Component({
    selector : 'header-comp',
    templateUrl : './header.component.html'
})

export class HeaderComp{

    @Input()
    cart=['Apple','Banana','Orange']

    CourseData = {
        Cname: 'Angular',
        CStartDate: new Date('23-Jul-2018'),
        Students : 20,
        Rating: 4.5776,
        Price: 5000,
        Description: 'Amarjeet is very good trainer and this is quite engaging and great learning experience. Angular is indeed a next gen framework to explore.'
    }
}