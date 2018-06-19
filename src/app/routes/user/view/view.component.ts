import { Component, OnInit } from '@angular/core';
  import { NzMessageService } from 'ng-zorro-antd';
  import { _HttpClient } from '@delon/theme';

  @Component({
    selector: 'app-user-view',
    templateUrl: './view.component.html',
  })
  export class UserViewComponent implements OnInit {
    record: any = {};
    i: any;

    constructor(
      public msgSrv: NzMessageService,
      public http: _HttpClient
    ) { }

    ngOnInit(): void {
      this.http.get(`/user/${this.record.id}`).subscribe(res => this.i = res);
    }

    // close() {
    //   this.modal.destroy();
    // }
  }
