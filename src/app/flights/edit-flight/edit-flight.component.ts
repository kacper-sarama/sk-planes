import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { FlightsService } from "src/app/core/services/flights.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FlightFormComponent } from "../flight-form/flight-form.component";
import { tap } from "rxjs/operators";
import { Flight } from "src/app/models/flight.model";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-edit-flight",
  templateUrl: "./edit-flight.component.html",
  styleUrls: ["./edit-flight.component.scss"]
})
export class EditFlightComponent implements OnInit, AfterViewInit {
  @ViewChild("flightForm", { static: true }) flightForm: FlightFormComponent;
  flight: Flight;

  constructor(
    private flightService: FlightsService,
    private route: ActivatedRoute,
    private toast: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadFlight();
  }

  removeFlight() {
    this.flightService
      .removeFlight(this.flight.key)
      .then(this.onRemoveSuccess.bind(this), this.onRemoveFailure.bind(this));
  }

  private onRemoveSuccess() {
    this.router.navigate(["/dashboard"]);
    this.toast.open("Flight has been successully removed", "", { panelClass: "toast-success" });
  }

  private onRemoveFailure(error) {
    this.toast.open(error.message, "", { panelClass: "toast-error" });
  }

  editFlight() {
    this.flightService
      .editFlight(this.flight.key, this.flightForm.form.value)
      .then(this.onEditSuccess.bind(this), this.onEditFailure.bind(this));
  }

  private onEditSuccess() {
    this.router.navigate(["/dashboard/flights"]);
    this.toast.open("Flight has been successully edited", "", { panelClass: "toast-success" });
  }

  private onEditFailure(error) {
    this.toast.open(error.message, "", { panelClass: "toast-error" });
  }

  private loadFlight() {
    const key = this.route.snapshot.params["key"];
    this.flightService
      .getFlight(key)
      .pipe(tap(flight => this.flightForm.setFlight(flight)))
      .subscribe(flight => (this.flight = flight));
  }
}
