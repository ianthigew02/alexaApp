import {Component, Input, Output, EventEmitter, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Alarm } from '../_services/alarm';
import { AlarmService } from '../_services//alarm.service';

let M =  window["M"];
@Component({
  selector: 'add-alarm',
  styleUrls: [],
  templateUrl: './add-alarm.component.html'
})
export class AddAlarm implements OnInit {
  
  private alarm: Alarm;
  private timeInput: any;
  private collapse: any;
  public weekdays: Object = Object.assign({}, Alarm.weekObj);
  public JSObject: ObjectConstructor;
  
  @ViewChild('alarmtext') alarmTextInput: ElementRef;
  @ViewChild('repeatcheckbox') repeatCheckBox: ElementRef;

  constructor(private alarmService: AlarmService){}

  ngOnInit(){
    var elem = document.querySelectorAll('.timepicker');
    this.timeInput = M.Timepicker.init(elem, {autoClose:true});
  }

  repeatchange(isChecked: string){
    if(!isChecked){
      this.weekdays = Object.assign({}, Alarm.weekObj);
      let daysNum = (new Date()).getDay();
      let todayDay = this.JSObject.keys(this.weekdays)[daysNum];
      this.weekdays[todayDay] = true;
    }
  }
  add() {
    const isrepeat = this.repeatCheckBox.nativeElement.checked;
    const alarmtext = this.alarmTextInput.nativeElement.value;
    let isDaySelected =  false;
    if(!isrepeat){
      for (let day in this.weekdays) {
        if(this.weekdays[day]) {
            isDaySelected = true;
            break;
        }
      }
    }
    else{
      this.weekdays = Object.assign({}, Alarm.weekObj);
    }
    if(!alarmtext || !this.timeInput.time || (!isrepeat && !isDaySelected)) {
      return false;
    }
    let hour12: number = this.timeInput.hours;
    let mins: number = Number.parseInt(this.timeInput.time.split(':')[1]);
    const ampm = this.timeInput.amOrPm;
    const alarmNew =  new Alarm(0, alarmtext, hour12, mins, ampm, isrepeat, this.weekdays);
    this.alarmService.addAlarm(alarmNew);
    this.collapse.close();
    this.weekdays = Object.assign({}, Alarm.weekObj);
    this.repeatCheckBox.nativeElement.checked = true;
    this.alarmTextInput.nativeElement.value ='';
    this.timeInput.el.value='';
    M.updateTextFields();
    return true;
  }
}
