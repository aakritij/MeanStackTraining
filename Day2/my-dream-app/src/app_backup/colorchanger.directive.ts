import { Renderer, ElementRef, Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
selector:'[cc]'
})

export class ColourChanger {
    /* constructor(ren:Renderer, el:ElementRef){
        ren.setElementStyle(el.nativeElement,'backgroundColor','blue');
        ren.setElementStyle(el.nativeElement,'backgroundColor','white   ')
    } */

    private defaultColor="white"

    @HostListener('mouseover')
    addColor(){
        this.defaultColor='pink'
    }
    
    @HostListener('mouseleave')
    detachColor(){
        this.defaultColor='white'
    }

    @HostBinding('style.backgroundColor')
    get applyStyle(){
        return this.defaultColor
    }
} 