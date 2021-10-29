import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GestionRecette';

  userSub: any


  items!: MenuItem[];

  activeItem!: MenuItem;

  constructor(public authServ: AuthService,
    private router: Router,) {
    this.listMenu()


  }

  ngOnInit(): void {
   
    this.userSub = this.authServ.IsLog.subscribe(user => {
       this.listMenu()
      if (user) {
        this.items.push({ label: 'Deconnexion', icon: 'pi pi-sign-out', command: (click) => this.logout(), visible: true })
      }
      else {
        this.items.push({ label: 'Connexion', icon: 'pi pi-sign-in', routerLink: '/Login', visible: true })
      }
    });
  }



  private listMenu() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
      { label: 'List', icon: 'pi pi-list', routerLink: '/ListRecette' },
      { label: 'Catégorie', icon: 'pi pi-palette' },
      { label: 'User', icon: 'pi pi-user' },


    ];
    this.activeItem = this.items[0];
  }

  logout() {
    this.authServ.logout();
    this.router.navigateByUrl("/")

  }
}