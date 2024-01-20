import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaChartComponent } from './components/chart/area-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { InputTextModule } from 'primeng/inputtext';

import { InputSwitchModule } from 'primeng/inputswitch';
import { DividerModule } from 'primeng/divider';
import { QRCodeModule } from 'angularx-qrcode';
// import { QRCodeErrorCorrectionLevel } from "qrcode";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';
import { TicketSalesComponent } from './components/ticket-sales/ticket-sales.component';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    AppComponent,
    AreaChartComponent,
    TableComponent,
    TicketSalesComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    NgChartsModule,
    DropdownModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    InputSwitchModule,
    QRCodeModule,
    DividerModule,
    BrowserAnimationsModule,
    ButtonModule,
    TooltipModule,
    ClipboardModule,
    InputTextModule,
    FontAwesomeModule,
    PaginatorModule, 

  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
