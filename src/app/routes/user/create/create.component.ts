import {Component, OnInit} from '@angular/core';
import {NzMessageService, NzModalRef, UploadFile} from 'ng-zorro-antd';
import {_HttpClient} from '@delon/theme';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {UserListComponent} from "../list/list.component";

@Component({
    selector: 'app-user-create',
    styles: [`
        :host ::ng-deep .avatar-uploader > .ant-upload {
            width: 128px;
            height: 128px;
        }

        :host ::ng-deep .ant-upload-select-picture-card i {
            font-size: 32px;
            color: #999;
        }

        :host ::ng-deep .ant-upload-select-picture-card .ant-upload-text {
            margin-top: 8px;
            color: #666;
        }
    `],
    templateUrl: './create.component.html',
})
export class UserCreateComponent implements OnInit {

    public form: FormGroup;
    public submitting = false;
    public loading = false;
    public avatarUrl: string;
    public imgUrl;

    constructor(public msg: NzMessageService,
                private fb: FormBuilder,
                public http: _HttpClient,
                private router: Router) {
    }


    ngOnInit(): void {
        this.form = this.fb.group({
            username: [null, [Validators.required]],
            realname: [null, [Validators.required]],
            mobile: [null, [Validators.required]],
            profile: [null, [Validators.required]],
            avatar: [null, [Validators.required]],
            status: [1, [Validators.min(1), Validators.max(2)]],
        });
    }

    submit() {
        for (const i in this.form.controls) {
            this.form.controls[i].markAsDirty();
            this.form.controls[i].updateValueAndValidity();
        }
        if (this.form.invalid) return;
        this.submitting = true;
        // console.log(this.form.value);
        const url = 'http://www.admin-api.com/addUser';
        const params = this.form.value;
        this.http.post(url, params).subscribe((data: any) => {
            // console.log(data);
            this.submitting = false;
            this.msg.success(data.msg);
            this.loading = true;
            setTimeout(() => {
                // UserListComponent.
                this.router.navigateByUrl('user/list');
            }, 2000);
        }, (error: HttpErrorResponse) => {
            if (error.error instanceof Error) {
                if (error.error instanceof Error) {
                    console.log('An error occurred:', error.error.message);
                } else {
                    console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
                }
            }
        });

    }

    beforeUpload = (file: File) => {
        const fileType = ['image/jpeg', 'image/png', 'image/gif'];
        const uploadFileType = file.type;
        let isRightImage = UserCreateComponent.isInArray(fileType, uploadFileType);
        if (!isRightImage) {
            this.msg.error('You can only upload JPG,PNG,GIF file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            this.msg.error('Image must smaller than 2MB!');
        }
        return isRightImage && isLt2M;
    }

    private static isInArray(arr, value) {
        for (let i = 0; i < arr.length; i++) {
            if (value === arr[i]) {
                return true;
            }
        }
        return false;
    }

    private getBase64(img: File, callback: (img: {}) => void): void {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    handleChange(info: { file: UploadFile }): void {
        if (info.file.status === 'uploading') {
            this.loading = true;
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, (img: string) => {
                // console.log(info.file.response.data.url);
                this.loading = false;
                this.avatarUrl = img;
                this.imgUrl = info.file.response.data.url;
            });
        }
    }


}
