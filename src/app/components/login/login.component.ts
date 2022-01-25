import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = 'estdev';
  pass = 'Udec123';
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  Login(User:any,Password:any){
    if (this.user === User.value && this.pass === Password.value) {
      localStorage.setItem('isLogin' , "true");
      this.router.navigate(['home']);
    }else{
      alert("Usuario y/o contraseña erroneas.");
    }
  }

  isAuth():boolean{
    const login = localStorage.getItem('isLogin');
    if (!localStorage.getItem('isLogin') && login !== "true") {
      return false;
    }
    return true;
  }
}
