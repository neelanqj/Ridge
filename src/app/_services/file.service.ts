
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FileService {
    constructor(private http: HttpClient) { }
    upload(id, file){
        var formData = new FormData();
        formData.append('file',file);

        return this.http.post(`/api/files/saveFile/${id}`, formData);
           // .pipe(map(res=>res.json()));
    }

    getFiles(id) {
        return this.http.get(`/api/files/getAllFiles/${id}`);
           // .pipe(map(res => res.json()));
    }

}