import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SortableModule } from 'ngx-bootstrap/sortable';

import { DocsModule } from '@app/shared/components/docs';
import { SortableSectionComponent } from './sortable-section.component';
import { DEMO_COMPONENTS } from './demos';
import { routes } from './demo-sortable.routes';

@NgModule({
    declarations: [
        SortableSectionComponent,
        ...DEMO_COMPONENTS
    ],
    imports: [
        CommonModule,
        FormsModule,
        DocsModule,
        SortableModule.forRoot(),
        RouterModule.forChild(routes)
    ],
    exports: [SortableSectionComponent]
})
export class DemoSortableModule {}
