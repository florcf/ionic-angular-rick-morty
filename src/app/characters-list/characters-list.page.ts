import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.page.html',
  styleUrls: ['./characters-list.page.scss'],
})
export class CharactersListPage implements OnInit {

  characters: any[];

  constructor(private http: HttpClient, private charactersService: CharactersService) { }

  ngOnInit() {
    this.charactersService.getCharacters().subscribe(response => {
      this.characters = response.results;
    })
  }

  /*
  getCharacters() {
    this.http.get<any>('https://rickandmortyapi.com/api/character').subscribe(response => {
      this.characters = response.results;
    },
      error => console.log(error),
      () => console.log('Petición realizada.'))
  }
  */

}
