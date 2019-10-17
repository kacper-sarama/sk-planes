import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { Crew } from "src/app/models/flight.model";

@Component({
  selector: "app-flight-form",
  templateUrl: "./flight-form.component.html",
  styleUrls: ["./flight-form.component.scss"]
})
export class FlightFormComponent implements OnInit {
  form: FormGroup;
  jobs = [
    { label: "Stewardess", value: "stewardess" },
    { label: "Senior Cabin Crew", value: "seniorCabinCrew" },
    { label: "Pilot", value: "pilot" },
    { label: "Co-Pilot", value: "co_pilot" },
    { label: "Mechanic", value: "mechanic" }
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  get crew() {
    return this.form.get("crew") as FormArray;
  }

  addCrewMember() {
    this.crew.push(this.buildCrewMember());
  }

  removeCrewMember(index: number) {
    this.crew.removeAt(index);
  }

  buildCrewMember() {
    return this.formBuilder.group({
      name: "",
      job: ""
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      origin: ["", { validators: [Validators.required] }],
      destination: ["", { validators: [Validators.required] }],
      departureTime: ["", { validators: [Validators.required] }],
      returnTime: ["", { validators: [Validators.required] }],
      code: ["SK", { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(7)] }],
      additionalInformation: "",
      withSKPlanesDiscount: false,
      crew: this.formBuilder.array([this.buildCrewMember()])
    });
  }
}
