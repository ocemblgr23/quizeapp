import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  questionsForm!: FormGroup;
  submitted = false;
  private url ="../assets/questions.json"
  mcq_questions:any=[]
  constructor(private fb:FormBuilder,private _http:HttpClient) {
    this.questionsForm = this.fb.group({
      questionId:["",Validators.required],
      answer:["",Validators.required]
    })
  }

  ngOnInit() {
    this._http.get(this.url).subscribe(data=>{
      this.mcq_questions = data;
    })
  }

  get questionFormControl() {
    return this.questionsForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.questionsForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.questionsForm.value);
    }
  }
}
