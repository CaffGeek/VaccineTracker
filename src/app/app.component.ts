import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  url = "https://services.arcgis.com/mMUesHYPkXjaFGfS/arcgis/rest/services/mb_covid_vaccinations_daily_cumulative/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Vaccination_Date%20asc&resultOffset=0&resultRecordCount=32000&resultType=standard&cacheHint=true";
  data: any;

  ngOnInit(): void {
    fetch(this.url)
      .then(response => response.json())
      .then(data => this.data = data
          .features
            .sort((a,b) => (a.attributes.Vaccination_Date > b.attributes.Vaccination_Date) ? -1 : 1)
            .map(x => ({
              Vaccination_Date: new Date(x.attributes.Vaccination_Date).toDateString(),
              First_Doses: x.attributes.First_Doses,
              Second_Doses: x.attributes.Second_Doses,
              Total_Doses: x.attributes.Total_Doses,
              Cumulative_First_Doses: x.attributes.Cumulative_First_Doses,
              Cumulative_Second_Doses: x.attributes.Cumulative_Second_Doses,
              Cumulative_Total_Doses: x.attributes.Cumulative_Total_Doses,
            }))
      );
  }
}
