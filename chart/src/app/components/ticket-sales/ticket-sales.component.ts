import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-sales',
  templateUrl: './ticket-sales.component.html',
  styleUrls: ['./ticket-sales.component.css']
})
export class TicketSalesComponent {
  value: string | undefined;
  checked: boolean = true;
}
