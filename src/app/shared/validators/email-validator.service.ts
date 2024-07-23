import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {

  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //   const email = control.value;
  //   console.log({ email });

  //   return of({
  //     emailTaken: true
  //   }).pipe(
  //     delay( 2000 ) // para ver el status pending del formulario
  //   );
  // }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    
    const httpCallObservable = new Observable<ValidationErrors | null>( (subscriber) => {
      console.log({ email });

      if( email === 'alberto@google.com' ) {
        subscriber.next({ emailTaken: true });
        subscriber.complete();
        // este return es opcional, ya que igual deja de emitir valores con el complete()
        // return;
      }
      subscriber.next(null);
      subscriber.complete();
    }).pipe(
      delay(5000)
    );

    return httpCallObservable;
  }
}