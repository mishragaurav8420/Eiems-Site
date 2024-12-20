import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AlertsSectionComponent } from './alerts-section.component';
import { DEMO_COMPONENTS } from './demos';
import { DocsModule } from '@app/shared/components/docs';

import { routes } from './demo-alerts.routes';

@NgModule({
    declarations: [
        AlertsSectionComponent,
        ...DEMO_COMPONENTS
    ],
    imports: [
        AlertModule.forRoot(),
        CommonModule,
        DocsModule,
        RouterModule.forChild(routes)
    ],
    exports: [AlertsSectionComponent]
})
export class DemoAlertsModule {
  static routes: any = routes;
}
