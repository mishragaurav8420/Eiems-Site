import { ChangeDetectionStrategy, Component } from '@angular/core';

import { demoComponentContent } from './timepicker-section.list';
import { ContentSection } from '@app/shared/components/docs/models/content-section.model';

@Component({
  selector: 'timepicker-section',
  templateUrl: './timepicker-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimepickerSectionComponent {
  name = 'Timepicker';
  src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/timepicker';
  componentContent: ContentSection[] = demoComponentContent;
}
