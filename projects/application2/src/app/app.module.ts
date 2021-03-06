import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
export class App2SharedModule{
  static forRoot() : ModuleWithProviders {
    return {
      ngModule : AppModule,
      providers : providers
    }
  }
}
