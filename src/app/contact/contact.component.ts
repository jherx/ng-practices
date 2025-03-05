import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contacForm!: FormGroup;
  minLength = 4

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.contacForm = this.initForm() 

  }
  // pathvalue permite devolver los datos desde un array 
  // setvalue permite devolver datos siempre y cuando se tenga todos los valores 

  send() {}

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required , Validators.minLength(this.minLength)]],
      checkAdult: ['', Validators.required],
      departament: [''],
      comment: ['', Validators.required],
    });
  }
}
