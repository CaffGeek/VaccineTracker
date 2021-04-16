import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  @ViewChild(MatSort) sort: MatSort;

  url = "https://services.arcgis.com/mMUesHYPkXjaFGfS/arcgis/rest/services/mb_covid_vaccinations_daily_cumulative/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Vaccination_Date%20asc&resultOffset=0&resultRecordCount=32000&resultType=standard&cacheHint=true";
  dataSource = new MatTableDataSource<VaccineData>();
  displayedColumns : any[] = [
    'Vaccination_Date',
    'First_Doses',
    'Second_Doses',
    'Total_Doses',
    'Cumulative_First_Doses',
    'Cumulative_Second_Doses',
    'Cumulative_Total_Doses',
  ];
    
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor() {
    fetch(this.url)
      .then(response => response.json())
      .then(data => {
        let records = data
          .features
            .map(x => ({
              Vaccination_Date: new Date(x.attributes.Vaccination_Date),
              First_Doses: x.attributes.First_Doses,
              Second_Doses: x.attributes.Second_Doses,
              Total_Doses: x.attributes.Total_Doses,
              Cumulative_First_Doses: x.attributes.Cumulative_First_Doses,
              Cumulative_Second_Doses: x.attributes.Cumulative_Second_Doses,
              Cumulative_Total_Doses: x.attributes.Cumulative_Total_Doses,
            }));
          
        this.dataSource.data = records;
      });
  }
}

export interface VaccineData {
  Vaccination_Date: string;
  First_Doses: number;
  Second_Doses: number;
  Total_Doses: number;
  Cumulative_First_Doses: number;
  Cumulative_Second_Doses: number;
  Cumulative_Total_Doses: number;
}