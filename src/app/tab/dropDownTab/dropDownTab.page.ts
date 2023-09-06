import { Component } from '@angular/core';
import { IonicModule, LoadingController, NavController, AlertController } from '@ionic/angular';

import { ApiResult, DropdownService } from '../../services/dropdown.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dropDownTab',
  templateUrl: 'dropDownTab.page.html',
  styleUrls: ['dropDownTab.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class dropDownTabPage {
  constructor(private alertController: AlertController, private dropDownService: DropdownService, private loadingCtrl: LoadingController, private navController: NavController) { }
  currentData: string = '';
  getJsonvalue: ApiResult;


  compareWith(o1: any, o2: any) {
    return o1 && o2 ? o1 === o2 : o1 === o2;
  }

  handleChange(ev: any) {

    this.currentData = ev.target.value;

  }

  //get data from api
  async loadApiData(inputData: any) {

    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    if (inputData.length == 0) {
      this.errorAlert('Please Enter a Postcode');
    }
    else {
      await loading.present();
      //get address list
      this.dropDownService.postPostCodeMethod(inputData).subscribe(res => {
        loading.dismiss();
        this.getJsonvalue = res;
        if (res.success == false) {
          this.errorAlert('No Address Found in This Postcode');
        }

      }
      )
    }

  }
  //post data to api
  async postAddressDataMethod() {

    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });

    if (this.currentData.length == 0) {
      this.errorAlert('Please Select a Address');
    }
    else {
      await loading.present();
      //post data
      this.dropDownService.postAddressDataMethod(this.currentData).subscribe(res => {
        loading.dismiss();
      }
      )
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
    this.navController.navigateForward("/dropDownData");
  }
}
