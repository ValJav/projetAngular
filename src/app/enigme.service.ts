import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Enigme } from './enigme'

@Injectable({
  providedIn: 'root'
})
export class EnigmeService {

  backUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  public getEnigmes(): Observable<Enigme[]> {
    return this.http.get<Enigme[]>(this.backUrl + '/enigmes')
  }

  public getEnigmesByLevel(level: string): Observable<Enigme[]> {
    return this.http.get<Enigme[]>(this.backUrl + '/enigmes?level=' + level)
  }

  public getEnigme(id: number): Observable<Enigme> {
    return this.http.get<Enigme>(this.backUrl + '/enigmes/' + id)
  }

  public addEnigme(enigme: Enigme) {
    return this.http.post<Enigme>(this.backUrl + '/enigmes', enigme)
  }

  public delEnigme(id: number) {
    return this.http.delete(this.backUrl + '/enigmes/' + id)
  }

}
