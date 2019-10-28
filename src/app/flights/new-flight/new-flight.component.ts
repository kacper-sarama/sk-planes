import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MatDialogRef, MatSnackBar } from "@angular/material";
import { FlightFormComponent } from "../flight-form/flight-form.component";
import { FlightsService } from "src/app/core/services/flights.service";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-new-flight",
  templateUrl: "./new-flight.component.html",
  styleUrls: ["./new-flight.component.scss"]
})
export class NewFlightComponent {
  // @ViewChild("flightForm", { static: true, read: FormGroup }) flightForm: FlightFormComponent;
  @ViewChild("flightForm", { static: true }) flightForm: FlightFormComponent;

  constructor(
    private dialogRef: MatDialogRef<NewFlightComponent>,
    private flightService: FlightsService,
    private toastService: MatSnackBar
  ) {}

  createFlight() {
    console.log(this.flightForm);
    this.flightService
      .addFlight(this.flightForm.form.value)
      .then(this.onCreatingSucces.bind(this), this.onCreatingFailuer.bind(this));
  }

  private onCreatingSucces() {
    this.dialogRef.close();
    this.toastService.open("Flight has been successfully created", "", { panelClass: "toast-success" });
  }

  private onCreatingFailuer(error) {
    this.toastService.open(error.message, "", { panelClass: "toast-error" });
  }
}
