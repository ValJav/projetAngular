import { Component, OnInit } from '@angular/core'
import { Enigme } from '../enigme'
import { EnigmeService } from '../enigme.service'

@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.scss']
})
export class MediumComponent implements OnInit {

  enigmes: Enigme[]

  constructor(private enigmeService: EnigmeService) { }

  ngOnInit() {
    this.enigmeService.getEnigmesByLevel('MEDIUM').subscribe(
      result => this.enigmes = result,
      error => console.error('Une erreur est survenue', error)
    )
  }

}
