import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgIf} from '@angular/common';
import {FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CardModule} from 'primeng/card';
import {InsuranceForm} from '../../../../core/models/insurance-form';
import {ApiService} from '../../../../core/services/api.service';

@Component({
  selector: 'app-create-osgovts',
  templateUrl: './create-osgovts.component.html',
  styleUrls: ['./create-osgovts.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    CardModule,
    NgIf,
    ProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    RouterLink,
  ],
  providers: [
    ApiService,
  ],
})
export class CreateOsgovtsComponent {

}
