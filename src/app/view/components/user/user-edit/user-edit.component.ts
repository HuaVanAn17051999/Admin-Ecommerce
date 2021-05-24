import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.sass']
})
export class UserEditComponent implements OnInit {

  constructor(private service: UserService, private route: ActivatedRoute) { }
  data: any;
  ngOnInit(): void {
      this.getById();
  }

  getById(){
    let id = parseInt(this.route.snapshot.paramMap.get('id')) ;
    this.service.getById(id).subscribe(data => {
      this.data = data;
      console.log('data', this.data);
    })
    
  }

}
