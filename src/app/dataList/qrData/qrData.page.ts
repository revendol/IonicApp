import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, LoadingController, NavController } from '@ionic/angular';
import { ApiResult, QrCodeService } from '../../services/qr-code.service';
@Component({
  selector: 'app-qrData',
  templateUrl: './qrData.page.html',
  styleUrls: ['./qrData.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ShowQRPage implements OnInit {
  getJsonvalue: any;
  constructor(private loadingCtrl: LoadingController, private qrCodeService: QrCodeService, private navController: NavController) { }

  ngOnInit() {
    this.loadApiData();
  }
  async loadApiData() {

    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
    this.qrCodeService.getQrDataMethod().subscribe(res => {
      loading.dismiss();

      this.getJsonvalue = res;
      console.log(this.getJsonvalue);
    })
  }

  public goBack(): void {
    this.navController.navigateForward("");
  
  }
}
