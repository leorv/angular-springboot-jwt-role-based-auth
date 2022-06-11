import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    API: string = 'http://localhost:9090';

    constructor(private http: HttpClient) { }

    public registerStudent(studentData: any) {
        return this.http.post(this.API.concat('/registerStudent'),studentData);
    }
}
