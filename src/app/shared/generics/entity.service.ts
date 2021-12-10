import { Entity } from './entity.model';
import { Observable, of, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { map, catchError, tap, mergeMap, take } from 'rxjs/operators';
import { Alert } from '../alert/alert.service';
import { AuthenticationService } from '../../Core/user/authentication.service';

/**
 * See https://angular.io/guide/http#requesting-data-from-a-server
 */


/**
 * Generic service class for communicating objects to/from services.
 * Serves generic CRUD operations.
 */
export abstract class EntityService<T extends Entity> {
  /**
   * Service constructor.
   */
   httpOptions = {
    observe: 'body',
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      Authorization: ''
    }
  };

  constructor(
    public readonly http: HttpClient,
    public readonly url: string,
    public readonly endpoint: string,
    private authenticationService: AuthenticationService
  ) {}

  /**
   * Get all items.
   *
   * @options options
   */
  public list(options?: any): Observable<T[] | null> {
    const endpoint = `${this.url}${this.endpoint}`;
    console.log(`list ${endpoint}`);
    this.authenticationService.currentUser$.subscribe((currentUser) => {
      this.httpOptions.headers.Authorization = 'Bearer ' + currentUser.token
    }) 
    return this.http
      .get<T[]>(endpoint, { ...options, ...this.httpOptions })
      .pipe(tap(console.log), catchError(this.handleError));
  }

  /**
   * Create the item at the service.
   *
   * @param item Item to be created.
   */
  public create(item: T, options?: any): Observable<T> {
    const endpoint = `${this.url}${this.endpoint}`;
    console.log(`create ${endpoint}`);
    this.authenticationService.currentUser$.subscribe((currentUser) => {
      this.httpOptions.headers.Authorization = 'Bearer ' + currentUser.token
    }) 
    return this.http
      .post<T>(endpoint, item, { ...options, ...this.httpOptions })
      .pipe(
        // tap(console.log),
        // map((response: any) => response.result),
        catchError(this.handleError)
      );
  }

  /**
   * Get a single item from the service.
   *
   * @param id ID of the item to get.
   */
  public read(id: number | string, options?: any): Observable<T> {
    const endpoint = `${this.url}${this.endpoint}/${id}`;
    console.log(`read ${endpoint}`);
    this.authenticationService.currentUser$.subscribe((currentUser) => {
      this.httpOptions.headers.Authorization = 'Bearer ' + currentUser.token
    }) 
    return this.http
      .get<T[]>(endpoint, { ...options, ...this.httpOptions })
      .pipe(catchError(this.handleError));
  }

  /**
   * Update (put) new info.
   *
   * @param item The new item.
   */
  public update(item: T, options?: any): Observable<T> {
    const endpoint = `${this.url}${this.endpoint}/${item._id}`;
    console.log(`update ${endpoint}`);
    this.authenticationService.currentUser$.subscribe((currentUser) => {
      this.httpOptions.headers.Authorization = 'Bearer ' + currentUser.token
    }) 
    return this.http.put(endpoint, item, { ...options, ...this.httpOptions }).pipe(
      // map((response: any) => response.result),
      catchError(this.handleError)
    );
  }

  /**
   * Delete an item at the service.
   *
   * @param id ID of item to be deleted.
   */
  public delete(id: string, options?: any): Observable<T> {
    const endpoint = `${this.url}${this.endpoint}/${id}`;
    console.log(`delete ${endpoint}`);
    this.authenticationService.currentUser$.subscribe((currentUser) => {
      this.httpOptions.headers.Authorization = 'Bearer ' + currentUser.token
    }) 
    return this.http.delete(endpoint, { ...options, ...this.httpOptions }).pipe(
      // map((response: any) => response.result),
      catchError(this.handleError)
    );
  }

  /**
   * Handle errors.
   */
  public handleError(error: HttpErrorResponse): Observable<any> {
    const errorResponse: Alert = {
      type: 'error',
      message: error.message,
    };

    console.log(errorResponse);
    // return an error observable with a user-facing error message
    return throwError(() => errorResponse);
  }
}
