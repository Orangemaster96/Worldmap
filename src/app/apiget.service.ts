import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApigetService {

  constructor(private http: HttpClient) { }
  // fetch data from API 
  async getData(svgCountry: SVGPathElement): Promise<Observable<any>> {
    let api: string = 'https://api.worldbank.org/V2/country/'+svgCountry.id+'?format=json';
    return this.http.get(api)}}
 
