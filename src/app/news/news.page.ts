import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Async methods to open user's browsers
  async getIndependent() {
    await Browser.open({ url: 'https://www.independent.ie/' });
  }
  async getRTE() {
    await Browser.open({ url: 'https://www.rte.ie/' });
  }
  async getExaminer() {
    await Browser.open({ url: 'https://www.irishexaminer.com/news/arid-41128993.html' });
  }

}
