import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  .container{
    margin: 15px;
  }
  `
  ]
})
export class HomeComponent {

  constructor( private router: Router ) { }

  logout(){
    //borrar sesion
    //localstorage
    this.router.navigate(['./auth'])
  }

}
