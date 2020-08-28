import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { AppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/class/user';
import { selectUserSesion } from 'src/app/store/selectors/userSesion.selector';
import swal from 'sweetalert2';
import { SideBarMenuService } from '../side-bar-menu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, OnDestroy {
  @Output() onShowAlert: EventEmitter<any> = new EventEmitter<any>();
  public infoUser: User;

  private s1: Subscription;

  constructor(private store: Store<AppState>, private sideBarMenuService: SideBarMenuService) {
    this.s1 = this.store.select(selectUserSesion).subscribe((user: User) => {
      if (user !== null) {
        this.infoUser = user;
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.s1.unsubscribe();
  }

  showAlert() {
    this.onShowAlert.emit();
  }

  close(): void {
    this.sideBarMenuService.close();
  }
}
