import { NgModule } from '@angular/core';

import { NetSuiviAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [NetSuiviAppSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [NetSuiviAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class NetSuiviAppSharedCommonModule {}
