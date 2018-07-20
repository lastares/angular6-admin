import {Injectable} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from "@angular/router";


@Injectable()
export class ListService
{
    public image_host: string = 'http://angular.songyaofeng.com';
    constructor(private fb: FormBuilder, private router: Router) {

    }

    onInit() {
    }
    add(): void {
        this.router.navigateByUrl('user/create');
    }

}