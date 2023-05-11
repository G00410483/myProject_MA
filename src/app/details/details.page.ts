import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  myName: string = "";
  myAge: string = "";
  myLocation: string = "";

  constructor(private storage: Storage, private navCtrl: NavController) { }

  // Method triggered when save button is clicked
  async onSave() {
    // Create the storage instace
    await this.storage.create();
    // Save name, age and location in the storage
    await this.storage.set("name", this.myName);
    await this.storage.set("age", this.myAge);
    await this.storage.set("location", this.myLocation);
    // Navigate back to home page
    await this.navCtrl.navigateBack('/home');
  }
  ngOnInit() {
  }

}