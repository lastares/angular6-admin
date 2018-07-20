(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./src/app/routes/user/create/create.component.html":
/*!**********************************************************!*\
  !*** ./src/app/routes/user/create/create.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<page-header [title]=\"'创建用户'\">\r\n  将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。\r\n</page-header>\r\n<nz-card [nzBordered]=\"false\">\r\n  <form nz-form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n    <nz-form-item>\r\n      <nz-form-label nzXs=\"24\" nzSm=\"7\" nzRequired nzFor=\"username\">用户昵称</nz-form-label>\r\n      <nz-form-control nzXs=\"24\" nzSm=\"12\" nzMd=\"10\">\r\n        <input nz-input formControlName=\"username\" id=\"title\" placeholder=\"用户昵称\">\r\n        <nz-form-explain *ngIf=\"form.get('username').dirty && form.get('username').errors\">请输入用户昵称</nz-form-explain>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n    <nz-form-item>\r\n      <nz-form-label nzXs=\"24\" nzSm=\"7\" nzRequired nzFor=\"realname\">真实姓名</nz-form-label>\r\n      <nz-form-control nzXs=\"24\" nzSm=\"12\" nzMd=\"10\">\r\n        <input nz-input formControlName=\"realname\" id=\"realname\" placeholder=\"真实名字\">\r\n        <nz-form-explain *ngIf=\"form.get('realname').dirty && form.get('realname').errors\">请输入真实姓名</nz-form-explain>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n      <nz-form-item>\r\n          <nz-form-label nzXs=\"24\" nzSm=\"7\" nzRequired nzFor=\"mobile\">手机号</nz-form-label>\r\n          <nz-form-control nzXs=\"24\" nzSm=\"12\" nzMd=\"10\">\r\n              <input nz-input formControlName=\"mobile\" id=\"mobile\" placeholder=\"手机号\">\r\n              <nz-form-explain *ngIf=\"form.get('mobile').dirty && form.get('mobile').errors\">请输入手机号</nz-form-explain>\r\n          </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n          <nz-form-label nzXs=\"24\" nzSm=\"7\" nzRequired nzFor=\"avatar\">头像</nz-form-label>\r\n          <nz-form-control nzXs=\"24\" nzSm=\"12\" nzMd=\"10\">\r\n              <input readonly nz-input [ngModel]=\"imgUrl\" formControlName=\"avatar\" id=\"avatar\" placeholder=\"头像\">\r\n              <nz-form-explain *ngIf=\"form.get('avatar').dirty && form.get('avatar').errors\">头像</nz-form-explain>\r\n          <!--<nz-form-control nzXs=\"24\" nzSm=\"12\" nzMd=\"10\">-->\r\n              <nz-upload class=\"avatar-uploader\"\r\n                         nzAction=\"http://angular.songyaofeng.com/upload\"\r\n                         nzName=\"avatar\"\r\n                         nzListType=\"picture-card\"\r\n                         [nzShowUploadList]=\"false\"\r\n                         [nzBeforeUpload]=\"beforeUpload\"\r\n                         (nzChange)=\"handleChange($event)\">\r\n                  <ng-container *ngIf=\"!avatarUrl\">\r\n                      <i class=\"anticon anticon-plus\"></i>\r\n                      <div class=\"ant-upload-text\">Upload</div>\r\n                  </ng-container>\r\n                  <img *ngIf=\"avatarUrl\" width=\"130\" [src]=\"avatarUrl\" class=\"avatar\">\r\n              </nz-upload>\r\n          </nz-form-control>\r\n      </nz-form-item>\r\n    <nz-form-item>\r\n      <nz-form-label nzXs=\"24\" nzSm=\"7\" nzRequired nzFor=\"profile\">个人简介</nz-form-label>\r\n      <nz-form-control nzXs=\"24\" nzSm=\"12\" nzMd=\"10\">\r\n        <textarea nz-input formControlName=\"profile\" id=\"profile\" [nzAutosize]=\"{minRows: 4}\" placeholder=\"请输入你的个人简介\"></textarea>\r\n        <nz-form-explain *ngIf=\"form.get('profile').dirty && form.get('profile').errors\">请输入个人简介</nz-form-explain>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n    <nz-form-item>\r\n      <nz-form-label nzXs=\"24\" nzSm=\"7\" nzFor=\"status\">状态</nz-form-label>\r\n      <nz-form-control nzXs=\"24\" nzSm=\"12\" nzMd=\"10\">\r\n        <nz-radio-group formControlName=\"status\">\r\n          <label nz-radio [nzValue]=\"1\">正常</label>\r\n          <label nz-radio [nzValue]=\"2\">锁定</label>\r\n        </nz-radio-group>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n    <nz-form-item>\r\n      <nz-form-control [nzXs]=\"{ span: 24, offset: 0 }\" [nzSm]=\"{ span: 10, offset: 7 }\">\r\n        <button nz-button nzType=\"primary\" type=\"submit\" [nzLoading]=\"submitting\">提交</button>\r\n        <button nz-button class=\"ml-sm\">保存</button>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n  </form>\r\n</nz-card>\r\n"

/***/ }),

