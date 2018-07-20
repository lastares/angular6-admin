import {Component, OnInit, ViewChild} from '@angular/core';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {_HttpClient} from '@delon/theme';
import {SFSchema, SFUISchema} from '@delon/form';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-user-edit',
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
    templateUrl: './edit.component.html',
})
export class UserEditComponent implements OnInit {
    public image_path: string = 'http://angular.songyaofeng.com';
    public form: FormGroup;
    public submitting = false;
    public loading = false;
    public avatarUrl: string;
    public imgUrl;
    public user_id;
    public isSpinning: boolean = false;
    constructor(public msg: NzMessageService,
                public http: _HttpClient,
                public fb: FormBuilder,
                public ar: ActivatedRoute,
                public router: Router) {
        this.isSpinning = true;
        this.formInit();
        const url = 'http://angular.songyaofeng.com/getUser';
        this.user_id = this.ar.snapshot.paramMap.get('id');

        this.http.get(url, {user_id: this.user_id}).subscribe((data: any) => {
            console.log(data);
            this.form = this.fb.group({
                username: [data.data.username, [Validators.required]],
                realname: [data.data.realname, [Validators.required]],
                mobile: [data.data.mobile, [Validators.required]],
                profile: [data.data.profile, [Validators.required]],
                avatar: [data.data.avatar, [Validators.required]],
                status: [data.data.status, [Validators.min(1), Validators.max(2)]],
                id: [this.user_id, Validators.required]
            });
            this.avatarUrl = this.image_path + data.data.avatar;
        }, (error: HttpErrorResponse) => {
            if (error.error instanceof Error) {
                if (error.error instanceof Error) {
                    console.log('An error occurred:', error.error.message);
                } else {
                    console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
                }
            }
        },
            () => this.isSpinning = false);
    }



    ngOnInit(): void {
    }

    submit() {
        for (const i in this.form.controls) {
            this.form.controls[i].markAsDirty();
            this.form.controls[i].updateValueAndValidity();
        }
        if (this.form.invalid) return;
        this.submitting = true;
        // console.log(this.form.value);
        const url = 'http://angular.songyaofeng.com/editUser';
        const params = this.form.value;
        // console.log(params);return;
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




    formInit() {
        this.form = this.fb.group({
            username: ['', [Validators.required]],
            realname: ['', [Validators.required]],
            mobile: ['', [Validators.required]],
            profile: ['', [Validators.required]],
            avatar: ['', [Validators.required]],
            id: ['', [Validators.required]],
            status: ['', [Validators.min(1), Validators.max(2)]],
        });
    }

    beforeUpload = (file: File) => {
        const fileType = ['image/jpeg', 'image/png', 'image/gif'];
        const uploadFileType = file.type;
        let isRightImage = UserEditComponent.isInArray(fileType, uploadFileType);
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

    reback():void {
        this.router.navigateByUrl('/user/list');
    }
}
