import { BehaviorSubject } from 'rxjs';
import tippy from 'tippy.js';
import { Injectable, Directive, Input, ElementRef, NgModule, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-tippy.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxTippyService {
    constructor() {
        this._tippyTooltipStates = new Map();
        this.tippyTooltipStates = new BehaviorSubject(new Map());
    }
    /**
     * @param {?} name
     * @param {?} state
     * @return {?}
     */
    setTippyState(name, state) {
        this._tippyTooltipStates.set(name, state);
        this.tippyTooltipStates.next(this._tippyTooltipStates);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getTippyState(name) {
        return this._tippyTooltipStates.has(name) ? this._tippyTooltipStates.get(name) : null;
    }
    /**
     * @return {?}
     */
    getAllTippies() {
        return this._tippyTooltipStates;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    hideTippy(name) {
        if (this._tippyTooltipStates.has(name)) {
            this._tippyTooltipStates.get(name).popper._tippy.hide();
        }
    }
}
NgxTippyService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ NgxTippyService.ngInjectableDef = defineInjectable({ factory: function NgxTippyService_Factory() { return new NgxTippyService(); }, token: NgxTippyService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-tippy.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxTippyDirective {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-tippy.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxTippyModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NgxTippyModule,
            providers: [
                NgxTippyService,
                { provide: 'config', useValue: config }
            ]
        };
    }
}
NgxTippyModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NgxTippyDirective,
                ],
                imports: [
                    CommonModule,
                ],
                exports: [
                    NgxTippyDirective,
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-tippy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxTippyService, NgxTippyDirective, NgxTippyModule };

//# sourceMappingURL=ngx-tippy.js.map