/***/ "./src/app/routes/user/create/create.component.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/user/create/create.component.ts ***!
  \********************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/esm5/theme.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/util */ "./node_modules/@delon/util/esm5/util.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(msg, fb, http, router) {
        var _this = this;
        this.msg = msg;
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.submitting = false;
        this.loading = false;
        this.beforeUpload = function (file) {
            var fileType = ['image/jpeg', 'image/png', 'image/gif'];
            var uploadFileType = file.type;
            var isRightImage = UserCreateComponent_1.isInArray(fileType, uploadFileType);
            if (!isRightImage) {
                _this.msg.error('You can only upload JPG,PNG,GIF file!');
            }
            var isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                _this.msg.error('Image must smaller than 2MB!');
            }
            return isRightImage && isLt2M;
        };
    }
    UserCreateComponent_1 = UserCreateComponent;
    UserCreateComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            realname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            mobile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _delon_util__WEBPACK_IMPORTED_MODULE_5__["_Validators"].mobile])],
            profile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            avatar: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            status: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(2)]],
        });
    };
    UserCreateComponent.prototype.submit = function () {
        var _this = this;
        for (var i in this.form.controls) {
            this.form.controls[i].markAsDirty();
            this.form.controls[i].updateValueAndValidity();
        }
        if (this.form.invalid)
            return;
        this.submitting = true;
        // console.log(this.form.value);
        var url = 'http://angular.songyaofeng.com/addUser';
        var params = this.form.value;
        this.http.post(url, params).subscribe(function (data) {
            // console.log(data);
            _this.submitting = false;
            _this.msg.success(data.msg);
            _this.loading = true;
            setTimeout(function () {
                // UserListComponent.
                _this.router.navigateByUrl('user/list');
            }, 2000);
        }, function (error) {
            if (error.error instanceof Error) {
                if (error.error instanceof Error) {
                    console.log('An error occurred:', error.error.message);
                }
                else {
                    console.log("Backend returned code " + error.status + ", body was: " + error.error);
                }
            }
        });
    };
    UserCreateComponent.isInArray = function (arr, value) {
        for (var i = 0; i < arr.length; i++) {
            if (value === arr[i]) {
                return true;
            }
        }
        return false;
    };
    UserCreateComponent.prototype.getBase64 = function (img, callback) {
        var reader = new FileReader();
        reader.addEventListener('load', function () { return callback(reader.result); });
        reader.readAsDataURL(img);
    };
    UserCreateComponent.prototype.handleChange = function (info) {
        var _this = this;
        if (info.file.status === 'uploading') {
            this.loading = true;
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, function (img) {
                // console.log(info.file.response.data.url);
                _this.loading = false;
                _this.avatarUrl = img;
                _this.imgUrl = info.file.response.data.url;
            });
        }
    };
    UserCreateComponent = UserCreateComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-create',
            styles: ["\n        :host ::ng-deep .avatar-uploader > .ant-upload {\n            width: 128px;\n            height: 128px;\n        }\n\n        :host ::ng-deep .ant-upload-select-picture-card i {\n            font-size: 32px;\n            color: #999;\n        }\n\n        :host ::ng-deep .ant-upload-select-picture-card .ant-upload-text {\n            margin-top: 8px;\n            color: #666;\n        }\n    "],
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/routes/user/create/create.component.html"),
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_2__["_HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserCreateComponent);
    return UserCreateComponent;
    var UserCreateComponent_1;
}());



/***/ }),

