# VaccineTracker

Pulls data from [MB Vaccine Dashboard](https://services.arcgis.com/mMUesHYPkXjaFGfS/arcgis/rest/services/mb_covid_vaccinations_daily_cumulative/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Vaccination_Date%20asc&resultOffset=0&resultRecordCount=32000&resultType=standard&cacheHint=true)

Deployed via GH-Pages to https://caffgeek.github.io/VaccineTracker/

##Publish steps
```
git checkout gh-pages
git merge master
MSYS2_ARG_CONV_EXCL=--base-href= ng build --output-path docs --base-href="/VaccineTracker/"
git add -A
git commit -m "publish"
git push
```