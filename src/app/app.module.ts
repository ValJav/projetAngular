import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { DemoMaterialModule } from './material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from '@angular/router'
import { CreationComponent } from './creation/creation.component'
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatIconModule, MatSelectModule } from '@angular/material'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { EnigmeComponent } from './enigme/enigme.component'
import { EnigmesComponent } from './enigmes/enigmes.component';
import { EasyComponent } from './easy/easy.component';
import { JuniorComponent } from './junior/junior.component';
import { MediumComponent } from './medium/medium.component';
import { HardComponent } from './hard/hard.component';
import { NightmareComponent } from './nightmare/nightmare.component';
import { FelicitationsComponent } from './felicitations/felicitations.component'

const routes: Routes = [
  {path: '', redirectTo: 'enigmes', pathMatch: 'full'},
  {path: 'enigmes', component: EnigmesComponent},
  {path: 'enigmes/junior', component: JuniorComponent},
  {path: 'enigmes/easy', component: EasyComponent},
  {path: 'enigmes/medium', component: MediumComponent},
  {path: 'enigmes/hard', component: HardComponent},
  {path: 'enigmes/nightmare', component: NightmareComponent},
  {path: 'creation', component: CreationComponent},
  {path: 'enigme/:id', component: EnigmeComponent},
  {path: 'felicitations', component: FelicitationsComponent},
  {path: '**', redirectTo: '/'},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreationComponent,
    EnigmeComponent,
    EnigmesComponent,
    EasyComponent,
    JuniorComponent,
    MediumComponent,
    HardComponent,
    NightmareComponent,
    FelicitationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DemoMaterialModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
