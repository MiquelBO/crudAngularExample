"use strict";(self.webpackChunkcrudAngularExample=self.webpackChunkcrudAngularExample||[]).push([[609],{609:(In,ce,l)=>{l.r(ce),l.d(ce,{UserModule:()=>Un});var A=l(808),i=l(223),Ct=l(76),Vt=l(306),At=l(742),Mt=l(421),bt=l(669),Dt=l(403),Et=l(268),Ft=l(810),wt=l(4);let de=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.Qsj),i.Y36(i.SBq))},n.\u0275dir=i.lG2({type:n}),n})(),m=(()=>{class n extends de{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=i.n5z(n)))(r||n)}}(),n.\u0275dir=i.lG2({type:n,features:[i.qOj]}),n})();const h=new i.OlP("NgValueAccessor"),St={provide:h,useExisting:(0,i.Gpc)(()=>O),multi:!0},xt=new i.OlP("CompositionEventMode");let O=(()=>{class n extends de{constructor(e,r,o){super(e,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Gt(){const n=(0,A.q)()?(0,A.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",null==e?"":e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.Qsj),i.Y36(i.SBq),i.Y36(xt,8))},n.\u0275dir=i.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&i.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[i._Bn([St]),i.qOj]}),n})();const u=new i.OlP("NgValidators"),p=new i.OlP("NgAsyncValidators");function me(n){return function f(n){return null==n||0===n.length}(n.value)?{required:!0}:null}function w(n){return null}function Ae(n){return null!=n}function Me(n){const t=(0,i.QGY)(n)?(0,Ct.D)(n):n;return(0,i.CqO)(t),t}function be(n){let t={};return n.forEach(e=>{t=null!=e?Object.assign(Object.assign({},t),e):t}),0===Object.keys(t).length?null:t}function De(n,t){return t.map(e=>e(n))}function Ee(n){return n.map(t=>function Tt(n){return!n.validate}(t)?t:e=>t.validate(e))}function H(n){return null!=n?function Fe(n){if(!n)return null;const t=n.filter(Ae);return 0==t.length?null:function(e){return be(De(e,t))}}(Ee(n)):null}function j(n){return null!=n?function Oe(n){if(!n)return null;const t=n.filter(Ae);return 0==t.length?null:function(e){return function Ot(...n){const t=(0,bt.jO)(n),{args:e,keys:r}=(0,At.D)(n),o=new Vt.y(s=>{const{length:a}=e;if(!a)return void s.complete();const d=new Array(a);let y=a,V=a;for(let R=0;R<a;R++){let ue=!1;(0,Mt.Xf)(e[R]).subscribe((0,Dt.x)(s,kn=>{ue||(ue=!0,V--),d[R]=kn},()=>y--,void 0,()=>{(!y||!ue)&&(V||s.next(r?(0,Ft.n)(r,d):d),s.complete())}))}});return t?o.pipe((0,Et.Z)(t)):o}(De(e,t).map(Me)).pipe((0,wt.U)(be))}}(Ee(n)):null}function we(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function L(n){return n?Array.isArray(n)?n:[n]:[]}function N(n,t){return Array.isArray(n)?n.includes(t):n===t}function Ge(n,t){const e=L(t);return L(n).forEach(o=>{N(e,o)||e.push(o)}),e}function xe(n,t){return L(t).filter(e=>!N(n,e))}class Be{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=H(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=j(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class g extends Be{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class c extends Be{get formDirective(){return null}get path(){return null}}class Te{constructor(t){this._cd=t}is(t){var e,r,o;return"submitted"===t?!!(null===(e=this._cd)||void 0===e?void 0:e.submitted):!!(null===(o=null===(r=this._cd)||void 0===r?void 0:r.control)||void 0===o?void 0:o[t])}}let Ue=(()=>{class n extends Te{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(g,2))},n.\u0275dir=i.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&i.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[i.qOj]}),n})(),ke=(()=>{class n extends Te{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(c,10))},n.\u0275dir=i.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&i.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))("ng-submitted",r.is("submitted"))},features:[i.qOj]}),n})();function M(n,t){$(n,t),t.valueAccessor.writeValue(n.value),function Lt(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Pe(n,t)})}(n,t),function Yt(n,t){const e=(r,o)=>{t.valueAccessor.writeValue(r),o&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function qt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Pe(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function jt(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function B(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function $(n,t){const e=function Ne(n){return n._rawValidators}(n);null!==t.validator?n.setValidators(we(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=function Se(n){return n._rawAsyncValidators}(n);null!==t.asyncValidator?n.setAsyncValidators(we(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const o=()=>n.updateValueAndValidity();B(t._rawValidators,o),B(t._rawAsyncValidators,o)}function Pe(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Z(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}const b="VALID",U="INVALID",C="PENDING",D="DISABLED";function Q(n){return(k(n)?n.validators:n)||null}function je(n){return Array.isArray(n)?H(n):n||null}function X(n,t){return(k(t)?t.asyncValidators:n)||null}function Le(n){return Array.isArray(n)?j(n):n||null}function k(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}const K=n=>n instanceof te;function Ye(n){return(n=>n instanceof ze)(n)?n.value:n.getRawValue()}function $e(n,t){const e=K(n),r=n.controls;if(!(e?Object.keys(r):r).length)throw new i.vHH(1e3,"");if(!r[t])throw new i.vHH(1001,"")}function We(n,t){K(n),n._forEachChild((r,o)=>{if(void 0===t[o])throw new i.vHH(1002,"")})}class ee{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=je(this._rawValidators),this._composedAsyncValidatorFn=Le(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===b}get invalid(){return this.status===U}get pending(){return this.status==C}get disabled(){return this.status===D}get enabled(){return this.status!==D}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=je(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=Le(t)}addValidators(t){this.setValidators(Ge(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Ge(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(xe(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(xe(t,this._rawAsyncValidators))}hasValidator(t){return N(this._rawValidators,t)}hasAsyncValidator(t){return N(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=C,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=D,this.errors=null,this._forEachChild(r=>{r.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=b,this._forEachChild(r=>{r.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===b||this.status===C)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?D:b}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;const e=Me(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function Zt(n,t,e){if(null==t||(Array.isArray(t)||(t=t.split(e)),Array.isArray(t)&&0===t.length))return null;let r=n;return t.forEach(o=>{r=K(r)?r.controls.hasOwnProperty(o)?r.controls[o]:null:(n=>n instanceof Qt)(r)&&r.at(o)||null}),r}(this,t,".")}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new i.vpe,this.statusChanges=new i.vpe}_calculateStatus(){return this._allControlsDisabled()?D:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(U)?U:b}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){k(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class ze extends ee{constructor(t=null,e,r){super(Q(e),X(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),k(e)&&e.initialValueIsDefault&&(this.defaultValue=this._isBoxedValue(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Z(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Z(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class te extends ee{constructor(t,e,r){super(Q(e),X(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){We(this,t),Object.keys(t).forEach(r=>{$e(this,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,o)=>{r.reset(t[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=Ye(e),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const r=this.controls[e];if(this.contains(e)&&t(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,r)=>((e.enabled||this.disabled)&&(t[r]=e.value),t))}_reduceChildren(t,e){let r=t;return this._forEachChild((o,s)=>{r=e(r,o,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}}class Qt extends ee{constructor(t,e,r){super(Q(e),X(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,r={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){We(this,t),t.forEach((r,o)=>{$e(this,o),this.at(o).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((r,o)=>{this.at(o)&&this.at(o).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((r,o)=>{r.reset(t[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>Ye(t))}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,r)=>{t(e,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const Xt={provide:c,useExisting:(0,i.Gpc)(()=>I)},E=(()=>Promise.resolve(null))();let I=(()=>{class n extends c{constructor(e,r){super(),this.submitted=!1,this._directives=new Set,this.ngSubmit=new i.vpe,this.form=new te({},H(e),j(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){E.then(()=>{const r=this._findContainer(e.path);e.control=r.registerControl(e.name,e.control),M(e.control,e),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){E.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){E.then(()=>{const r=this._findContainer(e.path),o=new te({});(function Re(n,t){$(n,t)})(o,e),r.registerControl(e.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){E.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){E.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,function He(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this._directives),this.ngSubmit.emit(e),!1}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(u,10),i.Y36(p,10))},n.\u0275dir=i.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,r){1&e&&i.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[i._Bn([Xt]),i.qOj]}),n})();const en={provide:g,useExisting:(0,i.Gpc)(()=>ne)},Qe=(()=>Promise.resolve(null))();let ne=(()=>{class n extends g{constructor(e,r,o,s,a){super(),this._changeDetectorRef=a,this.control=new ze,this._registered=!1,this.update=new i.vpe,this._parent=e,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=function z(n,t){if(!t)return null;let e,r,o;return Array.isArray(t),t.forEach(s=>{s.constructor===O?e=s:function zt(n){return Object.getPrototypeOf(n.constructor)===m}(s)?r=s:o=s}),o||r||e||null}(0,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),function W(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){M(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){Qe.then(()=>{var r;this.control.setValue(e,{emitViewToModelChange:!1}),null===(r=this._changeDetectorRef)||void 0===r||r.markForCheck()})}_updateDisabled(e){const r=e.isDisabled.currentValue,o=""===r||r&&"false"!==r;Qe.then(()=>{var s;o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),null===(s=this._changeDetectorRef)||void 0===s||s.markForCheck()})}_getPath(e){return this._parent?function G(n,t){return[...t.path,n]}(e,this._parent):[e]}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(c,9),i.Y36(u,10),i.Y36(p,10),i.Y36(h,10),i.Y36(i.sBO,8))},n.\u0275dir=i.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[i._Bn([en]),i.qOj,i.TTD]}),n})(),Xe=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=i.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),et=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({}),n})(),_=(()=>{class n{constructor(){this._validator=w}ngOnChanges(e){if(this.inputName in e){const r=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):w,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return null!=e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=i.lG2({type:n,features:[i.TTD]}),n})();const Cn={provide:u,useExisting:(0,i.Gpc)(()=>P),multi:!0};let P=(()=>{class n extends _{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=e=>function _n(n){return null!=n&&!1!==n&&"false"!=`${n}`}(e),this.createValidator=e=>me}enabled(e){return e}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=i.n5z(n)))(r||n)}}(),n.\u0275dir=i.lG2({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(e,r){2&e&&i.uIk("required",r._enabled?"":null)},inputs:{required:"required"},features:[i._Bn([Cn]),i.qOj]}),n})(),En=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[et]]}),n})(),Fn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[En]}),n})();var v=l(744),F=l(646),le=l(843);let vt=(()=>{class n{constructor(){this.users=[{id:1,name:"Ramon Vila",email:"email1",birthDate:"1/1/1970"}]}getAllUsers(){return(0,F.of)(this.users.map(e=>Object.assign({},e)))}getUser(e){const r=this.users.find(o=>o.id===e);return r?(0,F.of)(Object.assign({},r)):(0,le._)(()=>new Error("user(id = "+e+") not found"))}deleteUser(e){const r=this.users.findIndex(o=>o.id===e);return r>-1?(this.users.splice(r,1),(0,F.of)("user(id = "+e+") deleted")):(0,le._)(()=>new Error("user(id = "+e+") not found"))}putUser(e){const r=this.users.findIndex(o=>o.id===e.id);return r>-1?(this.users[r]=Object.assign({},e),(0,F.of)("user(id = "+e.id+") updated")):(0,le._)(()=>new Error("user(id = "+e.id+") not found"))}postUser(e){const r=this.users.reduce((s,a)=>s<=a.id?a.id+1:s,1),o=Object.assign(Object.assign({},e),{id:r});return this.users.push(o),(0,F.of)(o.id)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function On(n,t){if(1&n){const e=i.EpF();i.TgZ(0,"div",1)(1,"label"),i._uU(2),i.qZA(),i.TgZ(3,"div")(4,"button",2),i.NdJ("click",function(){i.CHM(e);const o=i.oxw();return o.editUser(o.user.id)}),i._uU(5,"Edit"),i.qZA(),i.TgZ(6,"button",3),i.NdJ("click",function(){i.CHM(e);const o=i.oxw();return o.deleteUser(o.user.id)}),i._uU(7,"Delete"),i.qZA()()()}if(2&n){const e=i.oxw();i.xp6(2),i.Oqu(e.user.name)}}let wn=(()=>{class n{constructor(){this.clickEdit=new i.vpe,this.clickDelete=new i.vpe}ngOnInit(){}editUser(e){this.clickEdit.emit(e)}deleteUser(e){this.clickDelete.emit(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=i.Xpm({type:n,selectors:[["ce-user-list-item"]],inputs:{user:"user"},outputs:{clickEdit:"clickEdit",clickDelete:"clickDelete"},decls:1,vars:1,consts:[["class","user-list-item",4,"ngIf"],[1,"user-list-item"],[3,"click"],[1,"ms-1",3,"click"]],template:function(e,r){1&e&&i.YNc(0,On,8,1,"div",0),2&e&&i.Q6J("ngIf",r.user)},directives:[A.O5],styles:[".user-list-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;height:3rem;align-items:center}"]}),n})();function Nn(n,t){if(1&n){const e=i.EpF();i.TgZ(0,"li",4)(1,"ce-user-list-item",5),i.NdJ("clickEdit",function(o){return i.CHM(e),i.oxw().editUser(o)})("clickDelete",function(o){return i.CHM(e),i.oxw().deleteUser(o)}),i.qZA()()}if(2&n){const e=t.$implicit;i.xp6(1),i.Q6J("user",e)}}const Sn=function(){return["/users/new"]};let Gn=(()=>{class n{constructor(e,r){this.userService=e,this.router=r,this.userList=[]}ngOnInit(){this.getAllUsers()}getAllUsers(){this.userService.getAllUsers().subscribe(e=>this.userList=e)}editUser(e){this.router.navigate(["users/edit/",e])}deleteUser(e){this.userService.deleteUser(e).subscribe(r=>{console.log(r),this.getAllUsers()})}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(vt),i.Y36(v.F0))},n.\u0275cmp=i.Xpm({type:n,selectors:[["ce-user-list"]],decls:5,vars:3,consts:[[1,"user-list","container-fluid"],[1,"list-group","list-group-flush"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"mt-5",3,"routerLink"],[1,"list-group-item"],[3,"user","clickEdit","clickDelete"]],template:function(e,r){1&e&&(i.TgZ(0,"div",0)(1,"ul",1),i.YNc(2,Nn,2,1,"li",2),i.qZA(),i.TgZ(3,"button",3),i._uU(4,"New"),i.qZA()()),2&e&&(i.xp6(2),i.Q6J("ngForOf",r.userList),i.xp6(1),i.Q6J("routerLink",i.DdM(2,Sn)))},directives:[A.sg,wn,v.rH],styles:[".user-list[_ngcontent-%COMP%]{margin-top:5rem;max-width:30rem;margin-left:auto;margin-right:auto}"]}),n})();const xn=function(){return["/user/list"]};let yt=(()=>{class n{constructor(e,r,o){this.route=e,this.userService=r,this.router=o,this.user={id:void 0,name:"",birthDate:""}}ngOnInit(){const e=this.route.snapshot.paramMap.get("id");e&&this.userService.getUser(+e).subscribe(r=>this.user=r)}saveChanges(){this.user.id?this.userService.putUser(this.user).subscribe(e=>this.router.navigate(["/user/list"])):this.userService.postUser(this.user).subscribe(e=>this.router.navigate(["/user/list"]))}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(v.gz),i.Y36(vt),i.Y36(v.F0))},n.\u0275cmp=i.Xpm({type:n,selectors:[["ce-user-edit"]],decls:26,vars:7,consts:[[1,"user-edit","container-fluid"],[3,"ngSubmit"],["userForm","ngForm"],[1,"form-group","row"],["for","name",1,"col-3","col-form-label"],[1,"col-9"],["type","text","id","name","required","","name","name",1,"form-control",3,"ngModel","ngModelChange"],["name","ngModel"],[3,"hidden"],[1,"form-group","row","mt-2"],["for","email",1,"col-3","col-form-label"],["type","text","id","email","name","email",1,"form-control",3,"ngModel","ngModelChange"],["for","birthDate",1,"col-3","col-form-label"],["type","text","id","birthDate","name","birthDate",1,"form-control",3,"ngModel","ngModelChange"],[1,"mt-5"],[3,"routerLink"],["type","submit",1,"ms-1",3,"disabled"]],template:function(e,r){if(1&e&&(i.TgZ(0,"div",0)(1,"form",1,2),i.NdJ("ngSubmit",function(){return r.saveChanges()}),i.TgZ(3,"div",3)(4,"label",4),i._uU(5,"Name"),i.qZA(),i.TgZ(6,"div",5)(7,"input",6,7),i.NdJ("ngModelChange",function(s){return r.user.name=s}),i.qZA(),i.TgZ(9,"div",8),i._uU(10," Name is required "),i.qZA()()(),i.TgZ(11,"div",9)(12,"label",10),i._uU(13,"Email"),i.qZA(),i.TgZ(14,"div",5)(15,"input",11),i.NdJ("ngModelChange",function(s){return r.user.email=s}),i.qZA()()(),i.TgZ(16,"div",9)(17,"label",12),i._uU(18,"BirthDate"),i.qZA(),i.TgZ(19,"div",5)(20,"input",13),i.NdJ("ngModelChange",function(s){return r.user.birthDate=s}),i.qZA()()(),i.TgZ(21,"div",14)(22,"button",15),i._uU(23,"Cancel"),i.qZA(),i.TgZ(24,"button",16),i._uU(25,"Submit"),i.qZA()()()()),2&e){const o=i.MAs(2),s=i.MAs(8);i.xp6(7),i.Q6J("ngModel",r.user.name),i.xp6(2),i.Q6J("hidden",s.valid||s.pristine),i.xp6(6),i.Q6J("ngModel",r.user.email),i.xp6(5),i.Q6J("ngModel",r.user.birthDate),i.xp6(2),i.Q6J("routerLink",i.DdM(6,xn)),i.xp6(2),i.Q6J("disabled",!o.valid)}},directives:[Xe,ke,I,O,P,Ue,ne,v.rH],styles:[".user-edit[_ngcontent-%COMP%]{margin-top:5rem;max-width:30rem}"]}),n})();const Bn=[{path:"",component:Gn},{path:"edit/:id",component:yt},{path:"new",component:yt},{path:"**",redirectTo:""}];let Tn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[v.Bz.forChild(Bn)],v.Bz]}),n})(),Un=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[A.ez,Fn,Tn]]}),n})()}}]);