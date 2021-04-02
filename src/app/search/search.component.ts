import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './User';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @ViewChild('searchName') searchName?: ElementRef | null;

  user: User = new User('', 0, '', '');
  users: any = [];
  result: any = null;

  searchForm = this.fb.group({
    searchName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(30)],
    ],
  });

  constructor(private fb: FormBuilder, private searchService: SearchService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.searchName?.nativeElement.focus();
  }

  onSubmit() {
    let query = this.searchForm.get('searchName')?.value;
    if (query) {
      this.searchService.getUsers(query).subscribe((result) => {
        this.result = result;
        this.users = this.result.items;
      });
    }
  }
}
