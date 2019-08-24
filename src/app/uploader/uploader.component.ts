import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { ProgressService, BrowserXhrWithProgress } from '../_services/progress.service';
import { BrowserXhr } from '@angular/http';
import { FileService } from '../_services/file.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css'],
  providers: [
    { provide: BrowserXhr, useClass: BrowserXhrWithProgress },
     ProgressService    
  ]
})
export class UploaderComponent implements OnInit {
  @ViewChild('fileInput', { static: true }) fileInput: ElementRef;
  files: any[] = [];
  progress: any;

  constructor(
    private alertify: AlertifyService
    , private progressService: ProgressService
    , private zone: NgZone
    , private fileService: FileService) { }

  ngOnInit() {
  }

  uploadPhoto(){
    var nativeElement: HTMLInputElement = this.fileInput.nativeElement;
    var file =nativeElement.files[0];
    nativeElement.value = '';

    this.progressService.startTracking()
      .subscribe(progress => {
          this.zone.run(()=>{
            this.progress=progress;
          });
        }, null, ()=> this.progress=null);

    this.fileService.upload(1, file)
      .subscribe(x=>{
        console.log(x);
      },
      err => {
        this.alertify.error("An error occured while trying to upload a file.");
      });
  }
}