import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CdkTableExporterModule } from 'cdk-table-exporter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent extends CdkTableExporterModule {
  @ViewChild(MatSort) sort: MatSort;

  url = "https://services.arcgis.com/mMUesHYPkXjaFGfS/arcgis/rest/services/mb_covid_vaccinations_daily_cumulative_02/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Vaccination_Date%20asc&resultOffset=0&resultRecordCount=32000&resultType=standard&cacheHint=true";
  dataSource = new MatTableDataSource<VaccineData>();
  displayedColumns : any[] = [
    'Vaccination_Date',
    'First_Doses',
    'Second_Doses',
    'Third_Doses',
    'Total_Doses',
    'Cumulative_First_Doses',
    'Cumulative_Second_Doses',
    'Cumulative_Third_Doses',
    'Cumulative_Total_Doses',
  ];
    
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor() {
    super();
    
    fetch(this.url)
      .then(response => response.json())
      .then(data => {
        let records = data
          .features
            .map((x, ix, arr) => ({
              Vaccination_Date: new Date(x.attributes.Vaccination_Date),
              First_Doses: x.attributes.First_Doses || 0,
              Second_Doses: x.attributes.Second_Doses || 0,
              Third_Doses: x.attributes.Third_Doses || 0,
              Total_Doses: x.attributes.Total_Doses || 0,
              Cumulative_First_Doses: x.attributes.Cumulative_First_Doses || 0,
              Cumulative_Second_Doses: x.attributes.Cumulative_Second_Doses || 0,
              Cumulative_Third_Doses: x.attributes.Cumulative_Third_Doses || 0,
              Cumulative_Total_Doses: x.attributes.Cumulative_Total_Doses || 0,
            }));
          
        this.dataSource.data = records;
      });
  }
}

export interface VaccineData {
  Vaccination_Date: string;
  First_Doses: number;
  Second_Doses: number;
  Third_Doses: number;
  Total_Doses: number;
  Cumulative_First_Doses: number;
  Cumulative_Second_Doses: number;
  Cumulative_Third_Doses: number;
  Cumulative_Total_Doses: number;
}