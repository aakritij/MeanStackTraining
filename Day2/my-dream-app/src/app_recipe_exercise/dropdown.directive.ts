import { Directive, HostBinding, HostListener } from "../../node_modules/@angular/core";


@Directive({
    selector:'[dd]'
})

export class DropdownDirective{
    private isOpened = false;
    @HostBinding('class.open') get opened(){
        return this.isOpened;
    }

    @HostListener('click') open(){
        this.isOpened=true;
    }

    @HostListener('mouseleave') close(){
        this.isOpened=false;
    }

}