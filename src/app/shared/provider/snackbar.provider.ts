import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarProvider {
  constructor(private snackBar: MatSnackBar) {
  }

  public showSnackErro(msg: any) {
    this.showSnackBar(msg, 'snack-erro');
  }

  public showSnackSuccess(msg: any) {
    this.showSnackBar(msg, 'snack-sucesso');
  }

  private showSnackBar(msg: any, type: any) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: type,  // 'snack-sucesso', // 'snack-erro', 'snack-info',
      duration: 3215000,
      data: {
        text: msg
      }
    });
  }
}
