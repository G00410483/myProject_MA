import { Component } from '@angular/core';
import { MovieService } from '../Service/movie.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.page.html',
  styleUrls: ['movies.page.scss'],
})
export class MoviesPage {

  // Array of movies
  myMovies: any[] = [];
  searchTerm: string = "";

  constructor(private service: MovieService) { }

  // Triggers when the page is opened
  search() {
    this.service.GetMovieData(this.searchTerm).subscribe(
      (data) => {
        this.myMovies = data.Search;
      }
    );

  }
}