/***/ "./src/app/routes/user/edit/edit.component.html":
/*!******************************************************!*\
  !*** ./src/app/routes/user/edit/edit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<page-header>\r\n\r\n</page-header>\r\n<nz-spin [nzSpinning]=\"isSpinning\" [nzSize]=\"'large'\">\r\n  <nz-card [nzBordered]=\"false\">\r\n    <form nz-form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n      <nz-form-item>\r\n        <nz-form-label nzXs=\"24\" nzSm=\"7\" nzRequired nzFor=\"username\">用户昵称</nz-form-label>\r\n        <nz-form-control nzXs=\"24\" nzSm=\"12\" nzMd=\"10\">\r\n          <input nz-input formControlName=\"username\" id=\"title\" placeholder=\"用户昵称\">\r\n          <input type=\"hidden\" formControlName=\"id\">\r\n          <nz-form-explain *ngIf=\"form.get('username').dirty && form.get('username').errors\">请输入用户昵称</nz-form-explain>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-label nzXs=\"24\" nzSm=\"7\" nzRequired nzFor=\"realname\">真实姓名</nz-form-label>\r\n        <nz-form-control nzXs=\"24\" nzSm=\"12\" nzMd=\"10\">\r\n          <input nz-input formControlName=\"realname\" id=\"realname\" placeholder=\"真实名字\">\r\n          <nz-form-explain *ngIf=\"form.get('realname').dirty && form.get('realname').errors\">请输入真实姓名</nz-form-explain>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-label nzXs=\"24\" nzSm=\"7\" nzRequired nzFor=\"mobile\">手机号</nz-form-label>\r\n        <nz-form-control nzXs=\"24\" nzSm=\"12\" nzMd=\"10\">\r\n          <input nz-input formControlName=\"mobile\" id=\"mobile\" placeholder=\"手机号\">\r\n          <nz-form-explain *ngIf=\"form.get('mobile').dirty && form.get('mobile').errors\">请输入手机号</nz-form-explain>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-label nzXs=\"24\" nzSm=\"7\" nzRequired nzFor=\"avatar\">头像</nz-form-label>\r\n        <nz-form-control nzXs=\"24\" nzSm=\"12\" nzMd=\"10\">\r\n          <input readonly nz-input [ngModel]=\"imgUrl\" formControlName=\"avatar\" id=\"avatar\" placeholder=\"头像\">\r\n          <nz-form-explain *ngIf=\"form.get('avatar').dirty && form.get('avatar').errors\">头像</nz-form-explain>\r\n          <!--<nz-form-control nzXs=\"24\" nzSm=\"12\" nzMd=\"10\">-->\r\n          <nz-upload class=\"avatar-uploader\"\r\n                     nzAction=\"http://angular.songyaofeng.com/upload\"\r\n                     nzName=\"avatar\"\r\n                     nzListType=\"picture-card\"\r\n                     [nzShowUploadList]=\"false\"\r\n                     [nzBeforeUpload]=\"beforeUpload\"\r\n                     (nzChange)=\"handleChange($event)\">\r\n            <ng-container *ngIf=\"!avatarUrl\">\r\n              <i class=\"anticon anticon-plus\"></i>\r\n              <div class=\"ant-upload-text\">Upload</div>\r\n            </ng-container>\r\n            <img *ngIf=\"avatarUrl\" width=\"130\" [src]=\"avatarUrl\" class=\"avatar\">\r\n          </nz-upload>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-label nzXs=\"24\" nzSm=\"7\" nzRequired nzFor=\"profile\">个人简介</nz-form-label>\r\n        <nz-form-control nzXs=\"24\" nzSm=\"12\" nzMd=\"10\">\r\n          <textarea nz-input formControlName=\"profile\" id=\"profile\" [nzAutosize]=\"{minRows: 4}\" placeholder=\"请输入你的个人简介\"></textarea>\r\n          <nz-form-explain *ngIf=\"form.get('profile').dirty && form.get('profile').errors\">请输入个人简介</nz-form-explain>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-label nzXs=\"24\" nzSm=\"7\" nzFor=\"status\">状态</nz-form-label>\r\n        <nz-form-control nzXs=\"24\" nzSm=\"12\" nzMd=\"10\">\r\n          <nz-radio-group formControlName=\"status\">\r\n            <label nz-radio [nzValue]=\"1\">正常</label>\r\n            <label nz-radio [nzValue]=\"2\">锁定</label>\r\n          </nz-radio-group>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control [nzXs]=\"{ span: 24, offset: 0 }\" [nzSm]=\"{ span: 10, offset: 7 }\">\r\n          <button nz-button nzType=\"primary\" type=\"submit\" [nzLoading]=\"submitting\">提交</button>\r\n          <button nz-button class=\"ml-sm\" (click)=\"reback()\">返回</button>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n    </form>\r\n  </nz-card>\r\n</nz-spin>\r\n\r\n"

/***/ }),

