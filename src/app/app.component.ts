import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FileStatus, UploadService} from './upload.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  
  uploadProgress: Observable<FileStatus[]>;
  filenames: string[] = [];
  
  constructor(private uploadService: UploadService){
  }

  ngOnInit(){
    this.uploadProgress = this.uploadService.uploadProgress;
  }

  upload(files: FileList) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < files.length; i++) {
      this.filenames.push(files[i].name);
      console.log(`Uploading ${files[i].name} with size ${files[i].size} and type ${files[i].type}`);
      this.uploadService.uploadFile(files[i], files[i].name);
    }
  }
}
