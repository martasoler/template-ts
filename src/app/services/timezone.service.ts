import { Injectable } from '@angular/core';
import { TIMEZONES } from '../loaded-timezones';
import { ITimezone } from '../models/ITimezone';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {

  constructor() { }

  /**
   * Could be a request to the back to get the values.
   * For now it loads the defined values.
   * @returns ITimezoneList of the possible timezones
   */
  getTimezones():ITimezone[]{
    return TIMEZONES;
  }
}