/***/ "./src/app/routes/user/edit/edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/routes/user/edit/edit.component.ts ***!
  \****************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/esm5/theme.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(msg, http, fb, ar, router) {
        var _this = this;
        this.msg = msg;
        this.http = http;
        this.fb = fb;
        this.ar = ar;
        this.router = router;
        this.image_path = 'http://angular.songyaofeng.com';
        this.submitting = false;
        this.loading = false;
        this.isSpinning = false;
        this.beforeUpload = function (file) {
            var fileType = ['image/jpeg', 'image/png', 'image/gif'];
            var uploadFileType = file.type;
            var isRightImage = UserEditComponent_1.isInArray(fileType, uploadFileType);
            if (!isRightImage) {
                _this.msg.error('You can only upload JPG,PNG,GIF file!');
            }
            var isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                _this.msg.error('Image must smaller than 2MB!');
            }
            return isRightImage && isLt2M;
        };
        this.isSpinning = true;
        this.formInit();
        var url = 'http://angular.songyaofeng.com/getUser';
        this.user_id = this.ar.snapshot.paramMap.get('id');
        this.http.get(url, { user_id: this.user_id }).subscribe(function (data) {
            console.log(data);
            _this.form = _this.fb.group({
                username: [data.data.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                realname: [data.data.realname, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                mobile: [data.data.mobile, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                profile: [data.data.profile, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                avatar: [data.data.avatar, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                status: [data.data.status, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(2)]],
                id: [_this.user_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
            _this.avatarUrl = _this.image_path + data.data.avatar;
        }, function (error) {
            if (error.error instanceof Error) {
                if (error.error instanceof Error) {
                    console.log('An error occurred:', error.error.message);
                }
                else {
                    console.log("Backend returned code " + error.status + ", body was: " + error.error);
                }
            }
        }, function () { return _this.isSpinning = false; });
    }
    UserEditComponent_1 = UserEditComponent;
    UserEditComponent.prototype.ngOnInit = function () {
    };
    UserEditComponent.prototype.submit = function () {
        var _this = this;
        for (var i in this.form.controls) {
            this.form.controls[i].markAsDirty();
            this.form.controls[i].updateValueAndValidity();
        }
        if (this.form.invalid)
            return;
        this.submitting = true;
        // console.log(this.form.value);
        var url = 'http://angular.songyaofeng.com/editUser';
        var params = this.form.value;
        // console.log(params);return;
        this.http.post(url, params).subscribe(function (data) {
            // console.log(data);
            _this.submitting = false;
            _this.msg.success(data.msg);
            _this.loading = true;
            setTimeout(function () {
                // UserListComponent.
                _this.router.navigateByUrl('user/list');
            }, 2000);
        }, function (error) {
            if (error.error instanceof Error) {
                if (error.error instanceof Error) {
                    console.log('An error occurred:', error.error.message);
                }
                else {
                    console.log("Backend returned code " + error.status + ", body was: " + error.error);
                }
            }
        });
    };
    UserEditComponent.prototype.formInit = function () {
        this.form = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            realname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            profile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            avatar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(2)]],
        });
    };
    UserEditComponent.isInArray = function (arr, value) {
        for (var i = 0; i < arr.length; i++) {
            if (value === arr[i]) {
                return true;
            }
        }
        return false;
    };
    UserEditComponent.prototype.getBase64 = function (img, callback) {
        var reader = new FileReader();
        reader.addEventListener('load', function () { return callback(reader.result); });
        reader.readAsDataURL(img);
    };
    UserEditComponent.prototype.handleChange = function (info) {
        var _this = this;
        if (info.file.status === 'uploading') {
            this.loading = true;
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, function (img) {
                // console.log(info.file.response.data.url);
                _this.loading = false;
                _this.avatarUrl = img;
                _this.imgUrl = info.file.response.data.url;
            });
        }
    };
    UserEditComponent.prototype.reback = function () {
        this.router.navigateByUrl('/user/list');
    };
    UserEditComponent = UserEditComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-edit',
            styles: ["\n        :host ::ng-deep .avatar-uploader > .ant-upload {\n            width: 128px;\n            height: 128px;\n        }\n\n        :host ::ng-deep .ant-upload-select-picture-card i {\n            font-size: 32px;\n            color: #999;\n        }\n\n        :host ::ng-deep .ant-upload-select-picture-card .ant-upload-text {\n            margin-top: 8px;\n            color: #666;\n        }\n    "],
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/routes/user/edit/edit.component.html"),
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_2__["_HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserEditComponent);
    return UserEditComponent;
    var UserEditComponent_1;
}());



