import { OnInit } from '@angular/core';
import { LoggerService } from 'app/services/logger.service';

let nextId =1;
export class PeekABoo implements OnInit {

    // =============================================================================
    // class constructor
    // =============================================================================
    constructor(private logger: LoggerService) { 

    }

    // =============================================================================
    // implement OnInit's `ngOnInit` method
    // =============================================================================
    ngOnInit() { this.logIt(`OnInit`); }
    
    // =============================================================================
    // log message
    // =============================================================================
    logIt(msg: string) {
        this.logger.log(`#${nextId++} ${msg}`);
    }
}