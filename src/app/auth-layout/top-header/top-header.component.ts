import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { Subscription } from 'rxjs';
import { selectUserSesion } from 'src/app/store/selectors/userSesion.selector';
import { User } from 'src/app/class/user';
import { ApiService } from 'src/app/core/http/api.service';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import { TranslateService } from '@ngx-translate/core';
import { SideBarMenuService } from '../side-bar-menu.service';
dayjs.extend(relativeTime);

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
})
export class TopHeaderComponent implements OnInit, OnDestroy {
  public infoUser: User;
  public listNotifications: Notification[] = [];
  public res: string = '';

  constructor(
    private store: Store<AppState>,
    private sideBarMenuService: SideBarMenuService
  ) { }

  private s1: Subscription;

  ngOnInit(): void {
    this.s1 = this.store.select(selectUserSesion).subscribe((user: User) => {
      if (user !== null) {
        this.infoUser = user;
      }
    });
  }

  ngOnDestroy(): void {
    this.s1.unsubscribe();
  }

  signOut() {
   
  }

  get getAvatar(): string {
    let img = this.infoUser.name[0];

    if (this.infoUser.surname) {
      img += this.infoUser.surname[0];
    }

    return img;
  }


  openSideBarMenu(): void {
    this.sideBarMenuService.open();
  }
}
