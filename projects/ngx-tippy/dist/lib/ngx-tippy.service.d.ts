import { BehaviorSubject } from 'rxjs';
export declare class NgxTippyService {
    private _tippyTooltipStates;
    tippyTooltipStates: BehaviorSubject<Map<any, any>>;
    setTippyState(name: any, state: any): void;
    getTippyState(name: any): any;
    getAllTippies(): any;
    hideTippy(name: any): void;
}
