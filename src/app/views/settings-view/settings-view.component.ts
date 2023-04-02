import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from 'src/app/dialogs/message-dialog/message-dialog.component';
import { UnrealVersionService } from 'src/app/services/unreal-version.service';

@Component({
  selector: 'app-settings-view',
  templateUrl: './settings-view.component.html',
  styleUrls: ['./settings-view.component.css']
})
export class SettingsViewComponent implements OnInit {

  constructor(
    private unrealVersionService: UnrealVersionService,
    public dialog: MatDialog
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
      this.dialog.open(MessageDialogComponent, { data: {title: "Unreal Path is Valid", message: "Congratulations! the path you submited is working fine"}});
      return;
    }
    let newDialog = this.dialog.open(MessageDialogComponent, { data: {title: "Failed to Verify", message: "No Valid Directory for Unreal Engine"}});
  }

  UnrealDir: string = "";
}
