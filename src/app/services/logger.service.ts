import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  // ===========================================================================
  // Empty array to store log
  // ===========================================================================
  logs: string[] = [];

  // ===========================================================================
  // Set previous message for comparision. If current message equals previous 
  // increase count
  // ===========================================================================
  prevMsg = '';
  prevMsgCount = 1;
  
  // ===========================================================================
  // log will take string of message to be loged
  // ===========================================================================
  log(msg: string)  {
    if (msg === this.prevMsg) {
      // ===========================================================================
      // Repeat message; update last log entry with count.
      // ===========================================================================
      this.logs[this.logs.length - 1] = msg + ` (${this.prevMsgCount += 1}x)`;
    } else {
      // ===========================================================================
      // New message; log it.
      // ===========================================================================
      this.prevMsg = msg;
      this.prevMsgCount = 1;
      // ===========================================================================
      // Add message to existing log
      // ===========================================================================
      this.logs.push(msg);
    }
  }
  
  clear() { this.logs.length = 0; }
  
  // ===========================================================================
  // schedules a view refresh to ensure display catches up
  // ===========================================================================
  tick() {  this.tick_then(() => { }); }
  tick_then(fn: () => any) { setTimeout(fn, 0); }
}
