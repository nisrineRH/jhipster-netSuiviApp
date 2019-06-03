import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NetSuiviAppSharedLibsModule, NetSuiviAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [NetSuiviAppSharedLibsModule, NetSuiviAppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [NetSuiviAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NetSuiviAppSharedModule {
  static forRoot() {
    return {
      ngModule: NetSuiviAppSharedModule
    };
  }
}
