import { Component, OnInit } from '@angular/core'
import { Enigme } from '../enigme'
import { EnigmeService } from '../enigme.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-enigmes',
  templateUrl: './enigmes.component.html',
  styleUrls: ['./enigmes.component.scss']
})
export class EnigmesComponent implements OnInit {

  enigmes: Enigme[]

  constructor(private enigmeService: EnigmeService) { }

  ngOnInit() {
    this.enigmeService.getEnigmes().subscribe(
      result => this.enigmes = result,
      error => console.error('Une erreur est survenue', error)
    )
  }

}
