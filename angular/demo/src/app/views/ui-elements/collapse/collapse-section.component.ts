import { ChangeDetectionStrategy, Component } from '@angular/core';

import { demoComponentContent } from './collapse-section.list';
import { ContentSection } from '@app/shared/components/docs/models/content-section.model';

@Component({
  selector: 'collapse-section',
  templateUrl: './collapse-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollapseSectionComponent {
  name = 'Collapse';
  src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/collapse';
  componentContent: ContentSection[] = demoComponentContent;
}
