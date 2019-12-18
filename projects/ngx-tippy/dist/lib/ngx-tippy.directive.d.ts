import { OnInit, OnDestroy, ElementRef } from '@angular/core';
import { NgxTippyService } from './ngx-tippy.service';
export declare class NgxTippyDirective implements OnInit, OnDestroy {
    private el;
    private tippyDirectiveService;
    tippyOptions: any;
    tippyName: any;
    tippyInstance: any;
    constructor(el: ElementRef, tippyDirectiveService: NgxTippyService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
