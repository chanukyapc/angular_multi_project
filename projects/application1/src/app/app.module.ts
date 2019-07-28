import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { App1navComponent } from './app1nav/app1nav.component';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    App1navComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
const providers = []
@NgModule({})
export class App1SharedModule{
  static forRoot() : ModuleWithProviders {
    return {
      ngModule : AppModule,
      providers : providers
    }
  }
}
