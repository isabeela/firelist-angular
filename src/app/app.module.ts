import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthService } from './auth.service';

import { FirelistComponent } from './firelist/firelist.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: IndexComponent },
      { path: 'firelist', component: FirelistComponent },
    ]),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBwPl3lfpzet1oqx8f3em_ghcJtxwbyIjc',
      authDomain: 'angularlist-d53cd.firebaseapp.com',
      projectId: 'angularlist-d53cd',
      storageBucket: 'angularlist-d53cd.appspot.com',
      messagingSenderId: '39091109327',
      appId: '1:39091109327:web:dd6ed6bf065683f0ea26ba',
    }),
    AngularFireAuthModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    FirelistComponent,
    IndexComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AuthService],
})
export class AppModule {}
