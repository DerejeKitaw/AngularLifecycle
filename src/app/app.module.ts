import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoggerService } from "app/services/logger.service";
import { PeekABooComponent } from './components/peek-a-boo/peek-a-boo.component';
import { SpyComponent } from './components/spy/spy.component';
import { OnChangesComponent } from './components/on-changes/on-changes.component';
import { DoCheckComponent } from './components/do-check/do-check.component';
import { AfterViewComponent } from './components/after-view/after-view.component';
import { AfterContentComponent } from './components/after-content/after-content.component';
import { CounterComponent } from './components/counter/counter.component';
import { PeekABooParentComponent } from './components/peek-a-boo-parent/peek-a-boo-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    PeekABooComponent,
    SpyComponent,
    OnChangesComponent,
    DoCheckComponent,
    AfterViewComponent,
    AfterContentComponent,
    CounterComponent,
    PeekABooParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
