import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fg!: FormGroup;
  private readonly TOKEN_KEY = "TOKEN"
  constructor(
    private fb: FormBuilder,
    private authServ: AuthService,
    private router: Router
  ) { 

   
  }

  ngOnInit(): void {
    this.fg = this.fb.group({
      speudo: [null, [Validators.required, Validators.maxLength(50)]],
      mdp: [null, [Validators.required]]
    });
  }

  login(){
    if(this.fg.valid){
      this.authServ.login(this.fg.value)
      .subscribe(()=>{
        this.router.navigateByUrl('/')
      },error =>{
        console.error(error)
      })
    
    }
  }

}
