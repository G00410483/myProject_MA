import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myWeather:any = "";
  myDay:any = "";
  myName:any = "";
  myAge:any = "";
  myLocation:any = "";

  constructor(private storage:Storage) {}

  async ionViewWillEnter(){
    await this.storage.create();
    this.myWeather = await this.storage.get('weather');
    this.myDay = await this.storage.get('day');
    this.myName = await this.storage.get('name');
    this.myAge = await this.storage.get('age');
    this.myLocation = await this.storage.get('location');


  }
    
}

  


