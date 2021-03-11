import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.page.html',
  styleUrls: ['./characters-list.page.scss'],
})
export class CharactersListPage implements OnInit {

  characters: [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character').subscribe(response => {
      this.characters = response.results;
    })
  }

}
