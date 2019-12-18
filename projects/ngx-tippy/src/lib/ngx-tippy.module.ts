import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxTippyDirective } from './ngx-tippy.directive';
import { NgxTippyService } from './ngx-tippy.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NgxTippyDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgxTippyDirective,
  ]
})
export class NgxTippyModule {
  public static forRoot(config): ModuleWithProviders {
    return {
      ngModule: NgxTippyModule,
      providers: [
        NgxTippyService,
        { provide: 'config', useValue: config }
      ]
    };
  }
}
