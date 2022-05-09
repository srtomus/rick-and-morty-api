import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { NavController } from '@ionic/angular';

import { take } from 'rxjs/internal/operators/take';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public currentUrl: string;

  constructor(private navCtrl: NavController, private router: Router) {
    this.router.events.pipe(take(1)).subscribe(() => {
      this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
          this.currentUrl = evt.url;
        }
      });
    });
  }

  goTo(page) {
    this.navCtrl.navigateRoot(page, { animated: false });
  }
}
