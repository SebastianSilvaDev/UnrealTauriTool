import { Injectable } from '@angular/core';
import { open } from '@tauri-apps/api/dialog';
import { appDataDir } from '@tauri-apps/api/path'
import { exists } from '@tauri-apps/api/fs';

@Injectable({
  providedIn: 'root'
})
export class UnrealVersionService {
  
  private unrealVersions: string[] = []; 

  private currentUnrealVersionDirectory: string = "";

  constructor() { }

  getCurrentUnrealVersionDirectory(): string{
    return this.currentUnrealVersionDirectory;
  }

  setCurrentUnrealVersionDirectory(newUnrealDirectory: string) {
    this.currentUnrealVersionDirectory = newUnrealDirectory;
  }

  async selectUnrealDirectory(): Promise<string>{
    const select = await open({
      directory: true,
      multiple: false,
      defaultPath: await appDataDir()
    });

    if (select) {
      return select.toString();
    }
    return "";
  }

  async verifyUnrealDirectory(directory: String): Promise<boolean> {
    return await exists(directory + "\\Engine\\Binaries\\Win64\\");
  }

}
