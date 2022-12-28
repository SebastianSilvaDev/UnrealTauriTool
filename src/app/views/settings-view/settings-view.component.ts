import { Component, OnInit } from '@angular/core';
import { open } from '@tauri-apps/api/dialog';
import { appDataDir } from '@tauri-apps/api/path'

@Component({
  selector: 'app-settings-view',
  templateUrl: './settings-view.component.html',
  styleUrls: ['./settings-view.component.css']
})
export class SettingsViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async getUnrealDir() {
    const select = await open({
      directory: true,
      multiple: false,
      defaultPath: await appDataDir()
    });

    if (select) {
      console.log(select);
    }
  }
}
