import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { DocsModule } from '@app/shared/components/docs';
import { DEMO_COMPONENTS } from './demos';
import { PopoverSectionComponent } from './popover-section.component';
import { routes } from './demo-popover.routes';

@NgModule({
    declarations: [
        PopoverSectionComponent,
        ...DEMO_COMPONENTS
    ],
    imports: [
        CommonModule,
        FormsModule,
        DocsModule,
        PopoverModule.forRoot(),
        RouterModule.forChild(routes)
    ],
    exports: [PopoverSectionComponent]
})
export class DemoPopoverModule {}
