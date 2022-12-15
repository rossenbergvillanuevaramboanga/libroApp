import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LibroListComponent } from './libro/libro-list/libro-list.component';
import { LibroCreateComponent } from './libro/libro-create/libro-create.component';
import { LibroDetailComponent } from './libro/libro-detail/libro-detail.component';
import { LibroDeleteComponent } from './libro/libro-delete/libro-delete.component';
import { LibroEditComponent } from './libro/libro-edit/libro-edit.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'libro/list', component: LibroListComponent },
  { path: 'libro/create', component: LibroCreateComponent },
  { path: 'libro/detail/:id', component: LibroDetailComponent },
  { path: 'libro/delete/:id', component: LibroDeleteComponent },
  { path: 'libro/edit/:id', component: LibroEditComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
