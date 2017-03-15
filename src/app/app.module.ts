import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux, DevToolsExtension} from '@angular-redux/store';
import { createStore } from 'redux';

import { rootReducer, IAppState, INITIAL_STATE } from 'store';
import { CounterActions } from './app.action';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,   // <-- new
  ],
  providers: [CounterActions],
  bootstrap: [AppComponent]
})
export class AppModule { 
   constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {

     const storeEnhancer = devTools.isEnabled() ? [ devTools.enhancer() ] : [];

    // Tell @angular-redux/store about our rootReducer and our initial state.
    // It will use this to create a redux store for us and wire up all the
    // events.
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [],
      storeEnhancer);

   }

}
