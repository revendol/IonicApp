import { Component, OnInit } from '@angular/core';
import { IonicModule, LoadingController,NavController } from '@ionic/angular';

import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ApiResult, QrCodeService } from '../../services/qr-code.service';

@Component({
  selector: 'app-qrTab',
  templateUrl: 'qrTab.page.html',
  styleUrls: ['qrTab.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class qrTabPage implements OnInit {
  isSupported = false;
  barcodes: Barcode[] = [];

   getJsonvalue:ApiResult;

  constructor(private alertController: AlertController, private qrCodeService: QrCodeService, private loadingCtrl:LoadingController, private navController: NavController) { }

  ngOnInit() {

    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });

  }

  async loadApiData() {

    // const loading = await this.loadingCtrl.create({
    //   message:'Loading..',
    //   spinner:'bubbles',
    // });
    // await loading.present();
    // this.qrCodeService.getQrDataMethod().subscribe(res => {
    //   //loading.dismiss();
    
    //   this.getJsonvalue =  res;
    //   console.log( this.getJsonvalue);
    // }
   // )
  }

  postApiData(qrType:string, qrValue:string) {
    this.qrCodeService.postQrDataMethod(qrType,qrValue).subscribe(res => {
      console.log( res);
      this.loadApiData();
    })
  }

  async scan(): Promise<void> {

    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    this.barcodes = [];
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
    console.log(barcodes);
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }

//navigation
public openDetailsPage(): void {
  this.navController.navigateForward("/qrData");
}
}
