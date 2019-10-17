import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { FlightFormComponent } from "../flight-form/flight-form.component";

@Component({
  selector: "app-new-flight",
  templateUrl: "./new-flight.component.html",
  styleUrls: ["./new-flight.component.scss"]
})
export class NewFlightComponent {
  @ViewChild("flightForm", { static: true, read: ElementRef }) flightForm: FlightFormComponent;

  constructor(private dialogRef: MatDialogRef<NewFlightComponent>) {}
}
