import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

import { DocsModule } from '@app/shared/components/docs';
import { ModalSectionComponent } from './modal-section.component';
import { DEMO_COMPONENTS } from './demos';
import { routes } from './demo-modal.routes';
import { ModalContentComponent } from './demos/service-component/service-component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
    declarations: [
        ModalSectionComponent,
        ModalContentComponent,
        ...DEMO_COMPONENTS
    ],
    imports: [
        ModalModule.forRoot(),
        PopoverModule.forRoot(),
        TooltipModule.forRoot(),
        CommonModule,
        FormsModule,
        DocsModule,
        RouterModule.forChild(routes)
    ],
    exports: [ModalSectionComponent]
})
export class DemoModalModule {}
