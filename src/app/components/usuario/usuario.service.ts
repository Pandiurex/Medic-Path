import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class UsuarioService {
  _url: string = "";
  _urlIndividual: string = "";
  _urlDoctor: string = "";
  constructor(private _http: HttpClient) {
    this._url = "https://medicpath.herokuapp.com/usuarios/userlist/";
    //'http://localhost:3000/usuarios/userlist/';
    this._urlIndividual = "https://medicpath.herokuapp.com/usuarios/";
    //'http://localhost:3000/usuarios/'
    this._urlDoctor = "http://localhost:3000/usuarios/doctor/"

  }

  getUsers() {
    return this._http.get(this._url, {
      headers: new HttpHeaders().set(
        "Content-Type",
        "application/x-www-form-urlencoded"
      ),
      observe: "response"
    });
  }

  getUser(hash: any) {
    return this._http.get(this._urlIndividual + encodeURIComponent(hash), {
      headers: new HttpHeaders().set(
        "Content-Type",
        "application/x-www-form-urlencoded"
      ),
      observe: "response"
    });
  }

  getDoctorInfo(hash: any){
    return this._http.get(this._urlDoctor + encodeURIComponent(hash), {
      headers: new HttpHeaders().set(
        "Content-Type",
        "application/x-www-form-urlencoded"
      ),
      observe: "response"
    });
  }
}