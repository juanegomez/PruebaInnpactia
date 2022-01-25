import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { WeatherService } from './../../services/weather.service';

export interface WeatherData {
  ciudad: string;
  pais: string;
}

const ELEMENT_DATA: WeatherData[] = [];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  weather: any;
  weatherimage = '';


  displayedColumns: string[] = ['ciudad', 'pais'];
  dataSource = new MatTableDataSource<WeatherData>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private weatherService : WeatherService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }


  AccionesTabla(){
    this.dataSource = new MatTableDataSource<WeatherData>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  SubmitCiudad(nombreCiudad:any){
    if(nombreCiudad.value){
      this.getDataWeather(nombreCiudad.value);
      nombreCiudad.value = '';
    }else{
      alert("Por favor, Inserte un valor.");
    }
    nombreCiudad.focus();
  }

  BorrarDatos(){
    ELEMENT_DATA.splice(0,ELEMENT_DATA.length);
    this.AccionesTabla();
  }

  //Obtiene los datos de la API del clima
  getDataWeather(nombreCiudad:String ){
    this.weatherService.getWeather(nombreCiudad)
    .subscribe(
      res => {
      this.weather = res;
      console.log(res);
      const tempcelsius = parseFloat(this.weather.main.temp) - 273.15;
      const temp = tempcelsius.toFixed(1);
      console.log(temp);
      this.weather.main.temp = temp;

      //Enviar nombre ciudad y pais a la tabla
      ELEMENT_DATA.push({ciudad: this.weather.name, pais:this.weather.sys.country});
      this.AccionesTabla();

      //Cambio de imagen segun temperatura
      if(parseFloat(this.weather.main.temp) < 27){
        this.weatherimage = './../../../assets/snowflake.png';
      }else if(parseFloat(this.weather.main.temp) >= 27){
        this.weatherimage = './../../../assets/sunny.png';
      }

      },
      err => console.log(err)
    );
  }


  logOut(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
