(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{F4UR:function(t,e,n){"use strict";n.r(e),n.d(e,"LoginModule",function(){return St});var r=n("ofXK"),i=n("fXoL"),s=n("Cfvw"),o=n("HDdC"),a=n("DH7j"),l=n("lJxs"),u=n("XoHu");function c(t,e){return new o.a(n=>{const r=t.length;if(0===r)return void n.complete();const i=new Array(r);let o=0,a=0;for(let l=0;l<r;l++){const u=Object(s.a)(t[l]);let c=!1;n.add(u.subscribe({next:t=>{c||(c=!0,a++),i[l]=t},error:t=>n.error(t),complete:()=>{o++,o!==r&&c||(a===r&&n.next(e?e.reduce((t,e,n)=>(t[e]=i[n],t),{}):i),n.complete())}}))}})}class h{}const d=new i.r("NgValueAccessor"),p={provide:d,useExisting:Object(i.T)(()=>f),multi:!0},g=new i.r("CompositionEventMode");let f=(()=>{class t{constructor(t,e,n){this._renderer=t,this._elementRef=e,this._compositionMode=n,this.onChange=t=>{},this.onTouched=()=>{},this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=Object(r.o)()?Object(r.o)().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Ib(i.E),i.Ib(i.l),i.Ib(g,8))},t.\u0275dir=i.Db({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,e){1&t&&i.Sb("input",function(t){return e._handleInput(t.target.value)})("blur",function(){return e.onTouched()})("compositionstart",function(){return e._compositionStart()})("compositionend",function(t){return e._compositionEnd(t.target.value)})},features:[i.xb([p])]}),t})();function m(t){return null==t||0===t.length}function b(t){return null!=t&&"number"==typeof t.length}const _=new i.r("NgValidators"),y=new i.r("NgAsyncValidators"),C=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class v{static min(t){return function(t){return e=>{if(m(e.value)||m(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}(t)}static max(t){return function(t){return e=>{if(m(e.value)||m(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}(t)}static required(t){return function(t){return m(t.value)?{required:!0}:null}(t)}static requiredTrue(t){return function(t){return!0===t.value?null:{required:!0}}(t)}static email(t){return function(t){return m(t.value)||C.test(t.value)?null:{email:!0}}(t)}static minLength(t){return function(t){return e=>m(e.value)||!b(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}(t)}static maxLength(t){return function(t){return e=>b(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}(t)}static pattern(t){return function(t){if(!t)return V;let e,n;return"string"==typeof t?(n="","^"!==t.charAt(0)&&(n+="^"),n+=t,"$"!==t.charAt(t.length-1)&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),t=>{if(m(t.value))return null;const r=t.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}(t)}static nullValidator(t){return null}static compose(t){return k(t)}static composeAsync(t){return P(t)}}function V(t){return null}function w(t){return null!=t}function A(t){const e=Object(i.pb)(t)?Object(s.a)(t):t;return Object(i.ob)(e),e}function O(t){let e={};return t.forEach(t=>{e=null!=t?Object.assign(Object.assign({},e),t):e}),0===Object.keys(e).length?null:e}function E(t,e){return e.map(e=>e(t))}function S(t){return t.map(t=>function(t){return!t.validate}(t)?t:e=>t.validate(e))}function k(t){if(!t)return null;const e=t.filter(w);return 0==e.length?null:function(t){return O(E(t,e))}}function D(t){return null!=t?k(S(t)):null}function P(t){if(!t)return null;const e=t.filter(w);return 0==e.length?null:function(t){return function(...t){if(1===t.length){const e=t[0];if(Object(a.a)(e))return c(e,null);if(Object(u.a)(e)&&Object.getPrototypeOf(e)===Object.prototype){const t=Object.keys(e);return c(t.map(t=>e[t]),t)}}if("function"==typeof t[t.length-1]){const e=t.pop();return c(t=1===t.length&&Object(a.a)(t[0])?t[0]:t,null).pipe(Object(l.a)(t=>e(...t)))}return c(t,null)}(E(t,e).map(A)).pipe(Object(l.a)(O))}}function x(t){return null!=t?P(S(t)):null}function M(t,e){return null===t?[e]:Array.isArray(t)?[...t,e]:[t,e]}function F(t){return t._rawValidators}function j(t){return t._rawAsyncValidators}let T=(()=>{class t{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=D(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=x(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.Db({type:t}),t})(),L=(()=>{class t extends T{get formDirective(){return null}get path(){return null}}return t.\u0275fac=function(e){return I(e||t)},t.\u0275dir=i.Db({type:t,features:[i.vb]}),t})();const I=i.Nb(L);class N extends T{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class U{constructor(t){this._cd=t}is(t){var e,n;return!!(null===(n=null===(e=this._cd)||void 0===e?void 0:e.control)||void 0===n?void 0:n[t])}}let K=(()=>{class t extends U{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Ib(N,2))},t.\u0275dir=i.Db({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,e){2&t&&i.Ab("ng-untouched",e.is("untouched"))("ng-touched",e.is("touched"))("ng-pristine",e.is("pristine"))("ng-dirty",e.is("dirty"))("ng-valid",e.is("valid"))("ng-invalid",e.is("invalid"))("ng-pending",e.is("pending"))},features:[i.vb]}),t})(),G=(()=>{class t extends U{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Ib(L,10))},t.\u0275dir=i.Db({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:14,hostBindings:function(t,e){2&t&&i.Ab("ng-untouched",e.is("untouched"))("ng-touched",e.is("touched"))("ng-pristine",e.is("pristine"))("ng-dirty",e.is("dirty"))("ng-valid",e.is("valid"))("ng-invalid",e.is("invalid"))("ng-pending",e.is("pending"))},features:[i.vb]}),t})();function R(t,e){$(t,e,!0),e.valueAccessor.writeValue(t.value),function(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&B(t,e)})}(t,e),function(t,e){const n=(t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}(t,e),function(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&B(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(t,e),function(t,e){if(e.valueAccessor.setDisabledState){const n=t=>{e.valueAccessor.setDisabledState(t)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}(t,e)}function q(t,e,n=!0){const r=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(r),e.valueAccessor.registerOnTouched(r)),z(t,e,!0),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function J(t,e){t.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function $(t,e,n){const r=F(t);null!==e.validator?t.setValidators(M(r,e.validator)):"function"==typeof r&&t.setValidators([r]);const i=j(t);if(null!==e.asyncValidator?t.setAsyncValidators(M(i,e.asyncValidator)):"function"==typeof i&&t.setAsyncValidators([i]),n){const n=()=>t.updateValueAndValidity();J(e._rawValidators,n),J(e._rawAsyncValidators,n)}}function z(t,e,n){let r=!1;if(null!==t){if(null!==e.validator){const n=F(t);if(Array.isArray(n)&&n.length>0){const i=n.filter(t=>t!==e.validator);i.length!==n.length&&(r=!0,t.setValidators(i))}}if(null!==e.asyncValidator){const n=j(t);if(Array.isArray(n)&&n.length>0){const i=n.filter(t=>t!==e.asyncValidator);i.length!==n.length&&(r=!0,t.setAsyncValidators(i))}}}if(n){const t=()=>{};J(e._rawValidators,t),J(e._rawAsyncValidators,t)}return r}function B(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function H(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Z="VALID",X="INVALID",W="PENDING",Q="DISABLED";function Y(t){return(rt(t)?t.validators:t)||null}function tt(t){return Array.isArray(t)?D(t):t||null}function et(t,e){return(rt(e)?e.asyncValidators:t)||null}function nt(t){return Array.isArray(t)?x(t):t||null}function rt(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class it{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=tt(this._rawValidators),this._composedAsyncValidatorFn=nt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===Z}get invalid(){return this.status===X}get pending(){return this.status==W}get disabled(){return this.status===Q}get enabled(){return this.status!==Q}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=tt(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=nt(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=W,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=Q,this.errors=null,this._forEachChild(e=>{e.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=Z,this._forEachChild(e=>{e.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),this.status!==Z&&this.status!==W||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Q:Z}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=W,this._hasOwnPendingAsyncValidator=!0;const e=A(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(t,e,n){if(null==e)return null;if(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length)return null;let r=t;return e.forEach(t=>{r=r instanceof ot?r.controls.hasOwnProperty(t)?r.controls[t]:null:r instanceof at&&r.at(t)||null}),r}(this,t)}getError(t,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new i.n,this.statusChanges=new i.n}_calculateStatus(){return this._allControlsDisabled()?Q:this.errors?X:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(W)?W:this._anyControlsHaveStatus(X)?X:Z}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){rt(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class st extends it{constructor(t=null,e,n){super(Y(e),et(n,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){H(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){H(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class ot extends it{constructor(t,e,n){super(Y(e),et(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e){this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}removeControl(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity(),this._onCollectionChange()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e instanceof st?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(t,e)=>!!e._syncPendingControls()||t);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const n=this.controls[e];if(this.contains(e)&&t(n))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(t,e){let n=t;return this._forEachChild((t,r)=>{n=e(n,t,r)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class at extends it{constructor(t,e,n){super(Y(e),et(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}at(t){return this.controls[t]}push(t){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity(),this._onCollectionChange()}insert(t,e){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity()}removeAt(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity(),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((t,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof st?t.value:t.getRawValue())}clear(){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity())}_syncPendingControls(){let t=this.controls.reduce((t,e)=>!!e._syncPendingControls()||t,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}let lt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.Db({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),t})();const ut={provide:d,useExisting:Object(i.T)(()=>ct),multi:!0};let ct=(()=>{class t extends h{constructor(t,e){super(),this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=e=>{t(""==e?null:parseFloat(e))}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(i.Ib(i.E),i.Ib(i.l))},t.\u0275dir=i.Db({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,e){1&t&&i.Sb("input",function(t){return e.onChange(t.target.value)})("blur",function(){return e.onTouched()})},features:[i.xb([ut]),i.vb]}),t})(),ht=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Gb({type:t}),t.\u0275inj=i.Fb({}),t})();const dt=new i.r("NgModelWithFormControlWarning"),pt={provide:L,useExisting:Object(i.T)(()=>gt)};let gt=(()=>{class t extends L{constructor(t,e){super(),this.validators=t,this.asyncValidators=e,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new i.n,this._setValidators(t),this._setAsyncValidators(e)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(z(this.form,this,!1),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const e=this.form.get(t.path);return R(e,t),e.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),e}getControl(t){return this.form.get(t.path)}removeControl(t){q(t.control||null,t,!1),H(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,e){this.form.get(t.path).setValue(e)}onSubmit(t){return this.submitted=!0,e=this.directives,this.form._syncPendingControls(),e.forEach(t=>{const e=t.control;"submit"===e.updateOn&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)}),this.ngSubmit.emit(t),!1;var e}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const e=t.control,n=this.form.get(t.path);e!==n&&(q(e||null,t),n instanceof st&&(R(n,t),t.control=n))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const e=this.form.get(t.path);(function(t,e){$(t,e,!1)})(e,t),e.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const e=this.form.get(t.path);e&&function(t,e){return z(t,e,!1)}(e,t)&&e.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){$(this.form,this,!1),this._oldForm&&z(this._oldForm,this,!1)}_checkFormPresent(){}}return t.\u0275fac=function(e){return new(e||t)(i.Ib(_,10),i.Ib(y,10))},t.\u0275dir=i.Db({type:t,selectors:[["","formGroup",""]],hostBindings:function(t,e){1&t&&i.Sb("submit",function(t){return e.onSubmit(t)})("reset",function(){return e.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[i.xb([pt]),i.vb,i.wb]}),t})();const ft={provide:N,useExisting:Object(i.T)(()=>mt)};let mt=(()=>{class t extends N{constructor(t,e,n,r,s){super(),this._ngModelWarningConfig=s,this._added=!1,this.update=new i.n,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(e),this._setAsyncValidators(n),this.valueAccessor=function(t,e){if(!e)return null;let n,r,i;return Array.isArray(e),e.forEach(t=>{t.constructor===f?n=t:Object.getPrototypeOf(t.constructor)===h?r=t:i=t}),i||r||n||null}(0,r)}set isDisabled(t){}ngOnChanges(t){this._added||this._setUpControl(),function(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object.is(e,n.currentValue)}(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return t=null==this.name?this.name:this.name.toString(),[...this._parent.path,t];var t}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}return t.\u0275fac=function(e){return new(e||t)(i.Ib(L,13),i.Ib(_,10),i.Ib(y,10),i.Ib(d,10),i.Ib(dt,8))},t.\u0275dir=i.Db({type:t,selectors:[["","formControlName",""]],inputs:{isDisabled:["disabled","isDisabled"],name:["formControlName","name"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[i.xb([ft]),i.vb,i.wb]}),t._ngModelWarningSentOnce=!1,t})(),bt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Gb({type:t}),t.\u0275inj=i.Fb({imports:[[ht]]}),t})(),_t=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Gb({type:t}),t.\u0275inj=i.Fb({imports:[bt]}),t})(),yt=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:dt,useValue:e.warnOnNgModelWithFormControl}]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Gb({type:t}),t.\u0275inj=i.Fb({imports:[bt]}),t})(),Ct=(()=>{class t{group(t,e=null){const n=this._reduceControls(t);let r,i=null,s=null;return null!=e&&(function(t){return void 0!==t.asyncValidators||void 0!==t.validators||void 0!==t.updateOn}(e)?(i=null!=e.validators?e.validators:null,s=null!=e.asyncValidators?e.asyncValidators:null,r=null!=e.updateOn?e.updateOn:void 0):(i=null!=e.validator?e.validator:null,s=null!=e.asyncValidator?e.asyncValidator:null)),new ot(n,{asyncValidators:s,updateOn:r,validators:i})}control(t,e,n){return new st(t,e,n)}array(t,e,n){const r=t.map(t=>this._createControl(t));return new at(r,e,n)}_reduceControls(t){const e={};return Object.keys(t).forEach(n=>{e[n]=this._createControl(t[n])}),e}_createControl(t){return t instanceof st||t instanceof ot||t instanceof at?t:Array.isArray(t)?this.control(t[0],t.length>1?t[1]:null,t.length>2?t[2]:null):this.control(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(i.Eb)({factory:function(){return new t},token:t,providedIn:yt}),t})();var vt=n("Fj7B");function Vt(t,e){if(1&t){const t=i.Mb();i.Lb(0,"div",11),i.Lb(1,"h3",12),i.bc(2,"Login"),i.Kb(),i.Lb(3,"form",13),i.Sb("ngSubmit",function(){i.Xb(t);const e=i.Ub();return e.onsubmitlogin(e.loginformform.value)}),i.Lb(4,"div",14),i.Lb(5,"label",15),i.bc(6,"Email address"),i.Kb(),i.Jb(7,"input",16),i.Kb(),i.Lb(8,"div",17),i.Lb(9,"label",18),i.bc(10,"Password"),i.Kb(),i.Jb(11,"input",19),i.Kb(),i.Lb(12,"div",20),i.Lb(13,"button",21),i.bc(14),i.Kb(),i.Lb(15,"button",22),i.Sb("click",function(){return i.Xb(t),i.Ub().showsignup()}),i.bc(16,"Sign-Up"),i.Kb(),i.Kb(),i.Kb(),i.Kb()}if(2&t){const t=i.Ub();i.yb(3),i.Vb("formGroup",t.loginformform),i.yb(10),i.Vb("disabled",!t.loginformform.valid),i.yb(1),i.cc(t.logintext)}}function wt(t,e){if(1&t){const t=i.Mb();i.Lb(0,"div",23),i.Lb(1,"h3",24),i.bc(2,"Sign Up"),i.Kb(),i.Lb(3,"form",25),i.Sb("ngSubmit",function(){i.Xb(t);const e=i.Ub();return e.onsubmitsignup(e.signupformform.value)}),i.Lb(4,"div",26),i.Lb(5,"label",27),i.bc(6,"Enter FullName"),i.Kb(),i.Jb(7,"input",28),i.Kb(),i.Lb(8,"div",29),i.Lb(9,"label",30),i.bc(10,"Email Address"),i.Kb(),i.Jb(11,"input",31),i.Kb(),i.Lb(12,"div",29),i.Lb(13,"label",32),i.bc(14,"Email Phone Number"),i.Kb(),i.Jb(15,"input",33),i.Kb(),i.Lb(16,"div",29),i.Lb(17,"label",30),i.bc(18,"Enter Address"),i.Kb(),i.Jb(19,"input",34),i.Kb(),i.Lb(20,"div",29),i.Lb(21,"label",18),i.bc(22,"Password"),i.Kb(),i.Jb(23,"input",35),i.Kb(),i.Lb(24,"button",36),i.bc(25,"Sign-Up"),i.Kb(),i.Lb(26,"button",37),i.Sb("click",function(){return i.Xb(t),i.Ub().showlogin()}),i.bc(27,"Login"),i.Kb(),i.Kb(),i.Kb()}if(2&t){const t=i.Ub();i.yb(3),i.Vb("formGroup",t.signupformform),i.yb(21),i.Vb("disabled",!t.signupformform.valid)}}let At=(()=>{class t{constructor(t,e){this.fb=t,this.serviceapi=e,this.logintext="Login",this.signupbool=!1,this.loginformform=this.fb.group({email:new st("",v.compose([v.pattern("^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$"),v.required])),password:new st("",v.required)}),this.signupformform=this.fb.group({email:new st("",v.compose([v.pattern("^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$"),v.required])),password:new st("",v.required),name:new st("",v.required),phone:new st("",v.required),address:new st("",v.required)})}ngOnInit(){}showsignup(){this.signupbool=!0}showlogin(){this.signupbool=!1}onsubmitlogin(t){this.logintext="One Sec...",this.serviceapi.login(t.email,t.password).then(t=>{console.log(t),this.logintext="Login";var e=t;if(e.access_token)return this.successmessage("login successful!"),localStorage.setItem("token",e.access_token),localStorage.setItem("user",e.user.name),void setTimeout(()=>{window.location.href="#/buy",window.location.reload()},2e3);this.failuremessage("Check your credentials")})}onsubmitsignup(t){console.log(t),this.serviceapi.signup(t.name,t.email,t.phone,t.address,t.password).then(t=>{if(console.log(t),t.success)return this.successmessage("Created successful, you can now proceed to login"),this.signupbool=!1,void this.signupformform.reset();this.failuremessage("Check your details")})}Toadmin(){window.location.href="#/admin"}successmessage(t){toastr.success(t)}failuremessage(t){toastr.error(t)}infomessage(t){toastr.info(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Ib(Ct),i.Ib(vt.a))},t.\u0275cmp=i.Cb({type:t,selectors:[["app-login"]],decls:14,vars:2,consts:[[1,""],[1,"header","d-flex","justify-content-between",2,"background-color","transparent !important"],["src","assets/ecoimg.svg","width","7%","data-aos","fade-right","data-aos-delay","600","data-aos-duration","1000","data-aos-easing","ease-in-sine",1,"iconlogo"],["data-aos","fade-left","data-aos-delay","900","data-aos-duration","1000","data-aos-easing","ease-in-sine","type","button",1,"btn","btn-light",2,"background-color","rgb(240, 213, 164)","border","none","color","rgb(23, 45, 94)",3,"click"],[1,"bi","bi-person-check-fill"],[1,"maincontent","d-flex","justify-content-center","bgimg"],["id","loginform","data-aos","fade-up","data-aos-delay","200","data-aos-duration","1000","data-aos-easing","ease-in-sine",4,"ngIf"],["id","signupform","data-aos","fade-up","data-aos-delay","200","data-aos-duration","1000","data-aos-easing","ease-in-sine",4,"ngIf"],[1,"setme","lowwith"],[1,"h6"],[1,"bi","bi-heart-fill","text-danger"],["id","loginform","data-aos","fade-up","data-aos-delay","200","data-aos-duration","1000","data-aos-easing","ease-in-sine"],[1,"fw-bold","mb-3","mt-5","pt-5"],["id","loginformform",3,"formGroup","ngSubmit"],["data-aos","fade-up","data-aos-delay","500","data-aos-duration","1000","data-aos-easing","ease-in-sine",1,"form-group"],["for","exampleInputEmail1"],["type","email","id","exampleInputEmail1","formControlName","email","aria-describedby","emailHelp","placeholder","Enter email",1,"form-control"],["data-aos","fade-up","data-aos-delay","700","data-aos-duration","1000","data-aos-easing","ease-in-sine",1,"form-group","mt-2"],["for","exampleInputPassword1"],["type","password","formControlName","password","id","exampleInputPassword1","placeholder","Password",1,"form-control"],["data-aos","fade-up","data-aos-delay","900","data-aos-duration","1000","data-aos-easing","ease-in-sine",1,"d-flex","justify-content-between","mt-3"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-outline-danger",2,"border","1px solid rgba(23, 46, 94, 0.514)","; color","rgba(23, 46, 94, 0.719)",3,"click"],["id","signupform","data-aos","fade-up","data-aos-delay","200","data-aos-duration","1000","data-aos-easing","ease-in-sine"],[1,"fw-bold"],["id","signupformform",3,"formGroup","ngSubmit"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name","aria-describedby","emailHelp","placeholder","Enter FullName",1,"form-control"],[1,"form-group","mt-2"],["for","email"],["type","email","id","email","formControlName","email","placeholder","Enter email",1,"form-control"],["for","phonereg"],["type","number","id","phonereg","formControlName","phone","placeholder","Enter Phone Number",1,"form-control"],["type","text","id","address","formControlName","address","placeholder","Enter address",1,"form-control"],["type","password","id","exampleInputPassword1","placeholder","Password","formControlName","password",1,"form-control"],["type","submit",1,"btn","btn-primary","btn-block","mt-3","w-100",3,"disabled"],["type","submit",1,"btn","btn-block","mt-2","mb-5","w-100","btn-outline-warning",2,"border","1px solid rgb(23, 45, 94)","; color","rgb(23, 45, 94)",3,"click"]],template:function(t,e){1&t&&(i.Lb(0,"div",0),i.Lb(1,"div",1),i.Jb(2,"img",2),i.Lb(3,"button",3),i.Sb("click",function(){return e.Toadmin()}),i.Jb(4,"i",4),i.bc(5," Admin"),i.Kb(),i.Kb(),i.Lb(6,"div",5),i.ac(7,Vt,17,3,"div",6),i.ac(8,wt,28,2,"div",7),i.Kb(),i.Lb(9,"div",8),i.Lb(10,"p",9),i.Lb(11,"small"),i.bc(12,"Project Ecommerce Hub @2021 | All Rights Reserved "),i.Kb(),i.Jb(13,"i",10),i.Kb(),i.Kb(),i.Kb()),2&t&&(i.yb(7),i.Vb("ngIf",0==e.signupbool),i.yb(1),i.Vb("ngIf",1==e.signupbool))},directives:[r.i,lt,G,gt,f,K,mt,ct],styles:[".maincontent[_ngcontent-%COMP%]{padding-top:100px}#loginform[_ngcontent-%COMP%], #signupform[_ngcontent-%COMP%]{width:300px}@media only screen and (max-width:600px){.iconlogo[_ngcontent-%COMP%]{width:30%}.lowwith[_ngcontent-%COMP%]{padding-bottom:20px;text-align:center;width:100%}}.bgimg[_ngcontent-%COMP%]{background-color:#ccc;background-image:url(/assets/bg.svg);background-position:50%;background-repeat:no-repeat;background-size:cover;height:100vh}.setme[_ngcontent-%COMP%]{left:50%;margin:0;position:absolute;top:97%;transform:translate(-50%,-50%)}input[_ngcontent-%COMP%]{border:none!important;height:50px;outline:none!important}input[_ngcontent-%COMP%]:focus{background-color:rgba(222,236,243,.384)}"]}),t})();var Ot=n("tyNb");const Et=[{path:"",component:At}];let St=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Gb({type:t}),t.\u0275inj=i.Fb({imports:[[r.b,_t,yt,Ot.a.forChild(Et)]]}),t})()}}]);