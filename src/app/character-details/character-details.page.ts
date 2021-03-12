import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

  character;

  constructor(private route: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.charactersService.getCharacter(id).subscribe(response => this.character = response);
  }

}
