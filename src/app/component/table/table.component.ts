import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  title: string = 'List of books';
  books = [
    {
      id: 1,
      name: 'Big Data For Dummies',
      shortDescription:
        'Big data management is one of the major challenges facing business and industry',
      price: '£19',
      category: 'Big Data',
    },
    {
      id: 2,
      name: 'Big Data ',
      shortDescription:
        "Bernard Marr's data strategy is a must-have guide to creating robust data strategy",
      price: '£12',
      category: 'Big Data',
    },
    {
      id: 3,
      name: 'Database Engineering ',
      shortDescription:
        'This book has been an evolving dream of ours for about five years.',
      price: '£22',
      category: 'Big Data',
    },
    {
      id: 4,
      name: 'Data-Intensive ',
      shortDescription:
        'The big ideas behind reliable, scalable, and maintanable systems.',
      price: '£15',
      category: 'Big Data',
    },
    {
      id: 5,
      name: 'Angular',
      shortDescription:
        'All you need to know to start creating your first Angular applications.',
      price: '£25',
      category: 'Front-End',
    },
    {
      id: 6,
      name: 'AWS CDK',
      shortDescription:
        'This book will take you from zero to mastery in less than 200 pages.',
      price: '£34',
      category: 'AWS',
    },
    {
      id: 7,
      name: 'Learning Angular ',
      shortDescription:
        "A must-have book for your bookshelf's front-end section!",
      price: '£12',
      category: 'Front-End',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
