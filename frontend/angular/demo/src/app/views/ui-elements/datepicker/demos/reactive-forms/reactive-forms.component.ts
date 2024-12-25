import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'demo-datepicker-reactive-forms',
  templateUrl: './reactive-forms.component.html'
})
export class DemoDatepickerReactiveFormsComponent implements OnInit {
  myForm: UntypedFormGroup;
  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      date: null,
      range: null
    });
  }
}
