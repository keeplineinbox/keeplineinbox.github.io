import { CommonModule } from '@angular/common';
import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {FormGroup, Validators, ReactiveFormsModule, FormControl} from '@angular/forms';
import {InsuranceForm} from 'src/app/core/models/insurance-form';
import {ApiService} from 'src/app/core/services/api.service';
import { StepperComponent } from 'src/app/shared/components/stepper/stepper.component';

@Component({
  selector: 'app-renew-osgovts',
  templateUrl: './renew-osgovts.component.html',
  styleUrls: ['./renew-osgovts.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    StepperComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    ApiService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenewOsgovtsComponent implements OnInit {
  steps: number[] = [1, 2, 3, 4];
  currentStep = 1;
  lastPage = false;
  form!: FormGroup;
  billingPeriod: 'monthly' | 'yearly' = 'monthly';
  arcadePlan = 9;
  advancedPlan = 12;
  proPlan = 15;
  onlineService = 1;
  storage = 2;
  customProfile = 2;
  total = 9;
  
  ngOnInit() {
    this.form = new FormGroup({
      // name: new FormControl(null, [
      //   Validators.required,
      //   Validators.minLength(2),
      //   Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
      // ]),
      // email: new FormControl(null, [Validators.required, Validators.email]),
      // phone: new FormControl(null, [
      //   Validators.required,
      //   Validators.pattern(
      //     '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'
      //   ),
      // ]),

      plan: new FormControl('arcadePlan'),

      billingPeriod: new FormControl(false),

      onlineService: new FormControl(null),
      storage: new FormControl(null),
      customProfile: new FormControl(null),
    });
  }

  changeBillingPeriod() {
    let isYearly = this.form.controls['billingPeriod'].value;
    if (isYearly) {
      this.billingPeriod = 'yearly';
      this.arcadePlan = 90;
      this.advancedPlan = 120;
      this.proPlan = 150;
      this.onlineService = 10;
      this.storage = 20;
      this.customProfile = 20;
    } else {
      this.billingPeriod = 'monthly';
      this.arcadePlan = 9;
      this.advancedPlan = 12;
      this.proPlan = 15;
      this.onlineService = 1;
      this.storage = 2;
      this.customProfile = 2;
    }
  }

  onSubmit() {
    this.lastPage = true;
    this.form.reset();
  }

  changePage(isNextPage: boolean) {
    console.log("changePage");
    // const addOns =
    //   (this.form.get('onlineService')?.value && this.onlineService) +
    //   (this.form.get('storage')?.value && this.storage) +
    //   (this.form.get('customProfile')?.value && this.customProfile);

    if (!isNextPage) {
      return this.currentStep--;
    } else {
      // if (this.currentStep === 3) {
      //   if (this.form.get('plan')?.value === 'arcadePlan') {
      //     this.total = this.arcadePlan + addOns;
      //   } else if (this.form.get('plan')?.value === 'advanced') {
      //     this.total = this.advancedPlan + addOns;
      //   } else {
      //     this.total = this.proPlan + addOns;
      //   }
      // }
      return this.currentStep++;
    }
  }
}