/***/ }),

/***/ "./src/app/routes/user/list/list.component.html":
/*!******************************************************!*\
  !*** ./src/app/routes/user/list/list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<page-header>\n  <ng-template #action>\n    <button (click)=\"index.add()\" nz-button nzType=\"primary\">新建用户</button>\n  </ng-template>\n</page-header>\n<nz-card>\n  <form nz-form [nzLayout]=\"'inline'\" (ngSubmit)=\"getData()\" [formGroup]=\"searchForm\" class=\"search__form\">\n    <nz-row [nzGutter]=\"{ md: 8, lg: 24, xl: 48 }\">\n      <nz-col nzMd=\"4\" nzSm=\"24\" style=\"margin-right:15px;\">\n        <nz-form-item>\n          <nz-form-label nzFor=\"username\">用户昵称</nz-form-label>\n          <nz-form-control>\n            <input nz-input formControlName=\"username\" name=\"username\" placeholder=\"用户昵称\" id=\"username\">\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col nzMd=\"4\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label nzFor=\"realname\">真实姓名</nz-form-label>\n          <nz-form-control>\n            <input nz-input formControlName=\"realname\" name=\"realname\" placeholder=\"真实姓名\" id=\"realname\">\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col nzMd=\"4\" nzSm=\"24\" style=\"margin:0 15px;\">\n        <nz-form-item>\n          <nz-form-label nzFor=\"mobile\">手机号</nz-form-label>\n          <nz-form-control>\n            <input nz-input formControlName=\"mobile\" name=\"mobile\" placeholder=\"手机号\" id=\"mobile\">\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <!--<nz-col nzMd=\"8\" nzSm=\"24\" style=\"margin-right:15px;\">-->\n        <!--<nz-form-item>-->\n          <!--<nz-form-label nzFor=\"created_at\">创建时间</nz-form-label>-->\n          <!--<nz-form-control>-->\n            <!--<nz-date-picker formControlName=\"start_time\" [nzSize]=\"size\"></nz-date-picker> ~-->\n            <!--<nz-date-picker formControlName=\"end_time\" [nzSize]=\"size\"></nz-date-picker>-->\n          <!--</nz-form-control>-->\n        <!--</nz-form-item>-->\n      <!--</nz-col>-->\n      <nz-col nzMd=\"4\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label nzFor=\"status\">用户状态</nz-form-label>\n          <nz-form-control>\n            <nz-select formControlName=\"status\" [ngModel]=\"selectedValue\" id=\"status\" [nzPlaceHolder]=\"'请选择'\" [nzShowSearch]=\"true\">\n              <nz-option [nzLabel]=\"'正常'\" [nzValue]=\"1\"></nz-option>\n              <nz-option [nzLabel]=\"'锁定'\" [nzValue]=\"2\"></nz-option>\n            </nz-select>\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col nzMd=\"4\" nzSm=\"24\" style=\"margin-left: 2em;\">\n        <button nz-button (click)=\"getData()\" [nzType]=\"'primary'\">搜索</button>\n        <button nz-button type=\"reset\" (click)=\"onReset()\" class=\"mx-sm\">重置</button>\n        <!--<a (click)=\"expandForm=!expandForm\">-->\n          <!--{{expandForm ? '收起' : '展开'}}-->\n          <!--<i class=\"anticon\" [class.anticon-down]=\"!expandForm\" [class.anticon-up]=\"expandForm\"></i>-->\n        <!--</a>-->\n      </nz-col>\n    </nz-row>\n  </form>\n  <nz-spin [nzSpinning]=\"isSpinning\" nzTip='Loading...'>\n    <simple-table #st [data]=\"users\" [ps]=\"q.ps\" [extraParams]=\"params\" [bordered]=\"true\" [columns]=\"columns\" (checkboxChange)=\"checkboxChange($event)\" [total]=\"total\" (sortChange)=\"sortChange($event)\" pagePlacement=\"right\" [showSizeChanger]=\"true\" toTopInChange showQuickJumper [showTotal]=\"total\" isPageIndexReset [preDataChange]=\"dataChange\" [pageSizeOptions]=\"pageSizeOptions\">  </simple-table>\n  </nz-spin>\n</nz-card>\n"

/***/ }),

