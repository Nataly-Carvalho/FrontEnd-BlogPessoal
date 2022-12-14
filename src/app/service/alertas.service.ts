import { Injectable } from '@angular/core';
import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal'
import { AlertasComponent } from '../alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModalService: BsModalService
  ) {}

  private showAlert(msg: string, tipo:string){
    const bsModalRef: BsModalRef =this.bsModalService.show(AlertasComponent)
    bsModalRef.content.type = tipo
    bsModalRef.content.message = msg

  }

  showAlertDanger(msg:string){
  this.showAlert(msg, "danger")
  }

  showAlertSucess(msg:string){
    this.showAlert(msg, "success")

  }
  showAlertInfo(msg:string){
  this.showAlert(msg, "info")

  }
  
}
