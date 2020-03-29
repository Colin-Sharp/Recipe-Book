import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from 'src/components/shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit, OnDestroy{
  collapse = false;
  private userSub: Subscription;
  isAuthenticated = false
  constructor(private dataStroageService: DataStorageService, private authService: AuthService){}

  ngOnInit(){
   this.userSub = this.authService.user.subscribe(user => {
    this.isAuthenticated = !!user;
   });
  }

  onSaveData(){
    this.dataStroageService.storeRecipes();
  }
  onFeatchData(){
    this.dataStroageService.fetchRecipes().subscribe();
  }
  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
  onToggle(){
    this.collapse ? this.collapse = false : this.collapse = true;
  }
}