import { Component, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StudentService } from './students/student.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    preserveWhitespaces: true
})
export class AppComponent {
    title = 'students-dashboard';
    studentDetails: any = [];

    studentToUpdate: any = {
        rollNumber: 0,
        name: "",
        address: "",
        percentage: 0
    }

    // teste
    // modalRef?: BsModalRef | null;
    // modalRef2?: BsModalRef;

    editModalRef?: BsModalRef | null;

    constructor(private studentService: StudentService,
        private modalService: BsModalService) {
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

    getStudentsDetails() {
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

    update(updateForm: NgForm) {
        this.studentToUpdate = updateForm.value;
        this.studentService.updateStudent(this.studentToUpdate).subscribe({
            next: (resp: any) => {
                console.log(resp);
                this.getStudentsDetails();
                this.editModalRef?.hide();
            },
            error: (error: any) => {
                console.log(error);
            }
        })
    }

    deleteStudent(id: number) {
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

    openEditModal(template: TemplateRef<any>, student: any){
        this.studentToUpdate = student;
        this.editModalRef = this.modalService.show(template);
    }
    closeEditModal(){
        if (!this.editModalRef){
            return;
        }
        this.editModalRef.hide();
        this.editModalRef = null;
    }

    // openModal(template: TemplateRef<any>) {
    //     this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-lg' });
    // }
    // openModal2(template: TemplateRef<any>) {
    //     this.modalRef2 = this.modalService.show(template, { id: 2, class: 'second' });
    // }
    // closeFirstModal() {
    //     if (!this.modalRef) {
    //         return;
    //     }

    //     this.modalRef.hide();
    //     this.modalRef = null;
    // }
    // closeModal(modalId?: number) {
    //     this.modalService.hide(modalId);
    // }

}
