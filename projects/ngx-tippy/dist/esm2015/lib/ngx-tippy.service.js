/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-tippy.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class NgxTippyService {
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
/** @nocollapse */ NgxTippyService.ngInjectableDef = i0.defineInjectable({ factory: function NgxTippyService_Factory() { return new NgxTippyService(); }, token: NgxTippyService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxTippyService.prototype._tippyTooltipStates;
    /** @type {?} */
    NgxTippyService.prototype.tippyTooltipStates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRpcHB5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdGlwcHkvIiwic291cmNlcyI6WyJsaWIvbmd4LXRpcHB5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBS3ZDLE1BQU0sT0FBTyxlQUFlO0lBSDVCO1FBS1Usd0JBQW1CLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN4Qyx1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7S0FvQnJEOzs7Ozs7SUFsQkMsYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLO1FBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsSUFBSTtRQUNoQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN4RixDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQUk7UUFDWixJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQzs7O1lBekJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7SUFHQyw4Q0FBd0M7O0lBQ3hDLDZDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hUaXBweVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgX3RpcHB5VG9vbHRpcFN0YXRlcyA9IG5ldyBNYXAoKTtcbiAgdGlwcHlUb29sdGlwU3RhdGVzID0gbmV3IEJlaGF2aW9yU3ViamVjdChuZXcgTWFwKCkpO1xuXG4gIHNldFRpcHB5U3RhdGUobmFtZSwgc3RhdGUpOiB2b2lkIHtcbiAgICB0aGlzLl90aXBweVRvb2x0aXBTdGF0ZXMuc2V0KG5hbWUsIHN0YXRlKTtcbiAgICB0aGlzLnRpcHB5VG9vbHRpcFN0YXRlcy5uZXh0KHRoaXMuX3RpcHB5VG9vbHRpcFN0YXRlcyk7XG4gIH1cblxuICBnZXRUaXBweVN0YXRlKG5hbWUpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl90aXBweVRvb2x0aXBTdGF0ZXMuaGFzKG5hbWUpID8gdGhpcy5fdGlwcHlUb29sdGlwU3RhdGVzLmdldChuYW1lKSA6IG51bGw7XG4gIH1cblxuICBnZXRBbGxUaXBwaWVzKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpcHB5VG9vbHRpcFN0YXRlcztcbiAgfVxuXG4gIGhpZGVUaXBweShuYW1lKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3RpcHB5VG9vbHRpcFN0YXRlcy5oYXMobmFtZSkpIHtcbiAgICAgIHRoaXMuX3RpcHB5VG9vbHRpcFN0YXRlcy5nZXQobmFtZSkucG9wcGVyLl90aXBweS5oaWRlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=