/***/ "./src/app/routes/user/list/list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/routes/user/list/list.component.ts ***!
  \****************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/esm5/theme.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list.service */ "./src/app/routes/user/list/list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserListComponent = /** @class */ (function () {
    function UserListComponent(router, http, msg, fb, index) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.msg = msg;
        this.fb = fb;
        this.index = index;
        this.isSpinning = false;
        this.total = 0;
        this.pageSizeOptions = [3, 5, 10];
        this.params = {};
        this.users = [];
        this.q = {
            pi: 1,
            ps: 8,
            sorter: '',
            status: null,
            statusList: [],
        };
        this.status = [
            { index: 1, text: '正常', value: false, type: 'default', checked: false },
            { index: 2, text: '锁定', value: false, type: 'success', checked: false },
        ];
        this.columns = [
            { title: '', index: 'id', type: 'checkbox' },
            { title: '编号', index: 'id' },
            { title: '用户昵称', index: 'username', format: function (item) { return item.username + " + 666" + '+' + item.realname; }, },
            { title: '真实姓名', index: 'realname' },
            { title: '手机号', index: 'mobile' },
            { title: '创建时间', index: 'created_at' },
            { title: '头像', index: 'image_path', type: 'img' },
            {
                title: '状态',
                type: 'badge',
                index: 'status',
                badge: {
                    1: { text: '正常', color: 'success' },
                    2: { text: '锁定', color: 'warning' },
                }
            },
            {
                title: '操作',
                buttons: [
                    {
                        text: "\u7F16\u8F91",
                        type: 'none',
                        click: (function (record) { return _this.router.navigate(['/user/edit/' + record.id]); }),
                    },
                    {
                        text: "\u5220\u9664",
                        type: 'del',
                        click: (function (record) { return _this.deleteUser(record.id); })
                    }
                ]
            }
        ];
        this.ids = [];
        // this.getData();
        this.searchFormInit();
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    UserListComponent.prototype.searchFormInit = function () {
        this.searchForm = this.fb.group({
            username: '',
            realname: '',
            mobile: '',
            // start_time: null,
            // end_time: null,
            status: '',
        });
    };
    // submit(value: any) {
    //     console.log(this.searchForm.value);
    // }
    UserListComponent.prototype.change = function (value) {
        console.log('change', value);
    };
    UserListComponent.prototype.getJsonLength = function (jsonData) {
        var jsonLength = 0;
        for (var item in jsonData) {
            jsonLength++;
        }
        return jsonLength;
    };
    UserListComponent.prototype.checkboxChange = function (ret) {
        console.log(ret.length);
        for (var i = 0; i < this.getJsonLength(ret); i++) {
            this.ids.push(ret[i].id);
        }
        console.log(this.ids);
        console.log(ret);
    };
    UserListComponent.prototype.sortChange = function (ret) {
        console.log('sortChange', ret);
    };
    UserListComponent.prototype.getData = function () {
        var _this = this;
        this.isSpinning = true;
        //console.log(this.searchForm.value);
        var url = 'http://angular.songyaofeng.com/adminList';
        this.http.get(url, this.searchForm.value).subscribe(function (res) {
            //console.log(res);
            _this.isSpinning = false;
            _this.users = res.data.data;
            _this.total = res.data.total;
        });
    };
    UserListComponent.prototype.dataChange = function (data) {
        return data.map(function (i, index) {
            i.disabled = index === 0;
            i.hidden = index === 1;
            return i;
        });
    };
    UserListComponent.prototype.onReset = function () {
        this.searchFormInit();
        this.getData();
    };
    UserListComponent.prototype.cancel = function () {
        this.msg.info('click cancel');
    };
    UserListComponent.prototype.confirm = function () {
        this.msg.info('click confirm');
    };
    UserListComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.isSpinning = true;
        var url = 'http://angular.songyaofeng.com/deleteUser';
        this.http.get(url, { id: id }).subscribe(function (data) {
            // console.log(data);
            _this.msg.success(data.msg);
            // setTimeout(() => {
            //     this.router.navigateByUrl('user/list');
            // }, 2000);
        }, function (error) {
            if (error.error instanceof Error) {
                if (error.error instanceof Error) {
                    console.log('An error occurred:', error.error.message);
                }
                else {
                    console.log("Backend returned code " + error.status + ", body was: " + error.error);
                }
            }
        }, function () {
            _this.getData();
            _this.isSpinning = false;
        });
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/routes/user/list/list.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/routes/user/list/list.service.ts":
/*!**************************************************!*\
  !*** ./src/app/routes/user/list/list.service.ts ***!
  \**************************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListService = /** @class */ (function () {
    function ListService(fb, router) {
        this.fb = fb;
        this.router = router;
        this.image_host = 'http://angular.songyaofeng.com';
    }
    ListService.prototype.onInit = function () {
    };
    ListService.prototype.add = function () {
        this.router.navigateByUrl('user/create');
    };
    ListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListService);
    return ListService;
}());



