import { Component, OnInit } from '@angular/core'
import { Enigme } from '../enigme'
import { EnigmeService } from '../enigme.service'

@Component({
  selector: 'app-nightmare',
  templateUrl: './nightmare.component.html',
  styleUrls: ['./nightmare.component.scss']
})
export class NightmareComponent implements OnInit {

  enigmes: Enigme[]

  constructor(private enigmeService: EnigmeService) { }

  ngOnInit() {
    this.enigmeService.getEnigmesByLevel('NIGHTMARE').subscribe(
      result => this.enigmes = result,
      error => console.error('Une erreur est survenue', error)
    )
  }

}
