import { Component } from '@angular/core';

@Component({
  selector: 'demo-accordion-open-event',
  templateUrl: './open-event.html'
})
export class DemoAccordionOpenEventComponent {
  log(event: boolean) {
    console.log(`Accordion has been ${event ? 'opened' : 'closed'}`);
  }
}
