import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';
import { first } from 'rxjs/operators';
import {FormGroup, FormControl, Validators, FormsModule,FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
 signupForm:FormGroup;
  constructor(private userService: UserService,private formBuilder: FormBuilder) { 

  }

  ngOnInit(): void {
  	this.signupForm = this.formBuilder.group({
        email: ["", Validators.required],
        name: ["", Validators.required],
       
      });
  }
  onSignupSubmit(){
  	console.log("signup called");
  	 this.userService.saveUser(this.signupForm.value)
        .pipe(first())
        .subscribe(
            data => {
             console.log("saved");
            },
            error => {
            	console.log("error")
            });
  }
}
