import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, LoadingController, NavController } from '@ionic/angular';
import { ApiResult, SignatureService } from '../../services/signature.service';
@Component({
  selector: 'app-signatureData',
  templateUrl: './signatureData.page.html',
  styleUrls: ['./signatureData.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ShowSignaturePage implements OnInit {
  getJsonvalue: any;
  constructor(private loadingCtrl: LoadingController, private signatureService: SignatureService, private navController: NavController) { }

  ngOnInit() {
    this.loadApiData();
  }
  async loadApiData() {

    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
    this.signatureService.getSignatureDataMethod().subscribe(res => {
      loading.dismiss();

      this.getJsonvalue = res;
      console.log(this.getJsonvalue);
    })
  }

  public goBack(): void {
    this.navController.navigateForward("");

  }

}
