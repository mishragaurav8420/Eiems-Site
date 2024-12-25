import { Component } from '@angular/core';
import {
    UntypedFormBuilder,
    UntypedFormGroup,
    UntypedFormArray,
    UntypedFormControl,
    Validators
} from '@angular/forms';

@Component({
    selector: 'demo-checkbox-with-form',
    templateUrl: 'withForm.html'
})

export class DemoCheckboxWithFormComponent {
    form: UntypedFormGroup;
    showError = false
    Data: Array<any> = [
        { name: 'Apple', value: 'apple' },
        { name: 'Pear', value: 'pear' },
        { name: 'Orange', value: 'orange' }
    ];

    constructor(private fb: UntypedFormBuilder) {
        this.form = this.fb.group({
            checkArray: this.fb.array([], [Validators.required])
        })
    }

    onCheckboxChange(e) {
        const checkArray: UntypedFormArray = this.form.get('checkArray') as UntypedFormArray;
        if (e.checked) {
            checkArray.push(new UntypedFormControl(e.value));
        } else {
            let i: number = 0;
            checkArray.controls.forEach((item: UntypedFormControl) => {
                if (item.value == e.value) {
                checkArray.removeAt(i);
                    return;
                }
                i++;
            });
        }
    }

    submitForm() {
        console.log(this.form.controls.checkArray.value)
        if (this.form.controls['checkArray'].errors?.required) {
           this.showError = true
           return 
        }
    }
}