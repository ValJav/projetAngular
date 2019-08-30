import { Component, OnInit } from '@angular/core'
import { Enigme } from '../enigme'
import { EnigmeService } from '../enigme.service'
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms'
import { stringify } from 'querystring'

@Component({
  selector: 'app-enigme',
  templateUrl: './enigme.component.html',
  styleUrls: ['./enigme.component.scss']
})
export class EnigmeComponent implements OnInit {

  enigme: Enigme

  solutionForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private enigmeService: EnigmeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const enigmeId = +this.route.snapshot.paramMap.get('id')

    this.enigmeService.getEnigme(enigmeId).subscribe(
      result => {
        this.enigme = result
        this.solutionForm = this.formBuilder.group({
          solution: ['', [Validators.required, Validators.pattern(this.enigme.reponse)]],
        })
      },
      error => console.log('Une erreur est survenue', error)
    )


  }

  get solution() {
    return this.solutionForm.get('solution')
  }

  delEnigme() {
    this.enigmeService.delEnigme(this.enigme.id).subscribe(
    () => this.router.navigateByUrl('/')
    )
  }

  checkSolution() {
    if (this.solutionForm.valid) {
      this.router.navigateByUrl('/felicitations')
    }
  }

}
