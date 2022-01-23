import { Cards } from './../mock-portfolio';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  portfolio = Cards;

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      id: '',
      title: '',
      description: '',
      img: '',
    });
  }

  ngOnInit(): void {}

  removeItem(index: number) {
    this.portfolio.splice(index, 1);
  }

  addNew() {
    this.portfolio.push(this.formulario.value);
  }
}
