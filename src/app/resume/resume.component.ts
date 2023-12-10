import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle("Abinaya.G-Portfolio");
  }

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/resume-abinaya.g.pdf');
    link.setAttribute('download', 'resume-abinaya.g.pdf'); // Add download attribute
    link.click();
    link.remove();
  }
}
