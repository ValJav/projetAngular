import { Component, OnInit } from '@angular/core'
import { Enigme } from '../enigme'
import { EnigmeService } from '../enigme.service'

@Component({
  selector: 'app-easy',
  templateUrl: './easy.component.html',
  styleUrls: ['./easy.component.scss']
})
export class EasyComponent implements OnInit {

  enigmes: Enigme[]

  constructor(private enigmeService: EnigmeService) { }

  ngOnInit() {
    this.enigmeService.getEnigmesByLevel('EASY').subscribe(
      result => this.enigmes = result,
      error => console.error('Une erreur est survenue', error)
    )
  }

}
