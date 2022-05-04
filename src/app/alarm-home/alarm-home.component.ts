import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { TimerService } from '../_services/timer.service';
import { QuoteService } from '../_services/quote.service';

import { Alarm } from '../_services/alarm';
import { Quote } from '../_services/quote';
import { AlarmService } from '../_services/alarm.service';

@Component({
  selector: 'alarm-home',
  templateUrl: './alarm-home.component.html',
})
export class AlarmHomeComponent {
  public JSObject: ObjectConstructor;
  timenow: number = Date.now();
  alarms: Alarm[] = new Array<Alarm>();

  constructor(public alarmService: AlarmService ,timerService: TimerService) {
    timerService.getTimer().subscribe(() => { this.timenow = Date.now(); alarmService.checkAlarms()});
    alarmService.getAlarms().subscribe((x: Alarm[]) => { this.alarms = x });
  }
}
