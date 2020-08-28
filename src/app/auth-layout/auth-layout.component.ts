import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { Subscription } from 'rxjs';
import { User } from '../class/user';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SideBarMenuService } from './side-bar-menu.service';
import { selectUserSesion } from '../store/selectors/userSesion.selector';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  public dataUser: User;

  public sideBarCss = '';
  public sideBarMenuIsOpen = false;
  public showSidebarStatsMobile = false;
  public initCurrencyCode = null;

  private s2: Subscription;
  private s3: Subscription;
  private s4: Subscription;
  private s5: Subscription;

  constructor( private store: Store<AppState>,  private breakpointObserver: BreakpointObserver, private sideBarMenuService: SideBarMenuService) {

    this.s2 = this.store.select(selectUserSesion).subscribe((user: User) => {
      if (user !== null) {
        this.dataUser = user;

        if(this.initCurrencyCode !== this.dataUser.currencyCode) {
          this.initCurrencyCode = this.dataUser.currencyCode;
        }
      }
    });

    this.s3 = breakpointObserver.observe(['(max-width: 767px)', '(max-width: 991px)']).subscribe((result) => {
      const body = document.getElementsByTagName('body')[0];

      if (result.breakpoints['(max-width: 767px)']) {
        body.classList.add('as-mobile');
      } else {
        body.classList.remove('as-mobile');
      }

      if (result.breakpoints['(max-width: 991px)']) {
        this.sideBarCss = 'nk-sidebar-mobile';
      } else {
        this.sideBarCss = '';
      }
    });

    this.s4 = this.sideBarMenuService.onOpen.subscribe((_) => {
      this.sideBarMenuIsOpen = true;
    });

    this.s5 = this.sideBarMenuService.onClose.subscribe((_) => {
      this.sideBarMenuIsOpen = false;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.s2.unsubscribe();
    this.s3.unsubscribe();
    this.s4.unsubscribe();
    this.s5.unsubscribe();
  }

  get getAvatar(): string {
    return 'JV';
  }

  closeSideBarMenu(): void {
    this.sideBarMenuService.close();
  }
}
