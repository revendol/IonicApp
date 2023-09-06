import { Component, OnInit, ViewChild, HostListener, ElementRef, AfterViewInit,  } from '@angular/core';
import { IonicModule , LoadingController,NavController, AlertController} from '@ionic/angular';
import SignaturePad from 'signature_pad';
import { CommonModule } from '@angular/common';
import { ApiResult, SignatureService } from '../../services/signature.service';

@Component({
  selector: 'app-singnatureTab',
  templateUrl: 'singnatureTab.page.html',
  styleUrls: ['singnatureTab.page.scss'],
  standalone: true,
  imports: [IonicModule,  CommonModule],
})
export class singnatureTabPage implements AfterViewInit  {
  signaturePad: SignaturePad;
  @ViewChild('canvas') canvasEl : ElementRef;
  signatureImg: string ='';
  getJsonvalue: any;
  constructor(private alertController: AlertController, private signatureService: SignatureService, private loadingCtrl:LoadingController, private navController: NavController) { }

  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
  }

  startDrawing(event: Event) {
    console.log(event);
    // works in device not in browser

  }

  moved(event: Event) {
    // works in device not in browser
  }

  clearPad() {
    this.signaturePad.clear();
    this.signatureImg = '';
  }

  savePad() {
 
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
  }
  async uploadSignature() {

    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });

    if(this.signatureImg.length == 0) {
      this.errorAlert("Please Signature First");
    } else {
      await loading.present();
      this.signatureService.postSignatureDataMethod(this.signatureImg).subscribe(res => {
        loading.dismiss();
        if(!res.success) {
          this.errorAlert("Something Went Wrong");
        }
        this.getJsonvalue = res;
        console.log(this.getJsonvalue);
       
      })
    }
 
  }

  async errorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: message,
      message: '',
      buttons: ['OK'],
    });

    await alert.present();
  }
  //navigation
public openDetailsPage(): void {
  this.navController.navigateForward("/signatureData");
}
}
