import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { EnigmeService } from '../enigme.service'

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent implements OnInit {

  isEditing = false

  creationForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private enigmeService: EnigmeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    const idEnigme = +this.route.snapshot.paramMap.get('id')

    if (idEnigme) {
      this.isEditing = true
      this.enigmeService
        .getEnigme(idEnigme)
        .subscribe(annonce => this.creationForm.reset(annonce))
    }

    this.creationForm = this.formBuilder.group({
      titre: ['', [Validators.required]],
      enigme: ['', [Validators.required, Validators.minLength(10)]],
      reponse: ['', [Validators.required]],
      level: ['', [Validators.required]]
    })

  }

  get reponse() {
    return this.creationForm.get('reponse')
  }

  get titre() {
    return this.creationForm.get('titre')
  }

  get enigme() {
    return this.creationForm.get('enigme')
  }

  get level() {
    return this.creationForm.get('level')
  }

  validationForm() {
    if (this.creationForm.valid) {
      this.enigmeService
        .addEnigme(this.creationForm.value)
        .subscribe(result => this.router.navigateByUrl('/'))
    }
  }

}
