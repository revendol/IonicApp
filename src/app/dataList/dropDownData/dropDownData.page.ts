import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, LoadingController, NavController } from '@ionic/angular';
import { ApiResult, DropdownService } from '../../services/dropdown.service';
@Component({
  selector: 'app-dropDownData',
  templateUrl: './dropDownData.page.html',
  styleUrls: ['./dropDownData.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ShowDropDownPage implements OnInit {
  getJsonvalue: any;
  constructor(private loadingCtrl: LoadingController, private dropDownService: DropdownService, private navController: NavController) { }

  ngOnInit() {
    this.loadApiData();
  }
  async loadApiData() {

    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
    this.dropDownService.getAddressDataMethod().subscribe(res => {
      loading.dismiss();

      this.getJsonvalue = res;
      console.log(this.getJsonvalue);
    })
  }
}
