import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Component, Input } from '@angular/core';
import { LoggerService } from 'app/services/logger.service';
import { PeekABoo } from './peak-a-boo';

let nextId = 1;

@Component({
  selector: 'app-peek-a-boo',
  templateUrl: './peek-a-boo.component.html',
  styleUrls: ['./peek-a-boo.component.scss']
})

// =============================================================================
// Don't HAVE to mention the Lifecycle Hook interfaces
// unless we want typing and tool support.
// =============================================================================
export class PeekABooComponent implements
  OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {
  @Input() name: string;

  private verb = 'initialized';

  constructor(private logger: LoggerService) {
    let is = this.name ? 'is' : 'is not';
    this.logIt(`name ${is} known at construction`);
  }

  // =============================================================================
  // implement OnInit's `ngOnInit` method
  // =============================================================================
  ngOnInit() {
    this.logIt(`OnInit`);
  }

  // =============================================================================
  // only called for/if there is an @input variable set by parent.
  // =============================================================================
  ngOnChanges(changes: SimpleChanges) {
    let changesMsgs: string[] = [];
    for (let propName in changes) {
      if (propName === 'name') {
        let name = changes['name'].currentValue;
        changesMsgs.push(`name ${this.verb} to "${name}"`);
      } else {
        changesMsgs.push(propName + ' ' + this.verb);
      }
    }
    this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
    this.verb = 'changed'; // next time it will be a change
  }

  // =============================================================================
  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  // =============================================================================
  ngDoCheck() { this.logIt(`DoCheck`); }

  ngAfterContentInit() { this.logIt(`AfterContentInit`); }

  // =============================================================================
  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  // =============================================================================
  ngAfterContentChecked() { this.logIt(`AfterContentChecked`); }

  ngAfterViewInit() { this.logIt(`AfterViewInit`); }

  // =============================================================================
  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  // =============================================================================
  ngAfterViewChecked() { this.logIt(`AfterViewChecked`); }

  ngOnDestroy() { this.logIt(`OnDestroy`); }

  // =============================================================================
  // log message
  // =============================================================================
  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
}
