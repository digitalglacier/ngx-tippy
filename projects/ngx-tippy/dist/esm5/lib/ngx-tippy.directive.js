/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-tippy.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef } from '@angular/core';
import { NgxTippyService } from './ngx-tippy.service';
import tippy from 'tippy.js';
var NgxTippyDirective = /** @class */ (function () {
    function NgxTippyDirective(el, tippyDirectiveService) {
        this.el = el;
        this.tippyDirectiveService = tippyDirectiveService;
        this.tippyName = null;
        this.tippyInstance = null;
        this.el = el;
    }
    /**
     * @return {?}
     */
    NgxTippyDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tippyOptions = this.tippyOptions || {
            name: 'abc',
            arrow: true,
        };
        /** @type {?} */
        var tippyInstance = tippy(this.el.nativeElement, tippyOptions);
        this.tippyInstance = tippyInstance;
        console.log('i am tippy', tippyInstance);
        if (tippyOptions.name === undefined && tippyOptions.shouldObserveState) {
            throw new Error('A name is required for the tooltip');
        }
        else {
            this.tippyDirectiveService.setTippyState(this.tippyName, this.tippyInstance);
        }
    };
    /**
     * @return {?}
     */
    NgxTippyDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tippyDirectiveService.setTippyState(this.tippyName, this.tippyInstance);
    };
    NgxTippyDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[ngxTippy]'
                },] }
    ];
    /** @nocollapse */
    NgxTippyDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgxTippyService }
    ]; };
    NgxTippyDirective.propDecorators = {
        tippyOptions: [{ type: Input }]
    };
    return NgxTippyDirective;
}());
export { NgxTippyDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRpcHB5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10aXBweS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtdGlwcHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBRTdCO0lBVUUsMkJBQ1UsRUFBYyxFQUNkLHFCQUFzQztRQUR0QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFpQjtRQUxoRCxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBTW5CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVNLG9DQUFROzs7SUFBZjs7WUFDUSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSTtZQUN4QyxJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxJQUFJO1NBQ1o7O1lBQ0ssYUFBYSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUM7UUFDaEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFekMsSUFBSSxZQUFZLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxZQUFZLENBQUMsa0JBQWtCLEVBQUU7WUFDdEUsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1NBQ3ZEO2FBQU07WUFDTCxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUN0QyxJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7SUFFTSx1Q0FBVzs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FDdEMsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDO0lBQ0osQ0FBQzs7Z0JBekNGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzs7O2dCQVA2QyxVQUFVO2dCQUMvQyxlQUFlOzs7K0JBU3JCLEtBQUs7O0lBb0NSLHdCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0F0Q1ksaUJBQWlCOzs7SUFFNUIseUNBQTJCOztJQUMzQixzQ0FBaUI7O0lBQ2pCLDBDQUFxQjs7Ozs7SUFHbkIsK0JBQXNCOzs7OztJQUN0QixrREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4VGlwcHlTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtdGlwcHkuc2VydmljZSc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tuZ3hUaXBweV0nXG59KVxuZXhwb3J0IGNsYXNzIE5neFRpcHB5RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpIHRpcHB5T3B0aW9uczogYW55O1xuICB0aXBweU5hbWUgPSBudWxsO1xuICB0aXBweUluc3RhbmNlID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGlwcHlEaXJlY3RpdmVTZXJ2aWNlOiBOZ3hUaXBweVNlcnZpY2UsXG4gICkge1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCB0aXBweU9wdGlvbnMgPSB0aGlzLnRpcHB5T3B0aW9ucyB8fCB7XG4gICAgICBuYW1lOiAnYWJjJyxcbiAgICAgIGFycm93OiB0cnVlLFxuICAgIH07XG4gICAgY29uc3QgdGlwcHlJbnN0YW5jZSA9IHRpcHB5KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGlwcHlPcHRpb25zKTtcbiAgICB0aGlzLnRpcHB5SW5zdGFuY2UgPSB0aXBweUluc3RhbmNlO1xuICAgIGNvbnNvbGUubG9nKCdpIGFtIHRpcHB5JywgdGlwcHlJbnN0YW5jZSk7XG5cbiAgICBpZiAodGlwcHlPcHRpb25zLm5hbWUgPT09IHVuZGVmaW5lZCAmJiB0aXBweU9wdGlvbnMuc2hvdWxkT2JzZXJ2ZVN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgbmFtZSBpcyByZXF1aXJlZCBmb3IgdGhlIHRvb2x0aXAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aXBweURpcmVjdGl2ZVNlcnZpY2Uuc2V0VGlwcHlTdGF0ZShcbiAgICAgICAgdGhpcy50aXBweU5hbWUsXG4gICAgICAgIHRoaXMudGlwcHlJbnN0YW5jZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy50aXBweURpcmVjdGl2ZVNlcnZpY2Uuc2V0VGlwcHlTdGF0ZShcbiAgICAgIHRoaXMudGlwcHlOYW1lLFxuICAgICAgdGhpcy50aXBweUluc3RhbmNlXG4gICAgKTtcbiAgfVxufVxuIl19