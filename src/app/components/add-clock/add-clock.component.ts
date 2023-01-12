import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IClock } from 'src/app/models/IClock';
import { ITimezone } from 'src/app/models/ITimezone';
import { TimezoneService } from 'src/app/services/timezone.service';

@Component({
  selector: 'app-add-clock',
  templateUrl: './add-clock.component.html',
  styleUrls: ['./add-clock.component.css']
})
export class AddClockComponent {

  // Input information from clocks (length of the current array)
  // It will be the new clock id
  @Input() nextClockId!: number;

  // Output information. It will emit the IClock that have to be uploaded
  @Output() newClock = new EventEmitter<IClock>();

  // Timezones values
  timezones: ITimezone[] = [];

  // Form values
  selectedTimezone: string = '';
  clockName: string = '';
  format24: boolean = true;
  checked: boolean = false;

  constructor(
    private timezoneService: TimezoneService){
  }

  /**
   * Calls the serive to upload the possible timezones values
   */
  ngOnInit(): void{
    this.timezones = this.timezoneService.getTimezones();
  }

  /**
   * Action when button 'SAVE' is clicked.
   */
  onSave():void{
    // Create a new clock with the entered user values 
    var newClockData : IClock = {
      id: this.nextClockId,
      name: this.clockName,
      timezone : this.selectedTimezone,
      format24 : this.format24
    }
    // Emit the value (to clock component)
    this.newClock.emit(newClockData);
  }

}
