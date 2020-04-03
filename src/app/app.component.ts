import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';
import {Store} from '@ngrx/store';
import * as AuthAction from './auth/store/auth.actions';
import * as formApp from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private loggingService: LoggingService, private store: Store<formApp.AppState>) {}
  ngOnInit() {
    this.store.dispatch(new AuthAction.AutoLogin());
    this.loggingService.printLog('Hello from AppComponent ngOnInIt');
  }
}
