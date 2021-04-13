import { AuthService } from 'src/app/auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  hide=true;
  constructor(private fb:FormBuilder,private router:Router,private route:ActivatedRoute) { }

  onSubmit():void{
    console.log(this.loginForm.value);
    this.router.navigate(['/home.html'])

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)]],
      password:['',[Validators.required]]
    })
  }

// }
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
// // import { AuthService } from '../../services/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   loginForm: FormGroup;

//   constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

//   ngOnInit() {
//     this.loginForm = this.formBuilder.group({
//       username: [''],
//       password: ['']
//     });
//   }

//   get f() { return this.loginForm.controls; }

//   login() {
//     this.authService.login(
//       {
//         username: this.f.username.value,
//         password: this.f.password.value
//       }
//     )
//     .subscribe(success => {
//       if (success) {
//         this.router.navigate(['/secret-random-number']);
//       }
//     });
//   }

// }
}
