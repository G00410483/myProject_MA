// Import modules and componenets
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../Service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})

export class WeatherPage implements OnInit {
  myWeather: string = "";// String that stores my wather data
  myDay: string = "";// String that stores my day data
  weather: any;// String that stores wather information

  constructor(private storage: Storage, private navCtrl: NavController, private http: HttpClient, private service: WeatherService) { }

  // Function to get weather data
  getWeather() {
    this.service.getWeather().subscribe(
      (data: any) => {
        this.weather = data;
      },
    );

  }
  // Saving data to storage
  async onSave() {
    await this.storage.create();
    await this.storage.set("weather", this.myWeather);
    await this.storage.set("day", this.myDay);
    await this.navCtrl.navigateBack('/home');// Navigate back to homepage
  }

  ngOnInit() {


  }


}
