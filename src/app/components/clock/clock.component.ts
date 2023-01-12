import { formatDate } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {

  // Displayed date
  date: any;

  @Input() timezone : string | undefined = 'GMT +1';
  @Input() format24: Boolean | undefined= false;
  @Input() name: string | undefined = '';

  // User's time to add
  hoursAdd: number = 0;
  minutesAdd: number = 0;
  
  // Interval to display dinamically 
  interval: any 

  // Modes variables
  displayOptions : Boolean = false;
  modeCount : number = 0;
  ligthMode: Boolean = false;
  

  /**
   * Set an interval to display the current time, check it every second
   */
  ngOnInit(){
     this.interval = setInterval(() => {
      const currentDate = new Date();
      this.date = currentDate
    }, 1000); //ms
  }

  /**
   * Action when '+' is clicked. 
   * It will increase the hours or the minutes depending on the numbers of times it has been clicked.
   * 
   */
  onAdd():void{
    this.modeCount = this.modeCount + 1;

    if (this.modeCount == 1){
      this.hoursAdd  = this.hoursAdd + 1;
      this.restartInterval()
    } else if (this.modeCount == 2){
      this.minutesAdd  = this.minutesAdd + 1;
      this.restartInterval()
    } else { 
      this.displayOptions = false; // Disable '+' button
      this.modeCount = 0; // Restart count
    }
  }

  /**
   * Clears current interval and starts a new interval adding the hous and minutes
   */
  private restartInterval(){
    clearInterval(this.interval);
    
    this.interval = setInterval(() => { 
      const currentDate = new Date();
      currentDate.setHours(
        currentDate.getHours()+this.hoursAdd, 
        currentDate.getMinutes()+this.minutesAdd)
      this.date = currentDate;
    }, 1000);
  }

  /**
   * Action when button 'MODE' is clicked
   */
  onClickMode():void{
     if (this.modeCount == 0){ // Control it's the first time
       this.displayOptions = true; // Enable '+' button
     }
   }

   /**
    * Action when button 'LIGHT' is clicked
    * Updates the boolean ligth mode
    */
   onLight():void{
    this.ligthMode = !this.ligthMode;
  }

  /**
   * Action when button 'LIGHT' is clicked
   * Displays current date
   */
  onReset(): void{
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      const currentDate = new Date();
      this.date = currentDate;
    }, 1000);

    // Reset variables
    this.hoursAdd = 0;
    this.minutesAdd = 0;
  }

  /**
   * Action when button 'FORMAT is clicked
   * Updates the boolean format24 mode
   */
  onFormat():void{
    this.format24 = !this.format24;
  }
}
