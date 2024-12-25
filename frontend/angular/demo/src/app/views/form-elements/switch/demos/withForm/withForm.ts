import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';

@Component({
    selector: 'demo-switch-with-form',
    templateUrl: 'withForm.html'
})

export class DemoSwitchWithFormComponent implements OnInit {
    form: UntypedFormGroup
    value = false;

    constructor(private formBuilder: UntypedFormBuilder) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            switch: [false]
        });
    }

    submit() {
        console.log(`Value: ${this.form.controls.switch.value}`);
    }
}