import { Component , Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-infomartive-component',
  templateUrl: './infomartive-component.component.html',
  styleUrl: './infomartive-component.component.css'
})
export class InfomartiveComponentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<InfomartiveComponentComponent>
) {}


  closeDialog(): void {
    this.dialogRef.close();
  }
}