/***/ }),

/***/ "./src/app/routes/user/user-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/routes/user/user-routing.module.ts ***!
  \****************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/app/routes/user/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/routes/user/edit/edit.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/view.component */ "./src/app/routes/user/view/view.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create/create.component */ "./src/app/routes/user/create/create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__["UserListComponent"] },
    { path: 'create', component: _create_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"], data: { title: '创建用户' } },
    { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["UserEditComponent"], data: { title: '编辑用户' } },
    { path: 'view/:id', component: _view_view_component__WEBPACK_IMPORTED_MODULE_4__["UserViewComponent"] }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/user/user.module.ts":
/*!********************************************!*\
  !*** ./src/app/routes/user/user.module.ts ***!
  \********************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/routes/user/user-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/routes/user/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/routes/user/edit/edit.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/view.component */ "./src/app/routes/user/view/view.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create/create.component */ "./src/app/routes/user/create/create.component.ts");
/* harmony import */ var _list_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list/list.service */ "./src/app/routes/user/list/list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var COMPONENTS = [
    _list_list_component__WEBPACK_IMPORTED_MODULE_3__["UserListComponent"]
];
var COMPONENTS_NOROUNT = [
    _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["UserEditComponent"],
    _view_view_component__WEBPACK_IMPORTED_MODULE_5__["UserViewComponent"],
    _create_create_component__WEBPACK_IMPORTED_MODULE_6__["UserCreateComponent"]
];
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_1__["UserRoutingModule"],
            ],
            declarations: COMPONENTS.concat(COMPONENTS_NOROUNT),
            providers: [_list_list_service__WEBPACK_IMPORTED_MODULE_7__["ListService"]],
            entryComponents: COMPONENTS_NOROUNT
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/routes/user/view/view.component.html":
/*!******************************************************!*\
  !*** ./src/app/routes/user/view/view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <div class=\"modal-title\">查看 {{ record.id }} 信息</div>\r\n</div>\r\n<nz-spin *ngIf=\"!i\" class=\"modal-spin\"></nz-spin>\r\n<desc-list *ngIf=\"i\">\r\n  <desc-list-item term=\"姓名\">{{ i.owner }}</desc-list-item>\r\n  <desc-list-item term=\"会员卡号\">32943898021309809423</desc-list-item>\r\n  <desc-list-item term=\"身份证\">3321944288191034921</desc-list-item>\r\n  <desc-list-item term=\"联系方式\">18112345678</desc-list-item>\r\n  <desc-list-item term=\"联系地址\">曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口</desc-list-item>\r\n</desc-list>\r\n<div class=\"modal-footer\">\r\n  <button nz-button type=\"button\">关闭</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/user/view/view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/routes/user/view/view.component.ts ***!
  \****************************************************/
/*! exports provided: UserViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewComponent", function() { return UserViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/esm5/theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserViewComponent = /** @class */ (function () {
    function UserViewComponent(msgSrv, http) {
        this.msgSrv = msgSrv;
        this.http = http;
        this.record = {};
    }
    UserViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("/user/" + this.record.id).subscribe(function (res) { return _this.i = res; });
    };
    UserViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/routes/user/view/view.component.html"),
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_2__["_HttpClient"]])
    ], UserViewComponent);
    return UserViewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map