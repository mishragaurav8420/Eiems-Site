import { DemoBasicComponent } from './demos/basic/basic.component';
import { ComplexDatamodelDemoComponent } from './demos/complex-datamodel/complex-datamodel.component';
import { CustomItemTemplateDemoComponent } from './demos/custom-item-template/custom-item-template';

import { ContentSection } from '@app/shared/components/docs/models/content-section.model';
import { DemoTopSectionComponent } from '@app/shared/components/docs/demo-section-components/demo-top-section/index';
import { ExamplesComponent } from '@app/shared/components/docs/demo-section-components/demo-examples-section/index';
import { ApiSectionsComponent } from '@app/shared/components/docs/demo-section-components/demo-api-section/index';

import { NgApiDocComponent } from '@app/shared/components/docs/api-docs';
import { DemoAccessibilityComponent } from './demos/accessibility/accessibility';

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
        title: 'Basic',
        anchor: 'basic',
        component: require('!!raw-loader!./demos/basic/basic.component.ts'),
        html: require('!!raw-loader!./demos/basic/basic.component.html'),
        outlet: DemoBasicComponent
      },
      {
        title: 'Complex data model',
        anchor: 'complexDatamodel',
        component: require('!!raw-loader!./demos/complex-datamodel/complex-datamodel.component.ts'),
        html: require('!!raw-loader!./demos/complex-datamodel/complex-datamodel.component.html'),
        outlet: ComplexDatamodelDemoComponent
      },
      {
        title: 'Custom item template',
        anchor: 'itemTemplate',
        component: require('!!raw-loader!./demos/custom-item-template/custom-item-template.ts'),
        html: require('!!raw-loader!./demos/custom-item-template/custom-item-template.html'),
        outlet: CustomItemTemplateDemoComponent
      },
      {
        title: 'Accessibility',
        anchor: 'accessibility',
        outlet: DemoAccessibilityComponent
      }
    ]
  },
  {
    name: 'API Reference',
    anchor: 'api-reference',
    outlet: ApiSectionsComponent,
    content: [
      {
        title: 'SortableComponent',
        anchor: 'sortable-component',
        outlet: NgApiDocComponent
      }
    ]
  }
];
