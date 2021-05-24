import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/api/user.service';
import { ThrowStmt } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  constructor(private service: UserService, private toastr: ToastrService) { }
  public res=[];

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    return this.service.getListUser().subscribe(data => {
        this.res = (data)
        console.log(data)
    })
  }
  onDelete(id: number){
    return this.service.delete(id).subscribe(res => {
      this.toastr.success("Delete successfully !");
    })
  }

}
