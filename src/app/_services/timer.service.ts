import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Injectable()
export class TimerService {
    private timer: Observable<number>;
    constructor() {
        const nowTime = new Date();
        const delay = (60 - nowTime.getSeconds())*1000;
        this.timer = timer(delay, 60000);
        // subscribe(x => x=Date.now());
    }
    getTimer():Observable<number> {
        return this.timer;
    }
}