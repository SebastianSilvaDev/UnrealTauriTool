import { Component, OnInit } from '@angular/core';
import { UnrealVersionService } from 'src/app/services/unreal-version.service';

@Component({
  selector: 'app-settings-view',
  templateUrl: './settings-view.component.html',
  styleUrls: ['./settings-view.component.css']
})
export class SettingsViewComponent implements OnInit {

  constructor(
    private unrealVersionService: UnrealVersionService
  ) { }

  ngOnInit(): void {
    this.UnrealDir = this.unrealVersionService.getCurrentUnrealVersionDirectory();
  }

  async getUnrealDir() {
    this.unrealVersionService.setCurrentUnrealVersionDirectory(await this.unrealVersionService.selectUnrealDirectory());
    this.UnrealDir = this.unrealVersionService.getCurrentUnrealVersionDirectory();
  }

  async verifyUnrealDir() {
    let isValidDirectoryForUnreal: boolean = await this.unrealVersionService.verifyUnrealDirectory(this.UnrealDir);
    if (isValidDirectoryForUnreal) {
      return console.log("Valid Location");
    }
    console.error("No Valid Directory for Unreal Engine")
  }

  UnrealDir: string = "";
}
