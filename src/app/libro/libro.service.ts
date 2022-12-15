import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Libro } from './libro';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LibroService {


  private LISTA_LIBRI: Libro[] = []

  private apiServer = 'http://localhost:8080/api/libro';  // URL to web api

  httpParams = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  //Simulazione di una chiamata HTTP 
  getAllLibri(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiServer).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  create(libroInput: Libro): Observable<Libro> {
    // this.LISTA_LIBRI.push({ ...libroInput, id: this.LISTA_LIBRI.slice(-1)[0].id! + 1 });
    // return of(libroInput);
    return this.http.post<Libro>(this.apiServer, JSON.stringify(libroInput), this.httpParams)
      .pipe(catchError(this.handleError));
  }

  findById(idLibroInput: number): Observable<Libro | undefined> {
    //return of(this.LISTA_LIBRI.find(x => x.id == idLibroInput));
    return this.http.get<Libro>(this.apiServer + '/' + idLibroInput.toString()).pipe(
      catchError(this.handleError)
    );
  }

  delete(idLibro: number | undefined): Observable<boolean> {
    // this.LISTA_LIBRI.forEach((element, index) => {
    //   if (element.id == idLibro) this.LISTA_LIBRI.splice(index, 1);
    // })
    // return of(true);
    return this.http.delete<boolean>(this.apiServer + '/' + idLibro?.toString(), this.httpParams).pipe(
      catchError(this.handleError)
    );
  }

  update(libroInput: Libro): Observable<Libro | undefined> {
    // this.LISTA_LIBRI.forEach((element, index) => {
    //   if (element.id == libroInput?.id) this.LISTA_LIBRI[index] = libroInput;
    // })
    // return of(true);
    return this.http.put<Libro>(this.apiServer + '/' + libroInput.id?.toString(), libroInput, this.httpParams).pipe(
      catchError(this.handleError)
    );
  }

  //Gestione degli errori
  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      err.error?.errors?.forEach((element: { message: string; }) => {
        errorMessage += element.message;
      });
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


}
