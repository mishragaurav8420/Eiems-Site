import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { DocsModule } from '@app/shared/components/docs';
import { ProgressbarSectionComponent } from './progressbar-section.component';
import { DEMO_COMPONENTS } from './demos';
import { routes } from './demo-progressbar.routes';

@NgModule({
    declarations: [
        ProgressbarSectionComponent,
        ...DEMO_COMPONENTS
    ],
    imports: [
        CommonModule,
        FormsModule,
        DocsModule,
        ProgressbarModule.forRoot(),
        RouterModule.forChild(routes)
    ],
    exports: [ProgressbarSectionComponent]
})
export class DemoProgressbarModule {}
