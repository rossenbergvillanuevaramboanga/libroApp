import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { LibroListComponent } from './libro/libro-list/libro-list.component';
import { LibroCreateComponent } from './libro/libro-create/libro-create.component';
import { FormsModule } from '@angular/forms';
import { LibroDetailComponent } from './libro/libro-detail/libro-detail.component';
import { LibroDeleteComponent } from './libro/libro-delete/libro-delete.component';
import { LibroEditComponent } from './libro/libro-edit/libro-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    FooterComponent,
    LibroListComponent,
    LibroCreateComponent,
    LibroDetailComponent,
    LibroDeleteComponent,
    LibroEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
