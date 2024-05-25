import { Component, OnInit } from '@angular/core';
import { HousingService } from '../services/housing.service';
import { HousingLocation } from '../models/housinglocation';

@Component({
  templateUrl: './houses.component.html',
  styleUrl: './houses.component.css'
})
export class HousesComponent implements OnInit {
  public houses: HousingLocation[] | undefined;
  constructor(private housingService: HousingService) {

  }
    ngOnInit(): void {
      this.houses = this.housingService.getHouses();
    }

}
