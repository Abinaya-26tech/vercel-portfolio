import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects:Project[] = [
    {id: 0,name: "Angular web application for salesforecasting",summary: "This project is developed using Angular and Flask, combining the power of frontend and backend technologies to provide accurate sales predictions.",description: "The Sales Forecasting Application is designed to help businesses make informed decisions by predicting future sales trends based on historical data. Leveraging the Angular framework for the frontend and Flask, a Python-based web framework, for the backend, this application offers a user-friendly interface and robust functionality.", projectLink: "https://github.com/Abinaya-26tech",pictures: [],tags:[Tag.ANGULAR,Tag.TYPESCRIPT]},
    {id: 1,name: "Non invasive Glucose monitoring system",summary: "Non invasive glucose monitoring using breathe acetone with the help of AI",description: "In diabetic patients, excess ketones like acetone are produced leading to a metabolic state called ketosis The body shifts to burning stored fat instead of carbohydrates for energy. Using a gas sensor like MQ138, acetone concentration in breath is analyzed providing a strong correlation with blood glucose levels A micropump collects breath samples and the sensor detects acetone enabling mapping of its concentration for blood glucose measurement.", projectLink: "https://github.com/Abinaya-26tech",pictures: [],tags:[Tag.PYTHON]} ,
    {id: 2,name: "Smart Plant Monitoring System",summary: " Monitoring plant system  Blynk App",description: "Smart plant watering system is an electronic control and plant monitoring system for the process of watering plants so that it can help people care for plants . The main objective is to make human life smarter , simpler , easier and reduce works by automated system of watering . This model uses sensor technologies with WIFI module in order to make a smart switching device to help million of people", projectLink: "https://github.com/Abinaya-26tech",pictures: [],tags:[Tag.EMBEDDED_C]} ,
  ]
  constructor() { }
  GetProjects() {
    return this.projects;
  }
  GetProjectById(id:number) : Project {
    let project =this.projects.find(project => project.id === id);
    if(project === undefined )
    {
      throw new TypeError('There is no project that matched the id:' +id);
    }
    return project;
  }
}
