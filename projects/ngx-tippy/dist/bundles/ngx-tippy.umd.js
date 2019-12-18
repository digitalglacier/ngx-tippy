(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('tippy.js'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-tippy', ['exports', 'rxjs', 'tippy.js', '@angular/core', '@angular/common'], factory) :
    (factory((global['ngx-tippy'] = {}),global.rxjs,global.tippy,global.ng.core,global.ng.common));
}(this, (function (exports,rxjs,tippy,i0,common) { 'use strict';

    tippy = tippy && tippy.hasOwnProperty('default') ? tippy['default'] : tippy;

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-tippy.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxTippyService = /** @class */ (function () {
        function NgxTippyService() {
            this._tippyTooltipStates = new Map();
            this.tippyTooltipStates = new rxjs.BehaviorSubject(new Map());
        }
        /**
         * @param {?} name
         * @param {?} state
         * @return {?}
         */
        NgxTippyService.prototype.setTippyState = /**
         * @param {?} name
         * @param {?} state
         * @return {?}
         */
            function (name, state) {
                this._tippyTooltipStates.set(name, state);
                this.tippyTooltipStates.next(this._tippyTooltipStates);
            };
        /**
         * @param {?} name
         * @return {?}
         */
        NgxTippyService.prototype.getTippyState = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return this._tippyTooltipStates.has(name) ? this._tippyTooltipStates.get(name) : null;
            };
        /**
         * @return {?}
         */
        NgxTippyService.prototype.getAllTippies = /**
         * @return {?}
         */
            function () {
                return this._tippyTooltipStates;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        NgxTippyService.prototype.hideTippy = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                if (this._tippyTooltipStates.has(name)) {
                    this._tippyTooltipStates.get(name).popper._tippy.hide();
                }
            };
        NgxTippyService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ NgxTippyService.ngInjectableDef = i0.defineInjectable({ factory: function NgxTippyService_Factory() { return new NgxTippyService(); }, token: NgxTippyService, providedIn: "root" });
        return NgxTippyService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-tippy.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[ngxTippy]'
                    },] }
        ];
        /** @nocollapse */
        NgxTippyDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: NgxTippyService }
            ];
        };
        NgxTippyDirective.propDecorators = {
            tippyOptions: [{ type: i0.Input }]
        };
        return NgxTippyDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-tippy.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxTippyModule = /** @class */ (function () {
        function NgxTippyModule() {
        }
        /**
         * @param {?} config
         * @return {?}
         */
        NgxTippyModule.forRoot = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: NgxTippyModule,
                    providers: [
                        NgxTippyService,
                        { provide: 'config', useValue: config }
                    ]
                };
            };
        NgxTippyModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            NgxTippyDirective,
                        ],
                        imports: [
                            common.CommonModule,
                        ],
                        exports: [
                            NgxTippyDirective,
                        ]
                    },] }
        ];
        return NgxTippyModule;
    }());

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

    exports.NgxTippyService = NgxTippyService;
    exports.NgxTippyDirective = NgxTippyDirective;
    exports.NgxTippyModule = NgxTippyModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-tippy.umd.js.map