import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'login works !!';
  userName: string;
  userPassword: string;
  
  varTime = new Observable(observer => {
    setInterval( () => {
      observer.next(new Date().toString() );
    } , 1000);
  });


constructor( private router: Router) {}
  userAuthenticate(){
      if (this.userName === 'admin' && this.userPassword === 'admin_123') {
      console.log(this.userName + '  authenticated');
      this.router.navigate(['/gallery']);
      } else {
          console.log('invalid user');
      }
  }
}
