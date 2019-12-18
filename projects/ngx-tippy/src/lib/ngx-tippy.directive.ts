import { Directive, OnInit, OnDestroy, Input, ElementRef } from '@angular/core';
import { NgxTippyService } from './ngx-tippy.service';
import tippy from 'tippy.js';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngxTippy]'
})
export class NgxTippyDirective implements OnInit, OnDestroy {

  @Input() tippyOptions: any;
  tippyName = null;
  tippyInstance = null;

  constructor(
    private el: ElementRef,
    private tippyDirectiveService: NgxTippyService,
  ) {
    this.el = el;
  }

  public ngOnInit() {
    const tippyOptions = this.tippyOptions || {
      name: 'abc',
      arrow: true,
    };
    const tippyInstance = tippy(this.el.nativeElement, tippyOptions);
    this.tippyInstance = tippyInstance;
    console.log('i am tippy', tippyInstance);

    if (tippyOptions.name === undefined && tippyOptions.shouldObserveState) {
      throw new Error('A name is required for the tooltip');
    } else {
      this.tippyDirectiveService.setTippyState(
        this.tippyName,
        this.tippyInstance
      );
    }
  }

  public ngOnDestroy() {
    this.tippyDirectiveService.setTippyState(
      this.tippyName,
      this.tippyInstance
    );
  }
}
