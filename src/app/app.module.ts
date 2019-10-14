import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { AppComponent } from "./app.component";
import { environment } from "src/environments/environment";
import { MaterialModule } from "./material/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";
import { FlightsModule } from "./flights/flights.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlightsService } from "./core/services/flights.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    MaterialModule,
    FlightsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule
  ],
  providers: [FlightsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
