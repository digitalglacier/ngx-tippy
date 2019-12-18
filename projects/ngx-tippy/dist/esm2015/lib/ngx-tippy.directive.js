/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-tippy.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef } from '@angular/core';
import { NgxTippyService } from './ngx-tippy.service';
import tippy from 'tippy.js';
export class NgxTippyDirective {
    /**
     * @param {?} el
     * @param {?} tippyDirectiveService
     */
    constructor(el, tippyDirectiveService) {
        this.el = el;
        this.tippyDirectiveService = tippyDirectiveService;
        this.tippyName = null;
        this.tippyInstance = null;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const tippyOptions = this.tippyOptions || {
            name: 'abc',
            arrow: true,
        };
        /** @type {?} */
        const tippyInstance = tippy(this.el.nativeElement, tippyOptions);
        this.tippyInstance = tippyInstance;
        console.log('i am tippy', tippyInstance);
        if (tippyOptions.name === undefined && tippyOptions.shouldObserveState) {
            throw new Error('A name is required for the tooltip');
        }
        else {
            this.tippyDirectiveService.setTippyState(this.tippyName, this.tippyInstance);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.tippyDirectiveService.setTippyState(this.tippyName, this.tippyInstance);
    }
}
NgxTippyDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[ngxTippy]'
            },] }
];
/** @nocollapse */
NgxTippyDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgxTippyService }
];
NgxTippyDirective.propDecorators = {
    tippyOptions: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgxTippyDirective.prototype.tippyOptions;
    /** @type {?} */
    NgxTippyDirective.prototype.tippyName;
    /** @type {?} */
    NgxTippyDirective.prototype.tippyInstance;
    /**
     * @type {?}
     * @private
     */
    NgxTippyDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NgxTippyDirective.prototype.tippyDirectiveService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRpcHB5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10aXBweS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtdGlwcHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBTTdCLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBTTVCLFlBQ1UsRUFBYyxFQUNkLHFCQUFzQztRQUR0QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFpQjtRQUxoRCxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBTW5CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVNLFFBQVE7O2NBQ1AsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUk7WUFDeEMsSUFBSSxFQUFFLEtBQUs7WUFDWCxLQUFLLEVBQUUsSUFBSTtTQUNaOztjQUNLLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRXpDLElBQUksWUFBWSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksWUFBWSxDQUFDLGtCQUFrQixFQUFFO1lBQ3RFLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztTQUN2RDthQUFNO1lBQ0wsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FDdEMsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7O0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUN0QyxJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7SUFDSixDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7OztZQVA2QyxVQUFVO1lBQy9DLGVBQWU7OzsyQkFTckIsS0FBSzs7OztJQUFOLHlDQUEyQjs7SUFDM0Isc0NBQWlCOztJQUNqQiwwQ0FBcUI7Ozs7O0lBR25CLCtCQUFzQjs7Ozs7SUFDdEIsa0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIE9uRGVzdHJveSwgSW5wdXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFRpcHB5U2VydmljZSB9IGZyb20gJy4vbmd4LXRpcHB5LnNlcnZpY2UnO1xuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbmd4VGlwcHldJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hUaXBweURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKSB0aXBweU9wdGlvbnM6IGFueTtcbiAgdGlwcHlOYW1lID0gbnVsbDtcbiAgdGlwcHlJbnN0YW5jZSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRpcHB5RGlyZWN0aXZlU2VydmljZTogTmd4VGlwcHlTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgdGlwcHlPcHRpb25zID0gdGhpcy50aXBweU9wdGlvbnMgfHwge1xuICAgICAgbmFtZTogJ2FiYycsXG4gICAgICBhcnJvdzogdHJ1ZSxcbiAgICB9O1xuICAgIGNvbnN0IHRpcHB5SW5zdGFuY2UgPSB0aXBweSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRpcHB5T3B0aW9ucyk7XG4gICAgdGhpcy50aXBweUluc3RhbmNlID0gdGlwcHlJbnN0YW5jZTtcbiAgICBjb25zb2xlLmxvZygnaSBhbSB0aXBweScsIHRpcHB5SW5zdGFuY2UpO1xuXG4gICAgaWYgKHRpcHB5T3B0aW9ucy5uYW1lID09PSB1bmRlZmluZWQgJiYgdGlwcHlPcHRpb25zLnNob3VsZE9ic2VydmVTdGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIG5hbWUgaXMgcmVxdWlyZWQgZm9yIHRoZSB0b29sdGlwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlwcHlEaXJlY3RpdmVTZXJ2aWNlLnNldFRpcHB5U3RhdGUoXG4gICAgICAgIHRoaXMudGlwcHlOYW1lLFxuICAgICAgICB0aGlzLnRpcHB5SW5zdGFuY2VcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudGlwcHlEaXJlY3RpdmVTZXJ2aWNlLnNldFRpcHB5U3RhdGUoXG4gICAgICB0aGlzLnRpcHB5TmFtZSxcbiAgICAgIHRoaXMudGlwcHlJbnN0YW5jZVxuICAgICk7XG4gIH1cbn1cbiJdfQ==