import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'demo-date-picker-custom-format',
  templateUrl: './custom-format.html'
})
export class DemoDatePickerCustomFormatComponent {
  currentDate = new Date();

  form = new UntypedFormGroup({
    dateYMD: new UntypedFormControl(new Date()),
    dateFull: new UntypedFormControl(new Date()),
    dateMDY: new UntypedFormControl(new Date()),
    dateRange: new UntypedFormControl([
      new Date(),
      new Date(this.currentDate.setDate(this.currentDate.getDate() + 7))
    ])
  });
}
