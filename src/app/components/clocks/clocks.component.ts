import { Component } from '@angular/core';
import { IClock } from 'src/app/models/IClock';

@Component({
  selector: 'app-clocks',
  templateUrl: './clocks.component.html',
  styleUrls: ['./clocks.component.css']
})

export class ClocksComponent {

  // Array of clocks
  multipleClocks: IClock[] = [];

  // Number of clocks. Will be send to the add-clock component.
  numberClocks: number = 0;

  // Boolean to show or not the pop-up for adding a new clock
  displayNew : Boolean = false;

  ngOnInit(): void {
    // Add the first clock
    const IClock : IClock = {
      id: 0,
      name: "My first clock"
    }

    // Add the clock to the array
    this.multipleClocks.push(IClock);
  };

  /**
   * Action when button 'NEW CLOCK' is clicked.
   * Opens the dialog for configuring a new clock.
   */
  onNewClock():void{
    this.displayNew = true;
  }

  /**
   * Action triggered on clicking save on the add-clock dialog.
   * Adds the new clock to the array
   * Closes the dialog for configuring a new clock
   * @param newClock Obtained values for the clock from the user
   */
  onSaveNewClock(newClock: IClock):void{
    this.multipleClocks.push(newClock);
    this.displayNew = false;
  }

}
