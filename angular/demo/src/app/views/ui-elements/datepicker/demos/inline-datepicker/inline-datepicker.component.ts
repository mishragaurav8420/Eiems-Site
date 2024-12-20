import { Component } from '@angular/core';

@Component({
  selector: 'demo-datepicker-inline',
  templateUrl: './inline-datepicker.component.html'
})
export class DemoDatepickerInlineComponent {
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();

  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }
}
