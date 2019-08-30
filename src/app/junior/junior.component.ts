import { Component, OnInit } from '@angular/core'
import { Enigme } from '../enigme'
import { EnigmeService } from '../enigme.service'

@Component({
  selector: 'app-junior',
  templateUrl: './junior.component.html',
  styleUrls: ['./junior.component.scss']
})
export class JuniorComponent implements OnInit {

  enigmes: Enigme[]

  constructor(private enigmeService: EnigmeService) { }

  ngOnInit() {
    this.enigmeService.getEnigmesByLevel('JUNIOR').subscribe(
      result => this.enigmes = result,
      error => console.error('Une erreur est survenue', error)
    )
  }

}
