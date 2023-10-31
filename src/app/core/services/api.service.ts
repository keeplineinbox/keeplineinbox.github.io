import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InsuranceForm } from '../models/insurance-form';
import { Telegram } from '@twa-dev/types';

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
  
  public getPolicyBySeriaAndNumberAndVehicleNumber(seria: string, number: string, govNumber: string): Observable<InsuranceForm> {
    const hash = window?.Telegram?.WebApp?.initData;

    const headers = new HttpHeaders()
      .set('tg-hash', hash);

      
    return this.http.get<InsuranceForm>(
      `${environment.apiUrl}/${this.url}/GetPolicyBySeriaAndNumberAndVehicleNumber/?seria=${seria}&number=${number}&vehicleNumber=${govNumber}`,
      { headers: headers }
    );
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
