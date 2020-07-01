import { NgModule } from '@angular/core';
import { PortalUiModule } from './ui/ui.module';
import { PortalComponentsModule } from './components/components.module';

@NgModule({
    declarations: [  ],
    imports: [    ],
    exports: [
    PortalUiModule,
    PortalComponentsModule
    ]
  })
  export class PortalCommonsModule { }
