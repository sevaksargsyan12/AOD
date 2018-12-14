import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CountrySuggestService {

  constructor(private httpClient: HttpClient) { }

  get(url) {

    return this.httpClient.get<any[]>(url);

  }
}
