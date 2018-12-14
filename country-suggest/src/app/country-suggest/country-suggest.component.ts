import { Component, OnInit, Input } from '@angular/core';

import { CountrySuggestService } from './country-suggest.service';

@Component({
  selector: 'app-country-suggest',
  templateUrl: './country-suggest.component.html',
  styleUrls: ['./country-suggest.component.css']
})
export class CountrySuggestComponent implements OnInit {

  countries: any[];

  @Input() api: string;
  @Input() flagField: string;
  @Input() nameField: string;

  constructor(
    private countrySuggestService: CountrySuggestService,
  ) { }

  ngOnInit() {

  }

  search(text) {
    this.countrySuggestService.get(this.api + text).subscribe((data: any[]) => {
      this.countries = data.map((country) => {
       return {
         flag: country[this.flagField],
         name: country[this.nameField] || '',
       };
      });
    });
  }

}
