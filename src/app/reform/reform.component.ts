import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reform',
  templateUrl: './reform.component.html',
  styleUrls: ['./reform.component.css']
})
export class ReformComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  reactForm=new FormGroup({
    firstname : new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
    lastname : new FormControl(null,[Validators.required]),
  });

  get firstname(){
    return this.reactForm.get('firstname');
  }

}
