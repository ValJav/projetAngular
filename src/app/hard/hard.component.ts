import { Component, OnInit } from '@angular/core'
import { Enigme } from '../enigme'
import { EnigmeService } from '../enigme.service'

@Component({
  selector: 'app-hard',
  templateUrl: './hard.component.html',
  styleUrls: ['./hard.component.scss']
})
export class HardComponent implements OnInit {

  enigmes: Enigme[]

  constructor(private enigmeService: EnigmeService) { }

  ngOnInit() {
    this.enigmeService.getEnigmesByLevel('HARD').subscribe(
      result => this.enigmes = result,
      error => console.error('Une erreur est survenue', error)
    )
  }

}
