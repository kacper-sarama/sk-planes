import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { FlightsService } from "src/app/core/services/flights.service";
import { ActivatedRoute } from "@angular/router";
import { FlightFormComponent } from "../flight-form/flight-form.component";
import { tap } from "rxjs/operators";
import { Flight } from "src/app/models/flight.model";

@Component({
  selector: "app-edit-flight",
  templateUrl: "./edit-flight.component.html",
  styleUrls: ["./edit-flight.component.scss"]
})
export class EditFlightComponent implements OnInit, AfterViewInit {
  @ViewChild("flightForm", { static: true }) flightForm: FlightFormComponent;
  flight: Flight;

  constructor(private flightService: FlightsService, private route: ActivatedRoute) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadFlight();
  }

  private loadFlight() {
    const key = this.route.snapshot.params["key"];
    this.flightService
      .getFlight(key)
      .pipe(tap(flight => this.flightForm.setFlight(flight)))
      .subscribe(flight => (this.flight = flight));
  }
}
