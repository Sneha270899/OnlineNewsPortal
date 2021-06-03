import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-form',
  templateUrl: './change-form.component.html',
  styleUrls: ['./change-form.component.css']
})
export class ChangeFormComponent implements OnInit {
 reactForm : FormGroup;
 isDisabled=true;
 
  constructor() { 
    this.reactForm=new FormGroup({
      email : new FormControl(null,[Validators.required]),
      code : new FormControl(null,[Validators.required]),
      password : new FormControl(null,[Validators.required]),
      cpassword : new FormControl(null,[Validators.required])
      });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.isDisabled=!this.isDisabled;
    // this.isDisabled=false;
    // console.log(this.reactForm);
  }

  get email(){
    return this.reactForm.get('email');
  }
}
