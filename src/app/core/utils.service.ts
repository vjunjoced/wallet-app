import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as jwtDecode from 'jwt-decode';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { ApiService } from './http/api.service';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private router: Router, private store: Store<AppState>, private apiService: ApiService) { }
}
