import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FileUploader, FileItem } from 'ng2-file-upload';

const URL = '/api/upload';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: URL});

  course = {};
  faculties = {};
  bachelors = 'Бакалавър';
  masters = 'Магистър';
  file: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get('/api/structure').subscribe(data => {
      this.faculties = data;
    });
  }

  addCourse() {
    this.http.post('/api/courses/course-add', this.course).subscribe(() => {
        this.router.navigateByUrl('/courses');
        }, (err) => {
          console.log(err);
        }
      );
    }

  addItem() {
    this.http.post('/upload', this.file).subscribe(() => {
      console.log(this.file + 'This should be the file');
      this.router.navigateByUrl('/courses');
    }, (err) => {
      console.log(err);
      }
    );
  }
}
