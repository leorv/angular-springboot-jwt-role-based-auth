import { Component } from '@angular/core';
import { StudentService } from './students/student.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'students-dashboard';

    constructor(private studentService: StudentService) {

    }

    register(registerForm: any) {
        console.log(registerForm.class);
        this.studentService.registerStudent(registerForm.value).subscribe({
            next: (resp: any) => {
                console.log(resp);
                registerForm.reset();
            },
            error: (error: any) => console.log(error)
        });
    }
}
