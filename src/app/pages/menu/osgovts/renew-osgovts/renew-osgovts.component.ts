import {Component, ViewEncapsulation} from '@angular/core';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {InsuranceForm} from '../../../../core/models/insurance-form';
import {ApiService} from '../../../../core/services/api.service';

@Component({
  selector: 'app-renew-osgovts',
  templateUrl: './renew-osgovts.component.html',
  styleUrls: ['./renew-osgovts.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
  ],
  providers: [
    ApiService,
  ],
})
export class RenewOsgovtsComponent {

}
