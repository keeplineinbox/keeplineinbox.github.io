import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InsuranceForm } from '../models/eosgouz/osgovts/insuranceForm';
import { Telegram } from '@twa-dev/types';
import { ResponseResult } from '../models/responseResult';

declare global {
  interface Window {
    Telegram: Telegram;
  }
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  http = inject(HttpClient);
  private url = 'api/telegram';
  
  public getPolicyBySeriaAndNumberAndVehicleNumber(seria: string, number: string, govNumber: string): Observable<ResponseResult<InsuranceForm>> {
    const hash = window?.Telegram?.WebApp?.initData;

    const headers = new HttpHeaders().set('tg-hash', hash);

    const url = `${environment.agentApiUrl}/${this.url}/GetPolicyBySeriaAndNumberAndVehicleNumber/?seria=${seria}&number=${number}&vehicleNumber=${govNumber}`;
   
    return this.http.get<ResponseResult<InsuranceForm>>(url, { headers: headers });
    // const hash = window?.Telegram?.WebApp?.initData;
    // return this.http.get<InsuranceForm>(`${environment.apiUrl}/${this.url}/GetPolicyBySeriaAndNumberAndVehicleNumber/?seria=${seria}&number=${number}&vehicleNumber=${govNumber}`);
  }


  // public updateHero(hero: SuperHero): Observable<SuperHero[]> {
  //   return this.http.put<SuperHero[]>(
  //     `${environment.apiUrl}/${this.url}`,
  //     hero
  //   );
  // }

  // public createHero(hero: SuperHero): Observable<SuperHero[]> {
  //   return this.http.post<SuperHero[]>(
  //     `${environment.apiUrl}/${this.url}`,
  //     hero
  //   );
  // }

  // public deleteHero(hero: SuperHero): Observable<SuperHero[]> {
  //   return this.http.delete<SuperHero[]>(
  //     `${environment.apiUrl}/${this.url}/${hero.id}`
  //   );
  // }
}
