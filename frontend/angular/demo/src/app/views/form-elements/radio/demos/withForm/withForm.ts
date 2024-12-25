import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators} from '@angular/forms';

@Component({
    selector: 'demo-radio-with-form',
    templateUrl: './withForm.html'
})
export class DemoRadioWithFormComponent implements OnInit {
    form = new UntypedFormGroup({
        gender: new UntypedFormControl('', Validators.required)
    });
      
    submit(){
        console.log(this.form.value);
    }

    constructor() { }

    ngOnInit(): void { }
}
