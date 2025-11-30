
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

    title = 'Ecommerce';
  

    hideNavbar = false;
    constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      const noNavbarRoutes = ['/login', '/register'];
      this.hideNavbar = noNavbarRoutes.includes(event.url);
    }
  });
  
}


}
