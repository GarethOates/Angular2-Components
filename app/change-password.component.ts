import {Component} from 'angular2/core'
import {ControlGroup, FormBuilder, Validators} from 'angular2/common'

@Component({
    selector: 'change-password',
    templateUrl: 'app/change-password.component.html'
})
export class ChangePasswordComponent {
    
    form: ControlGroup;
    
    constructor(fb: FormBuilder) {
        
        this.form = fb.group({
            currentPassword: [],
            newPassword: [],
            confirmPassword: []
        })
    }
}