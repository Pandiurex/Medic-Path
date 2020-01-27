import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class ProfileService {
  _urlIndividual = '';
  _urlEditar = '';
  _urlCambioImagen = '';
  _urlListadoExpediente = '';
  _urlIndividualExp = '';
  constructor(private _http: HttpClient) {
    this._urlIndividual = 'https://medicpath.herokuapp.com/usuarios/';
    // 'http://localhost:3000/usuarios/';
    this._urlEditar = 'https://medicpath.herokuapp.com/usuarios/update/';
    // 'http://localhost:3000/usuarios/update/';
    this._urlCambioImagen =
      'https://medicpath.herokuapp.com/usuarios/cambiarImagen/';
    // 'http://localhost:3000/usuarios/cambiarImagen/';
    this._urlListadoExpediente = 'https://medicpath.herokuapp.com/historial/';
    // 'http://localhost:3000/historial/'
    this._urlIndividualExp =
      'https://medicpath.herokuapp.com/historial/usuarioHist/';
    // 'http://localhost:3000/historial/usuarioHist/'
  }

  // getUser(id: any, token: any) {
  //   const headers = new HttpHeaders({
  //     Authorization: token,
  //     "Content-Type": "application/x-www-form-urlencoded",
  //     "X-Requested-With": "XMLHttpRequest"
  //   });
  //   console.log(headers);
  //   return this._http.get(this._urlIndividual + id, {
  //     headers,
  //     observe: "response"
  //   });
  // }

  // updateUser(id: any, valores: FormData, token: any) {
  //   const headers = new HttpHeaders({
  //     Authorization: token,
  //     "X-Requested-With": "XMLHttpRequest"
  //   });
  //   return this._http.put(this._urlEditar + id, valores, {
  //     headers,
  //     observe: "response"
  //   });
  // }

  // updateProfilePic(id: any, imagen: FormData) {
  //   return this._http.put(this._urlCambioImagen + id, imagen, {
  //     observe: "response"
  //   });
  // }

  historyList(user: any) {
    return this._http.get(this._urlListadoExpediente + user, {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
      observe: 'response'
    });
  }
  getUser(hash: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest'
    });
    console.log(headers);
    return this._http.get(this._urlIndividual + encodeURIComponent(hash), {
      headers,
      observe: 'response'
    });
  }

  updateUser(hash: any, valores: FormData, token: any) {
    const headers = new HttpHeaders({ 'X-Requested-With': 'XMLHttpRequest' });
    return this._http.put(this._urlEditar + encodeURIComponent(hash), valores, {
      headers,
      observe: 'response'
    });
  }

  updateProfilePic(hash: any, imagen: FormData) {
    return this._http.put(
      this._urlCambioImagen + encodeURIComponent(hash),
      imagen,
      {
        observe: 'response'
      }
    );
  }

  getHistory(id: any) {
    return this._http.get(this._urlIndividualExp + encodeURIComponent(id), {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
      observe: 'response'
    });
  }
}
