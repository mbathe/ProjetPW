import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {FirstComponent} from './firstComponent/firstComponent.component';
import { ScreenComponent } from './screen/screen.component';
import { HighlightDirective } from './highlight.directive';
import { ListViewComponent } from './list-view/list-view.component';
import { ItemComponent } from './item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatTabsModule} from '@angular/material/tabs';
import{MatPaginatorModule} from '@angular/material/paginator'
import { CommunicationService } from './app.communication.service';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {HttpClientModule} from '@angular/common/http';
import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
const appRoutes: Routes = [
  { path: 'listView', component:ListViewComponent},
  { path: '', component:UtilisateurComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ScreenComponent,
    ListViewComponent,
    ItemComponent,
    HighlightDirective,
    UtilisateurComponent,
    AcceuilComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatPaginatorModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
