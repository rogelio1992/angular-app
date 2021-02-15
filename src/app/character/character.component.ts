import { Component, OnInit } from '@angular/core';
import { Character } from '../shared/model/character';
import { CharactersService } from '../shared/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  result = [];
  constructor(private service: CharactersService) { }

  ngOnInit(): void {
    this.service.getCharacter().subscribe(data => {
      console.log(data);
      this.result = data.results;
    });


  }
  shareCharacter(character:string) {
    alert(`Your character ${character} is share `)
  }
}
