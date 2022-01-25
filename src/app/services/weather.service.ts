import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) { }

  getWeather(cityname:any){
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&appid=cbfd1869ac466ee017979b4b82cf4af5');
  }

}
