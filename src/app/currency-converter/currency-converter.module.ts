import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyConverterRoutingModule } from './currency-converter-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConversionDetailsComponent } from './components/conversion-details/conversion-details.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';





@NgModule({
  declarations: [CurrencyConverterComponent, ConversionDetailsComponent],
  imports: [
    CommonModule,
    CurrencyConverterRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatAutocompleteModule,
    MatIconModule,
    MatTableModule,

    FlexLayoutModule,
    SharedModule
  ]
})
export class CurrencyConverterModule { }
