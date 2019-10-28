import { Component, OnInit } from "@angular/core";
import { FlightsService } from "../core/services/flights.service";
import { Flight } from "../models/flight.model";
import { Observable } from "rxjs";
import { NewFlightComponent } from "./new-flight/new-flight.component";
import { MatDialog } from "@angular/material";
import { DetailsComponent } from "./details/details.component";

@Component({
  selector: "app-flights",
  templateUrl: "./flights.component.html",
  styleUrls: ["./flights.component.scss"]
})
export class FlightsComponent {
  flights$: Observable<Flight[]> = this.flightService.getFlights();

  constructor(private flightService: FlightsService, private dialog: MatDialog) {}

  openNewFlightModal() {
    this.dialog.open(NewFlightComponent);
  }

  showDetails(flight) {
    this.dialog.open(DetailsComponent, { data: flight });
  }
}
