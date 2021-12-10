import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { ModalConfirmYesNoComponent } from '../../shared/model/modal.confirm-yes-no.component';
import { ModalLeaveYesNoComponent } from '../../shared/model/modal.leave-yes-no.component';
import { AuthenticationService } from './authentication.service';

/**
 * Verifies that user is logged in before navigating to routes.
 *
 */
@Injectable()
export class LoggedInAuthGuard implements CanActivate, CanActivateChild {
  //
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  canActivate(): Observable<boolean> {
    console.log('canActivate LoggedIn');
    return this.authenticationService.currentUser$.pipe(
      map((user: User) => {
        if (user && user.token) {
          return true;
        } else {
          console.log('not logged in, reroute to /');
          this.router.navigate(['']);
          return false;
        }
      })
    );
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canActivateChild LoggedIn');
    return this.canActivate();
  }
}

@Injectable()
export class SaveEditedWorkGuard {
  constructor(private modalService: NgbModal) {}

  canDeactivate(): Promise<boolean> {
    return this.modalService
      .open(ModalLeaveYesNoComponent)
      .result.then((result) => true)
      .catch(() => false);
  }
}
