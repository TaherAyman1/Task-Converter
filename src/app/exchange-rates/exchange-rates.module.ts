import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeRatesComponent } from './components/exchange-rates/exchange-rates.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ExchangeRatesRoutingModule } from './exchange-rates-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [ExchangeRatesComponent],
  imports: [
    CommonModule,
    ExchangeRatesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,

    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatAutocompleteModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    NgxMatSelectSearchModule,

    FlexLayoutModule
  ]
})
export class ExchangeRatesModule { }
