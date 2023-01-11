import { formatDate } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {

  // Displayed date
  date: any;

  // User's time to add
  hoursAdd: number = 0;
  minutesAdd: number = 0;
  
  // Interval to display dinamically 
  interval: any 

  // Modes variables
  displayOptions : Boolean = false;
  modeCount : number = 0;
  ligthMode: Boolean = false;
  format24: Boolean = false;

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
    console.log("on add")
    this.modeCount = this.modeCount + 1;

    if (this.modeCount == 1){
      this.hoursAdd  = this.hoursAdd + 1;
    } else if (this.modeCount == 2){
      this.minutesAdd  = this.minutesAdd + 1;
    } else { 
      this.displayOptions = false; // Disable '+' button
      this.modeCount = 0; // Restart count
    }

    clearInterval(this.interval); // Clear current interval

    // Start a new interval adding the hous and minutes
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
    console.log("on mode")
     if (this.modeCount == 0){ // Control it's the first time
       this.displayOptions = true; // Enable '+' button
     }
   }

   /**
    * Action when button 'LIGHT' is clicked
    * Updates the boolean ligth mode
    */
   onLight():void{
    console.log("on light")
    this.ligthMode = !this.ligthMode;
  }

  /**
   * Action when button 'LIGHT' is clicked
   * Displays current date
   */
  onReset(): void{
    console.log("on reset")
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
    console.log("on format")
    this.format24 = !this.format24;
  }
}
