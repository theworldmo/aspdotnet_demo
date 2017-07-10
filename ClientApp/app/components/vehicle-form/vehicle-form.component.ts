import { Component, OnInit } from '@angular/core';

import { VehicleService } from './../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  makes: any[];
  models: any[];
  features: any[];
  vehicle: any = {
    features: [],
    contact: {}
  };

  constructor(
    private vehicleService: VehicleService) {
  }

  ngOnInit() {
    this.vehicleService.getMakes().subscribe(
      makes => this.makes = makes);
    this.vehicleService.getFeatures().subscribe(
      features => this.features = features);
  }

  onMakeChange() {
    var selectedMake = this.makes.find(m => m.id == this.vehicle.makeId);
    this.models = selectedMake ? selectedMake.models : [];
    delete this.vehicle.modelId;
  }

  onModelChange() { }

  submit() {
    this.vehicleService.create(this.vehicle).subscribe(x => console.log(x));
  }
}
