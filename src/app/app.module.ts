
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxStlViewerModule } from 'ngx-stl-viewer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStlViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
