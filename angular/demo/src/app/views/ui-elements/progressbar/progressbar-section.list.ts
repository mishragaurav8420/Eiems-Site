import { DemoProgressbarStaticComponent } from './demos/static/static';
import { DemoProgressbarDynamicComponent } from './demos/dynamic/dynamic';
import { DemoProgressbarStackedComponent } from './demos/stacked/stacked';
import { DemoProgressbarConfigComponent } from './demos/config/config';

import { ContentSection } from '@app/shared/components/docs/models/content-section.model';
import { DemoTopSectionComponent } from '@app/shared/components/docs/demo-section-components/demo-top-section/index';
import { ExamplesComponent } from '@app/shared/components/docs/demo-section-components/demo-examples-section/index';
import { ApiSectionsComponent } from '@app/shared/components/docs/demo-section-components/demo-api-section/index';

import {
  NgApiDocComponent,
  NgApiDocConfigComponent
} from '@app/shared/components/docs/api-docs';

export const demoComponentContent: ContentSection[] = [
  {
    name: 'Usage',
    anchor: 'usage',
    outlet: DemoTopSectionComponent,
    content: {
      doc: require('!!raw-loader!./docs/usage.md')
    }
  },
  {
    name: 'Examples',
    anchor: 'examples',
    outlet: ExamplesComponent,
    content: [
      {
        title: 'Static',
        anchor: 'bs3-static',
        component: require('!!raw-loader!./demos/static/static'),
        html: require('!!raw-loader!./demos/static/static.html'),
        outlet: DemoProgressbarStaticComponent
      },
      {
        title: 'Dynamic',
        anchor: 'bs3-dynamic',
        component: require('!!raw-loader!./demos/dynamic/dynamic'),
        html: require('!!raw-loader!./demos/dynamic/dynamic.html'),
        outlet: DemoProgressbarDynamicComponent
      },
      {
        title: 'Stacked',
        anchor: 'bs3-stacked',
        component: require('!!raw-loader!./demos/stacked/stacked'),
        html: require('!!raw-loader!./demos/stacked/stacked.html'),
        outlet: DemoProgressbarStackedComponent
      },
      {
        title: 'Configuring defaults',
        anchor: 'bs3-config',
        component: require('!!raw-loader!./demos/config/config'),
        html: require('!!raw-loader!./demos/config/config.html'),
        outlet: DemoProgressbarConfigComponent
      }
    ]
  },
  {
    name: 'API Reference',
    anchor: 'api-reference',
    outlet: ApiSectionsComponent,
    content: [
      {
        title: 'ProgressbarComponent',
        anchor: 'progressbar-component',
        outlet: NgApiDocComponent
      },
      {
        title: 'ProgressbarConfig',
        anchor: 'progress-config',
        outlet: NgApiDocConfigComponent
      }
    ]
  }
];

