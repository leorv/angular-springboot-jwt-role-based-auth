import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from './students/student.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'students-dashboard';
    studentDetails: any = [];

    constructor(private studentService: StudentService) {
        this.getStudentsDetails();
    }

    register(registerForm: NgForm) {
        this.studentService.registerStudent(registerForm.value).subscribe({
            next: (resp: any) => {
                console.log(resp);
                registerForm.reset();
                this.getStudentsDetails();
            },
            error: (error: any) => console.log(error)
        });
    }

    getStudentsDetails(){
        this.studentService.getStudents().subscribe({
            next: (resp) => {
                console.log(resp);
                this.studentDetails = resp;
            },
            error: (error) => {
                console.log(error);
            }
        })
    }

    deleteStudent(id: number){
        this.studentService.deleteStudent(id).subscribe({
            next: (resp) => {
                console.log(resp);
                this.getStudentsDetails();
            },
            error: (error) => {
                console.log(error);
            }
        });
    }
}
