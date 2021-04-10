import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder,private messageservice:MessageService){//messageservice dependency injection 
   this.createForm();
 }
  createForm() {
   this.angForm = this.fb.group({//angForm is the formgroup name given in html form tag
      name: ['', Validators.required ],//formControlNames name and email
      email: ['', Validators.required ],
   });
 }

  getMessage()
  {
    return this.messageservice.messages;//from MessageService component,message.service.ts
  }
  reset()
  {
 this.messageservice.clear()

 this.messageservice.addMessage('Just cleared the message')
 console.log('Cleared all the messages')
  }
  done()
  {
this.messageservice.addMessage('Submitted successfully')
  }
  ngOnInit(): void {
    // this.messageservice.addMessage('Welcome to Home Page');
  }

}
