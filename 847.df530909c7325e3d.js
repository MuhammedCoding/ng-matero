"use strict";(self.webpackChunkng_matero=self.webpackChunkng_matero||[]).push([[847],{7824:(Re,B,l)=>{l.r(B),l.d(B,{FormsModule:()=>je});var oe=l(7361),X=l(4521),m=l(3075),e=l(5e3),b=l(508),y=l(4218),x=l(2802),c=l(7093),p=l(9224),s=l(7322),W=l(8833),me=l(4107),C=l(7423),g=l(9808),ne=l(5245),v=l(6856);function ie(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"validations.required")," "))}function le(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"validations.required")," "))}function se(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"validations.required")," "))}function pe(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r){const a=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,1,a.getErrorMessage(a.reactiveForm1))," ")}}function de(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"validations.required")," "))}function ue(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"validations.required")," "))}function ce(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"validations.required")," "))}function ge(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r){const a=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,1,a.getErrorMessage(a.reactiveForm2))," ")}}let K=(()=>{class r{constructor(a,t,i){this.fb=a,this.dateAdapter=t,this.translate=i,this.q={username:"",email:"",gender:""},this.reactiveForm1=this.fb.group({username:["",[m.kI.required]],gender:["",[m.kI.required]],mobile:["",[m.kI.required]],email:["",[m.kI.required,m.kI.email]],city:[""],address:[""],company:[""],tele:[""],website:[""],date:[""]}),this.reactiveForm2=this.fb.group({username:["",[m.kI.required]],gender:["",[m.kI.required]],mobile:["",[m.kI.required]],email:["",[m.kI.required,m.kI.email]],city:[""],address:[""],company:[""],tele:[""],website:[""],date:[""]})}ngOnInit(){this.translateSubscription=this.translate.onLangChange.subscribe(a=>{this.dateAdapter.setLocale(a.lang)})}ngOnDestroy(){this.translateSubscription.unsubscribe()}getErrorMessage(a){var t,i;return(null===(t=a.get("email"))||void 0===t?void 0:t.hasError("required"))?"validations.required":(null===(i=a.get("email"))||void 0===i?void 0:i.hasError("email"))?"validations.invalid_email":""}}return r.\u0275fac=function(a){return new(a||r)(e.Y36(m.qu),e.Y36(b._A),e.Y36(y.sK))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-forms-elements"]],decls:158,vars:17,consts:[["fxLayout","row wrap",1,"matero-row"],["fxFlex","100",1,"matero-col"],[1,"m-r-8"],["matInput","","placeholder","Username","name","username",3,"ngModel","ngModelChange"],["matInput","","placeholder","Email","name","email",3,"ngModel","ngModelChange"],["name","gender",3,"ngModel","ngModelChange"],["value","1"],["value","2"],["mat-raised-button","","color","primary"],["fxFlex","33.33","fxFlex.lt-sm","100",1,"matero-col"],[1,"form-field-full",3,"formGroup"],["matInput","","placeholder","Simple placeholder","formControlName","username","required",""],[4,"ngIf"],["required","","formControlName","gender","required",""],["matInput","","placeholder","Simple placeholder","type","number","formControlName","mobile","required",""],["matSuffix",""],["matInput","","placeholder","Simple placeholder","formControlName","email","required",""],["matInput","","placeholder","Simple placeholder","formControlName","city"],["matInput","","placeholder","Simple placeholder","formControlName","address"],["matInput","","placeholder","Simple placeholder","formControlName","company"],["matInput","","placeholder","Simple placeholder","type","number","formControlName","tele"],["matInput","","placeholder","Simple placeholder","formControlName","website"],["matInput","","placeholder","Choose a date","formControlName","date",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["mat-raised-button","","color","primary",1,"m-t-8"],["fxFlex","66.67","fxFlex.lt-sm","100",1,"matero-col"],["fxLayout","row wrap","fxLayoutGap","8px grid"],["fxFlex","50","fxFlex.lt-sm","100"],["picker2",""]],template:function(a,t){if(1&a&&(e._UZ(0,"page-header"),e.TgZ(1,"div",0),e.TgZ(2,"div",1),e.TgZ(3,"mat-card"),e.TgZ(4,"mat-card-title"),e._uU(5,"Form Inline"),e.qZA(),e.TgZ(6,"form"),e.TgZ(7,"mat-form-field",2),e.TgZ(8,"input",3),e.NdJ("ngModelChange",function(n){return t.q.username=n}),e.qZA(),e.qZA(),e.TgZ(9,"mat-form-field",2),e.TgZ(10,"input",4),e.NdJ("ngModelChange",function(n){return t.q.email=n}),e.qZA(),e.qZA(),e.TgZ(11,"mat-form-field",2),e.TgZ(12,"mat-label"),e._uU(13,"Gender"),e.qZA(),e.TgZ(14,"mat-select",5),e.NdJ("ngModelChange",function(n){return t.q.gender=n}),e.TgZ(15,"mat-option"),e._uU(16,"-- None --"),e.qZA(),e.TgZ(17,"mat-option",6),e._uU(18,"male"),e.qZA(),e.TgZ(19,"mat-option",7),e._uU(20,"female"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"button",8),e._uU(22,"Search"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"div",9),e.TgZ(24,"mat-card"),e.TgZ(25,"mat-card-title"),e._uU(26,"Form Horizontal"),e.qZA(),e.TgZ(27,"form",10),e.TgZ(28,"mat-form-field"),e.TgZ(29,"mat-label"),e._uU(30,"Username"),e.qZA(),e._UZ(31,"input",11),e.YNc(32,ie,3,3,"mat-error",12),e.qZA(),e.TgZ(33,"mat-form-field"),e.TgZ(34,"mat-label"),e._uU(35,"Gender"),e.qZA(),e.TgZ(36,"mat-select",13),e.TgZ(37,"mat-option"),e._uU(38,"-- None --"),e.qZA(),e.TgZ(39,"mat-option",6),e._uU(40,"male"),e.qZA(),e.TgZ(41,"mat-option",7),e._uU(42,"female"),e.qZA(),e.qZA(),e.YNc(43,le,3,3,"mat-error",12),e.qZA(),e.TgZ(44,"mat-form-field"),e.TgZ(45,"mat-label"),e._uU(46,"Mobile"),e.qZA(),e._UZ(47,"input",14),e.TgZ(48,"mat-icon",15),e._uU(49,"smartphone"),e.qZA(),e.YNc(50,se,3,3,"mat-error",12),e.qZA(),e.TgZ(51,"mat-form-field"),e.TgZ(52,"mat-label"),e._uU(53,"Email"),e.qZA(),e._UZ(54,"input",16),e.YNc(55,pe,3,3,"mat-error",12),e.qZA(),e.TgZ(56,"mat-form-field"),e.TgZ(57,"mat-label"),e._uU(58,"City"),e.qZA(),e._UZ(59,"input",17),e.qZA(),e.TgZ(60,"mat-form-field"),e.TgZ(61,"mat-label"),e._uU(62,"Address"),e.qZA(),e._UZ(63,"input",18),e.qZA(),e.TgZ(64,"mat-form-field"),e.TgZ(65,"mat-label"),e._uU(66,"Company"),e.qZA(),e._UZ(67,"input",19),e.qZA(),e.TgZ(68,"mat-form-field"),e.TgZ(69,"mat-label"),e._uU(70,"Tele"),e.qZA(),e._UZ(71,"input",20),e.TgZ(72,"mat-icon",15),e._uU(73,"phone"),e.qZA(),e.qZA(),e.TgZ(74,"mat-form-field"),e.TgZ(75,"mat-label"),e._uU(76,"Website"),e.qZA(),e._UZ(77,"input",21),e.qZA(),e.TgZ(78,"mat-form-field"),e._UZ(79,"input",22),e._UZ(80,"mat-datepicker-toggle",23),e._UZ(81,"mat-datepicker",null,24),e.qZA(),e.TgZ(83,"button",25),e._uU(84,"Save"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(85,"div",26),e.TgZ(86,"mat-card"),e.TgZ(87,"mat-card-title"),e._uU(88,"Form Horizontal"),e.qZA(),e.TgZ(89,"form",10),e.TgZ(90,"div",27),e.TgZ(91,"div",28),e.TgZ(92,"mat-form-field"),e.TgZ(93,"mat-label"),e._uU(94,"Username"),e.qZA(),e._UZ(95,"input",11),e.YNc(96,de,3,3,"mat-error",12),e.qZA(),e.qZA(),e.TgZ(97,"div",28),e.TgZ(98,"mat-form-field"),e.TgZ(99,"mat-label"),e._uU(100,"Gender"),e.qZA(),e.TgZ(101,"mat-select",13),e.TgZ(102,"mat-option"),e._uU(103,"-- None --"),e.qZA(),e.TgZ(104,"mat-option",6),e._uU(105,"male"),e.qZA(),e.TgZ(106,"mat-option",7),e._uU(107,"female"),e.qZA(),e.qZA(),e.YNc(108,ue,3,3,"mat-error",12),e.qZA(),e.qZA(),e.TgZ(109,"div",28),e.TgZ(110,"mat-form-field"),e.TgZ(111,"mat-label"),e._uU(112,"Mobile"),e.qZA(),e._UZ(113,"input",14),e.TgZ(114,"mat-icon",15),e._uU(115,"smartphone"),e.qZA(),e.YNc(116,ce,3,3,"mat-error",12),e.qZA(),e.qZA(),e.TgZ(117,"div",28),e.TgZ(118,"mat-form-field"),e.TgZ(119,"mat-label"),e._uU(120,"Email"),e.qZA(),e._UZ(121,"input",16),e.YNc(122,ge,3,3,"mat-error",12),e.qZA(),e.qZA(),e.TgZ(123,"div",28),e.TgZ(124,"mat-form-field"),e.TgZ(125,"mat-label"),e._uU(126,"City"),e.qZA(),e._UZ(127,"input",17),e.qZA(),e.qZA(),e.TgZ(128,"div",28),e.TgZ(129,"mat-form-field"),e.TgZ(130,"mat-label"),e._uU(131,"Address"),e.qZA(),e._UZ(132,"input",18),e.qZA(),e.qZA(),e.TgZ(133,"div",28),e.TgZ(134,"mat-form-field"),e.TgZ(135,"mat-label"),e._uU(136,"Company"),e.qZA(),e._UZ(137,"input",19),e.qZA(),e.qZA(),e.TgZ(138,"div",28),e.TgZ(139,"mat-form-field"),e.TgZ(140,"mat-label"),e._uU(141,"Tele"),e.qZA(),e._UZ(142,"input",20),e.TgZ(143,"mat-icon",15),e._uU(144,"phone"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(145,"div",28),e.TgZ(146,"mat-form-field"),e.TgZ(147,"mat-label"),e._uU(148,"Website"),e.qZA(),e._UZ(149,"input",21),e.qZA(),e.qZA(),e.TgZ(150,"div",28),e.TgZ(151,"mat-form-field"),e._UZ(152,"input",22),e._UZ(153,"mat-datepicker-toggle",23),e._UZ(154,"mat-datepicker",null,29),e.qZA(),e.qZA(),e.qZA(),e.TgZ(156,"button",25),e._uU(157,"Save"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&a){const i=e.MAs(82),n=e.MAs(155);let d,Z,f,_,h,T,A,q;e.xp6(8),e.Q6J("ngModel",t.q.username),e.xp6(2),e.Q6J("ngModel",t.q.email),e.xp6(4),e.Q6J("ngModel",t.q.gender),e.xp6(13),e.Q6J("formGroup",t.reactiveForm1),e.xp6(5),e.Q6J("ngIf",null==(d=t.reactiveForm1.get("username"))?null:d.invalid),e.xp6(11),e.Q6J("ngIf",null==(Z=t.reactiveForm1.get("gender"))?null:Z.invalid),e.xp6(7),e.Q6J("ngIf",null==(f=t.reactiveForm1.get("mobile"))?null:f.invalid),e.xp6(5),e.Q6J("ngIf",null==(_=t.reactiveForm1.get("email"))?null:_.invalid),e.xp6(24),e.Q6J("matDatepicker",i),e.xp6(1),e.Q6J("for",i),e.xp6(9),e.Q6J("formGroup",t.reactiveForm2),e.xp6(7),e.Q6J("ngIf",null==(h=t.reactiveForm2.get("username"))?null:h.invalid),e.xp6(12),e.Q6J("ngIf",null==(T=t.reactiveForm2.get("gender"))?null:T.invalid),e.xp6(8),e.Q6J("ngIf",null==(A=t.reactiveForm2.get("mobile"))?null:A.invalid),e.xp6(6),e.Q6J("ngIf",null==(q=t.reactiveForm2.get("email"))?null:q.invalid),e.xp6(30),e.Q6J("matDatepicker",n),e.xp6(1),e.Q6J("for",n)}},directives:[x.q,c.xw,c.yH,p.a8,p.n5,m._Y,m.JL,m.F,s.KE,W.Nt,m.Fj,m.JJ,m.On,s.hX,me.gD,b.ey,C.lW,m.sg,m.u,m.Q7,g.O5,m.wV,ne.Hw,s.R9,v.hl,v.nW,v.Mq,c.SQ,s.TO],pipes:[y.X$],encapsulation:2}),r})();var V=l(9646),Ze=l(4004),fe=l(1005),_e=l(520);let H=(()=>{class r{constructor(a){this.http=a}getGithubAccounts(a){return a?this.http.get(`https://api.github.com/search/users?q=${a}`).pipe((0,Ze.U)(t=>t.items)):(0,V.of)([])}getAlbums(){return this.http.get("https://jsonplaceholder.typicode.com/albums")}getPhotos(){return this.http.get("https://jsonplaceholder.typicode.com/photos")}getPeople(a){let t=[{id:"5a15b13c36e7a7f00cf0d7cb",index:2,isActive:!0,picture:"http://placehold.it/32x32",age:23,name:"Karyn Wright",gender:"female",company:"ZOLAR",email:"karynwright@zolar.com",phone:"+1 (851) 583-2547"},{id:"5a15b13c2340978ec3d2c0ea",index:3,isActive:!1,picture:"http://placehold.it/32x32",age:35,name:"Rochelle Estes",disabled:!0,gender:"female",company:"EXTRAWEAR",email:"rochelleestes@extrawear.com",phone:"+1 (849) 408-2029"},{id:"5a15b13c663ea0af9ad0dae8",index:4,isActive:!1,picture:"http://placehold.it/32x32",age:25,name:"Mendoza Ruiz",gender:"male",company:"ZYTRAX",email:"mendozaruiz@zytrax.com",phone:"+1 (904) 536-2020"},{id:"5a15b13cc9eeb36511d65acf",index:5,isActive:!1,picture:"http://placehold.it/32x32",age:39,name:"Rosales Russell",gender:"male",company:"ELEMANTRA",email:"rosalesrussell@elemantra.com",phone:"+1 (868) 473-3073"},{id:"5a15b13c728cd3f43cc0fe8a",index:6,isActive:!0,picture:"http://placehold.it/32x32",age:32,name:"Marquez Nolan",gender:"male",company:"MIRACLIS",disabled:!0,email:"marqueznolan@miraclis.com",phone:"+1 (853) 571-3921"},{id:"5a15b13ca51b0aaf8a99c05a",index:7,isActive:!1,picture:"http://placehold.it/32x32",age:28,name:"Franklin James",gender:"male",company:"CAXT",email:"franklinjames@caxt.com",phone:"+1 (868) 539-2984"},{id:"5a15b13cc3b9381ffcb1d6f7",index:8,isActive:!1,picture:"http://placehold.it/32x32",age:24,name:"Elsa Bradley",gender:"female",company:"MATRIXITY",email:"elsabradley@matrixity.com",phone:"+1 (994) 583-3850"},{id:"5a15b13ce58cb6ff62c65164",index:9,isActive:!0,picture:"http://placehold.it/32x32",age:40,name:"Pearson Thompson",gender:"male",company:"EZENT",email:"pearsonthompson@ezent.com",phone:"+1 (917) 537-2178"},{id:"5a15b13c90b95eb68010c86e",index:10,isActive:!0,picture:"http://placehold.it/32x32",age:32,name:"Ina Pugh",gender:"female",company:"MANTRIX",email:"inapugh@mantrix.com",phone:"+1 (917) 450-2372"},{id:"5a15b13c2b1746e12788711f",index:11,isActive:!0,picture:"http://placehold.it/32x32",age:25,name:"Nguyen Elliott",gender:"male",company:"PORTALINE",email:"nguyenelliott@portaline.com",phone:"+1 (905) 491-3377"},{id:"5a15b13c605403381eec5019",index:12,isActive:!0,picture:"http://placehold.it/32x32",age:31,name:"Mills Barnett",gender:"male",company:"FARMEX",email:"millsbarnett@farmex.com",phone:"+1 (882) 462-3986"},{id:"5a15b13c67e2e6d1a3cd6ca5",index:13,isActive:!0,picture:"http://placehold.it/32x32",age:36,name:"Margaret Reynolds",gender:"female",company:"ROOFORIA",email:"margaretreynolds@rooforia.com",phone:"+1 (935) 435-2345"},{id:"5a15b13c947c836d177aa85c",index:14,isActive:!1,picture:"http://placehold.it/32x32",age:29,name:"Yvette Navarro",gender:"female",company:"KINETICA",email:"yvettenavarro@kinetica.com",phone:"+1 (807) 485-3824"},{id:"5a15b13c5dbbe61245c1fb73",index:15,isActive:!1,picture:"http://placehold.it/32x32",age:20,name:"Elisa Guzman",gender:"female",company:"KAGE",email:"elisaguzman@kage.com",phone:"+1 (868) 594-2919"},{id:"5a15b13c38fd49fefea8db80",index:16,isActive:!1,picture:"http://placehold.it/32x32",age:33,name:"Jodie Bowman",gender:"female",company:"EMTRAC",email:"jodiebowman@emtrac.com",phone:"+1 (891) 565-2560"},{id:"5a15b13c9680913c470eb8fd",index:17,isActive:!1,picture:"http://placehold.it/32x32",age:24,name:"Diann Booker",gender:"female",company:"LYRIA",email:"diannbooker@lyria.com",phone:"+1 (830) 555-3209"}];return a&&(t=t.filter(i=>i.name.toLocaleLowerCase().indexOf(a.toLocaleLowerCase())>-1)),(0,V.of)(t).pipe((0,fe.g)(500))}}return r.\u0275fac=function(a){return new(a||r)(e.LFG(_e.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac}),r})();var M=l(8966),U=l(2787);let $=(()=>{class r{constructor(a,t){this.dialogRef=a,this.data=t,this.defaultBindingsList=[{value:1,label:"Vilnius"},{value:2,label:"Kaunas"},{value:3,label:"Pavilnys",disabled:!0}],this.selectedCity=null}ngOnInit(){}}return r.\u0275fac=function(a){return new(a||r)(e.Y36(M.so),e.Y36(M.WI))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-forms-select-edit"]],decls:15,vars:5,consts:[[3,"items","ngModel","ngModelChange"],[1,"m-x-8"],[3,"items","ngModel","appendTo","ngModelChange"]],template:function(a,t){1&a&&(e.TgZ(0,"p"),e._uU(1," By default dropdown panel is rendered as child element of ng-select, but you can append dropdown to any element using "),e.TgZ(2,"strong"),e._uU(3,"appendTo"),e.qZA(),e._uU(4,".\n"),e.qZA(),e.TgZ(5,"p"),e._uU(6," If you place ng-select inside container with fixed height and hidden overflow then dropdown will not be fully visible.\n"),e.qZA(),e.TgZ(7,"mat-form-field"),e.TgZ(8,"mat-label"),e._uU(9,"Without appendTo"),e.qZA(),e.TgZ(10,"mtx-select",0),e.NdJ("ngModelChange",function(n){return t.selectedCity=n}),e.qZA(),e.qZA(),e.TgZ(11,"mat-form-field",1),e.TgZ(12,"mat-label"),e._uU(13,"With appendTo"),e.qZA(),e.TgZ(14,"mtx-select",2),e.NdJ("ngModelChange",function(n){return t.selectedCity=n}),e.qZA(),e.qZA()),2&a&&(e.xp6(10),e.Q6J("items",t.defaultBindingsList)("ngModel",t.selectedCity),e.xp6(4),e.Q6J("items",t.defaultBindingsList)("ngModel",t.selectedCity)("appendTo","app-admin-layout"))},directives:[s.KE,s.hX,U.MS,m.JJ,m.On],styles:[""]}),r})();var Te=l(4834);function Ae(r,o){if(1&r&&(e.TgZ(0,"mtx-option",20),e._uU(1),e.qZA()),2&r){const a=o.$implicit;e.Q6J("value",a.id)("disabled",a.disabled),e.xp6(1),e.hij(" ",a.name," ")}}function qe(r,o){if(1&r&&(e.TgZ(0,"b"),e._uU(1,"create new"),e.qZA(),e._uU(2)),2&r){const a=o.searchTerm;e.xp6(2),e.hij(": ",a," ")}}const ee=function(){return[]};let te=(()=>{class r{constructor(a,t){this.dataService=a,this.dialog=t,this.people=[],this.selectedPersonId="5a15b13c36e7a7f00cf0d7cb",this.selectedPersonId2="5a15b13c36e7a7f00cf0d7cb",this.selectedSimpleItem="Two",this.simpleItems=[],this.disable=!0,this.selectedCarId=3,this.cars=[{id:1,name:"Volvo"},{id:2,name:"Saab",disabled:!0},{id:3,name:"Opel"},{id:4,name:"Audi"}],this.companies=[],this.loading=!1,this.companiesNames=["Mi\u0161kas","\u017dalias","Flexigen"],this.selectedCompany="",this.selectedCompanyCustom="",this.selectedCompanyCustomPromise=""}ngOnInit(){this.people$=this.dataService.getPeople(),this.dataService.getPeople().subscribe(a=>this.people=a),this.simpleItems=[!0,"Two",3],this.companiesNames.forEach((a,t)=>{this.companies.push({id:t,name:a})})}toggleDisabled(){const a=this.cars[1];a.disabled=!a.disabled}addTag(a){return{name:a,tag:!0}}addTagPromise(a){return new Promise(t=>{this.loading=!0,setTimeout(()=>{t({id:5,name:a,valid:!0}),this.loading=!1},1e3)})}openDialog(){this.dialog.open($,{autoFocus:!1})}}return r.\u0275fac=function(a){return new(a||r)(e.Y36(H),e.Y36(M.uw))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-forms-selects"]],features:[e._Bn([H])],decls:111,vars:45,consts:[[1,"m-b-16"],["href","https://ng-matero.github.io/extensions/components/select","target","_blank"],["href","https://github.com/ng-matero/extensions","target","_blank"],["fxLayout","row wrap",1,"matero-row"],["fxFlex","100","fxFlex.gt-sm","50",1,"matero-col"],[1,"w-full"],["bindLabel","name","bindValue","id","autofocus","",3,"items","ngModel","ngModelChange"],["inset","",1,"m-y-16"],["bindLabel","name","bindValue","id",3,"items","ngModel","ngModelChange"],[3,"items","ngModel","ngModelChange"],["type","button","mat-raised-button","","color","primary",1,"m-b-8",3,"click"],[3,"ngModel","ngModelChange"],[3,"value","disabled",4,"ngFor","ngForOf"],[3,"value"],[3,"items","addTag","ngModel","ngModelChange"],["bindLabel","name",3,"items","addTag","hideSelected","multiple","ngModel","ngModelChange"],["bindLabel","name",3,"items","addTag","multiple","loading","ngModel","ngModelChange"],["ng-tag-tmp",""],[3,"items","addTag","multiple","selectOnTab","isOpen"],["mat-raised-button","","color","primary",3,"click"],[3,"value","disabled"]],template:function(a,t){1&a&&(e._UZ(0,"page-header"),e.TgZ(1,"div",0),e._uU(2," The following examples use "),e.TgZ(3,"a",1),e.TgZ(4,"code"),e._uU(5,"select"),e.qZA(),e.qZA(),e._uU(6," component of "),e.TgZ(7,"a",2),e._uU(8,"Material Extensions"),e.qZA(),e._uU(9,", it is a Material form field wrapper of "),e.TgZ(10,"code"),e._uU(11,"ng-select"),e.qZA(),e._uU(12,".\n"),e.qZA(),e.TgZ(13,"div",3),e.TgZ(14,"div",4),e.TgZ(15,"mat-card"),e.TgZ(16,"mat-card-title"),e._uU(17,"Data Source"),e.qZA(),e.TgZ(18,"div"),e.TgZ(19,"p"),e._uU(20," Most common case is showing data from backend API and with mtx-select this is extremely simple since you can bind directly to observable when using angular "),e.TgZ(21,"b"),e._uU(22," | async"),e.qZA(),e._uU(23," pipe. "),e.qZA(),e.TgZ(24,"mat-form-field",5),e.TgZ(25,"mat-label"),e._uU(26,"select person"),e.qZA(),e.TgZ(27,"mtx-select",6),e.NdJ("ngModelChange",function(n){return t.selectedPersonId=n}),e.ALo(28,"async"),e.qZA(),e.qZA(),e._uU(29),e._UZ(30,"mat-divider",7),e.TgZ(31,"p"),e._uU(32," You can also set array of objects as items input. "),e.qZA(),e.TgZ(33,"mat-form-field",5),e.TgZ(34,"mat-label"),e._uU(35,"select person"),e.qZA(),e.TgZ(36,"mtx-select",8),e.NdJ("ngModelChange",function(n){return t.selectedPersonId2=n}),e.qZA(),e.qZA(),e._uU(37),e._UZ(38,"mat-divider",7),e.TgZ(39,"p"),e._uU(40," While array of objects is the most common items source, you may want to set simple array of strings, numbers, booleans. "),e.qZA(),e.TgZ(41,"mat-form-field",5),e.TgZ(42,"mat-label"),e._uU(43,"select person"),e.qZA(),e.TgZ(44,"mtx-select",9),e.NdJ("ngModelChange",function(n){return t.selectedSimpleItem=n}),e.qZA(),e.qZA(),e._uU(45),e.ALo(46,"json"),e._UZ(47,"mat-divider",7),e.TgZ(48,"p"),e._uU(49," If you have simple use case, you can omit items array and bind options directly in html using "),e.TgZ(50,"b"),e._uU(51,"ng-option"),e.qZA(),e._uU(52," component. "),e.qZA(),e.TgZ(53,"button",10),e.NdJ("click",function(){return t.toggleDisabled()}),e._uU(54," Toggle option[1] disabled "),e.qZA(),e.TgZ(55,"mat-form-field",5),e.TgZ(56,"mat-label"),e._uU(57,"Select car"),e.qZA(),e.TgZ(58,"mtx-select",11),e.NdJ("ngModelChange",function(n){return t.selectedCarId=n}),e.YNc(59,Ae,2,3,"mtx-option",12),e.TgZ(60,"mtx-option",13),e._uU(61,"Custom"),e.qZA(),e.qZA(),e.qZA(),e._uU(62),e.ALo(63,"json"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(64,"div",4),e.TgZ(65,"mat-card"),e.TgZ(66,"mat-card-title"),e._uU(67,"Tags"),e.qZA(),e.TgZ(68,"div"),e.TgZ(69,"label"),e._uU(70,"Default tags"),e.qZA(),e.TgZ(71,"mat-form-field",5),e.TgZ(72,"mat-label"),e._uU(73,"Select item"),e.qZA(),e.TgZ(74,"mtx-select",14),e.NdJ("ngModelChange",function(n){return t.selectedCompany=n}),e.qZA(),e.qZA(),e.TgZ(75,"p"),e._uU(76),e.ALo(77,"json"),e.qZA(),e._UZ(78,"mat-divider",7),e.TgZ(79,"label"),e._uU(80,"Custom tags"),e.qZA(),e.TgZ(81,"mat-form-field",5),e.TgZ(82,"mat-label"),e._uU(83,"Select item"),e.qZA(),e.TgZ(84,"mtx-select",15),e.NdJ("ngModelChange",function(n){return t.selectedCompanyCustom=n}),e.qZA(),e.qZA(),e.TgZ(85,"p"),e._uU(86),e.ALo(87,"json"),e.qZA(),e._UZ(88,"mat-divider",7),e.TgZ(89,"label"),e._uU(90,"Server side tags"),e.qZA(),e.TgZ(91,"mat-form-field",5),e.TgZ(92,"mat-label"),e._uU(93,"Select item"),e.qZA(),e.TgZ(94,"mtx-select",16),e.NdJ("ngModelChange",function(n){return t.selectedCompanyCustomPromise=n}),e.YNc(95,qe,3,1,"ng-template",17),e.qZA(),e.qZA(),e._UZ(96,"mat-divider",7),e.TgZ(97,"label"),e._uU(98,"Tagging without dropdown. Press enter to add item"),e.qZA(),e.TgZ(99,"mat-form-field",5),e.TgZ(100,"mat-label"),e._uU(101,"Select item"),e.qZA(),e._UZ(102,"mtx-select",18),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(103,"div",4),e.TgZ(104,"mat-card"),e.TgZ(105,"mat-card-title"),e._uU(106,"Select in dialog"),e.qZA(),e.TgZ(107,"p"),e._uU(108,"Test ng-select in a dialog."),e.qZA(),e.TgZ(109,"button",19),e.NdJ("click",function(){return t.openDialog()}),e._uU(110,"Open Dialog"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&a&&(e.xp6(27),e.Q6J("items",e.lcZ(28,33,t.people$))("ngModel",t.selectedPersonId),e.xp6(2),e.hij(" Selected: ",t.selectedPersonId," "),e.xp6(7),e.Q6J("items",t.people)("ngModel",t.selectedPersonId2),e.xp6(1),e.hij(" Selected: ",t.selectedPersonId2," "),e.xp6(7),e.Q6J("items",t.simpleItems)("ngModel",t.selectedSimpleItem),e.xp6(1),e.hij(" Selected: ",e.lcZ(46,35,t.selectedSimpleItem)," "),e.xp6(13),e.Q6J("ngModel",t.selectedCarId),e.xp6(1),e.Q6J("ngForOf",t.cars),e.xp6(1),e.Q6J("value","custom"),e.xp6(2),e.hij(" Selected car ID: ",e.lcZ(63,37,t.selectedCarId)," "),e.xp6(12),e.Q6J("items",e.DdM(43,ee))("addTag",!0)("ngModel",t.selectedCompany),e.xp6(2),e.hij(" Selected value: ",e.lcZ(77,39,t.selectedCompany)," "),e.xp6(8),e.Q6J("items",t.companies)("addTag",t.addTag)("hideSelected",!0)("multiple",!0)("ngModel",t.selectedCompanyCustom),e.xp6(2),e.hij(" Selected value: ",e.lcZ(87,41,t.selectedCompanyCustom)," "),e.xp6(8),e.Q6J("items",t.companies)("addTag",t.addTagPromise)("multiple",!0)("loading",t.loading)("ngModel",t.selectedCompanyCustomPromise),e.xp6(8),e.Q6J("items",e.DdM(44,ee))("addTag",!0)("multiple",!0)("selectOnTab",!0)("isOpen",!1))},directives:[x.q,c.xw,c.yH,p.a8,p.n5,s.KE,s.hX,U.MS,m.JJ,m.On,Te.d,C.lW,g.sg,U.Jd,U.sn],pipes:[g.Ov,g.Ts],encapsulation:2}),r})();var xe=l(2290),Ue=l(8776);let re=(()=>{class r{constructor(a){this.toast=a,this.form=new m.cw({}),this.model={email:"email@gmail.com"},this.fields=[{key:"text",type:"input",templateOptions:{label:"Text",placeholder:"Type here to see the other field become enabled...",required:!0}},{key:"text2",type:"input",templateOptions:{label:"Hey!",placeholder:"This one is disabled if there is no text in the other input"},expressionProperties:{"templateOptions.disabled":"!model.text"}},{key:"email",type:"input",templateOptions:{label:"Email address",placeholder:"Enter email",required:!0}}],this.form2=new m.cw({}),this.model2={},this.options={},this.fields2=[{fieldGroupClassName:"row",fieldGroup:[{className:"col-sm-6",type:"input",key:"firstName",templateOptions:{label:"First Name",required:!0}},{className:"col-sm-6",type:"input",key:"lastName",templateOptions:{label:"Last Name",required:!0},expressionProperties:{"templateOptions.disabled":"!model.firstName"}}]},{fieldGroupClassName:"row",fieldGroup:[{className:"col-sm-6",type:"input",key:"street",templateOptions:{label:"Street"}},{className:"col-sm-3",type:"combobox",key:"cityId",templateOptions:{label:"City",options:[{id:1,name:"\u5317\u4eac"},{id:2,name:"\u4e0a\u6d77"},{id:3,name:"\u5e7f\u5dde"},{id:4,name:"\u6df1\u5733"}],labelProp:"name",valueProp:"id",required:!0,description:"This is a custom field type."},wrappers:["form-field"]},{className:"col-sm-3",type:"input",key:"zip",templateOptions:{type:"number",label:"Zip",max:99999,min:0,pattern:"\\d{5}"}}]},{type:"textarea",key:"otherInput",templateOptions:{label:"Other Input"}},{type:"checkbox",key:"otherToo",templateOptions:{label:"Other Checkbox"}}]}ngOnInit(){}submit(){this.form.valid&&this.showToast(this.model)}submit2(){this.form2.valid&&this.showToast(this.model2)}showToast(a){this.toast.success(JSON.stringify(a))}}return r.\u0275fac=function(a){return new(a||r)(e.Y36(xe._W))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-forms-dynamic"]],decls:21,vars:10,consts:[["href","https://github.com/ngx-formly/ngx-formly","target","_blank"],[3,"formGroup","ngSubmit"],[3,"form","fields","model"],["mat-raised-button","","color","primary"],[3,"model","fields","options","form"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(a,t){1&a&&(e._UZ(0,"page-header"),e.TgZ(1,"p"),e._uU(2," The dynamic forms are powered by "),e.TgZ(3,"a",0),e.TgZ(4,"code"),e._uU(5,"ngx-formly"),e.qZA(),e.qZA(),e._uU(6,".\n"),e.qZA(),e.TgZ(7,"mat-card"),e.TgZ(8,"mat-card-title"),e._uU(9,"Simple"),e.qZA(),e.TgZ(10,"form",1),e.NdJ("ngSubmit",function(){return t.submit()}),e._UZ(11,"formly-form",2),e.TgZ(12,"button",3),e._uU(13,"Submit"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"mat-card"),e.TgZ(15,"mat-card-title"),e._uU(16,"Advanced Layout"),e.qZA(),e.TgZ(17,"form",1),e.NdJ("ngSubmit",function(){return t.submit2()}),e._UZ(18,"formly-form",4),e.TgZ(19,"button",5),e._uU(20,"Submit"),e.qZA(),e.qZA(),e.qZA()),2&a&&(e.xp6(10),e.Q6J("formGroup",t.form),e.xp6(1),e.Q6J("form",t.form)("fields",t.fields)("model",t.model),e.xp6(6),e.Q6J("formGroup",t.form2),e.xp6(1),e.Q6J("model",t.model2)("fields",t.fields2)("options",t.options)("form",t.form2),e.xp6(1),e.Q6J("disabled",!t.form2.valid))},directives:[x.q,p.a8,p.n5,m._Y,m.JL,m.sg,Ue.T7,C.lW],encapsulation:2,changeDetection:0}),r})();var u=l(386),I=l(5439);function be(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"required"),e.qZA())}function ye(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"min"),e.qZA())}function Ce(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"max"),e.qZA())}function ve(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"required"),e.qZA())}function Me(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"min"),e.qZA())}function Ie(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"max"),e.qZA())}function Fe(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"required"),e.qZA())}function Je(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"required"),e.qZA())}function ke(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"required"),e.qZA())}function Ne(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"required"),e.qZA())}function Se(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"required"),e.qZA())}function De(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"required"),e.qZA())}function Qe(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"min"),e.qZA())}function Ye(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"max"),e.qZA())}function Ee(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"required"),e.qZA())}function Oe(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"filter"),e.qZA())}function we(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"required"),e.qZA())}const Pe=[{path:"elements",component:K},{path:"dynamic",component:re},{path:"select",component:te},{path:"datetime",component:(()=>{class r{constructor(a,t,i){this.dateAdapter=t,this.translate=i,this.type="moment",this.today=I.utc(),this.tomorrow=I.utc().date(I.utc().date()+1),this.min=this.today.clone().year(2018).month(10).date(3).hour(11).minute(10),this.max=this.min.clone().date(4).minute(45),this.start=this.today.clone().year(1930).month(9).date(28),this.filter=(n,d)=>{if(null===n)return!0;switch(d){case u.B4.DATE:return n.year()%2==0&&n.month()%2==0&&n.date()%2==0;case u.B4.HOUR:return n.hour()%2==0;case u.B4.MINUTE:return n.minute()%2==0}},this.group=a.group({dateTime:[new Date("2017-11-09T12:10:00.000Z"),m.kI.required],dateTimeYear:[new Date("2017-11-09T12:10:00.000Z"),m.kI.required],date:[null,m.kI.required],time:[null,m.kI.required],timeAMPM:[null,m.kI.required],month:[null,m.kI.required],year:[null,m.kI.required],mintest:[this.today,m.kI.required],filtertest:[this.today,m.kI.required],touch:[null,m.kI.required]})}ngOnInit(){this.translateSubscription=this.translate.onLangChange.subscribe(a=>{this.dateAdapter.setLocale(a.lang)})}ngOnDestroy(){this.translateSubscription.unsubscribe()}}return r.\u0275fac=function(a){return new(a||r)(e.Y36(m.qu),e.Y36(b._A),e.Y36(y.sK))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-forms-datetime"]],decls:101,vars:57,consts:[["href","https://ng-matero.github.io/extensions/components/datetimepicker","target","_blank"],["href","https://github.com/ng-matero/extensions","target","_blank"],[3,"formGroup"],["matSuffix","",3,"for"],["startView","month","type","datetime",3,"timeInterval"],["datetimePicker",""],["autocomplete","false","formControlName","dateTime","matInput","","required","",3,"mtxDatetimepicker","max","min"],[4,"ngIf"],["startView","month","type","datetime",3,"multiYearSelector","timeInterval"],["datetimeYearPicker",""],["autocomplete","false","formControlName","dateTimeYear","matInput","","required","",3,"mtxDatetimepicker","max","min"],["type","time",3,"timeInterval"],["timePicker",""],["formControlName","time","matInput","","required","",3,"mtxDatetimepicker"],["type","time",3,"timeInterval","twelvehour"],["timeAMPMPicker",""],["formControlName","timeAMPM","matInput","","required","",3,"mtxDatetimepicker"],["type","date"],["datePicker",""],["formControlName","date","matInput","","required","",3,"mtxDatetimepicker"],["mode","portrait","type","month"],["monthPicker",""],["formControlName","month","matInput","","required","",3,"mtxDatetimepicker"],["type","year"],["yearPicker",""],["formControlName","year","matInput","","required","",3,"mtxDatetimepicker"],["formControlName","mintest","matInput","","required","",3,"mtxDatetimepicker","max","min"],["mode","landscape","type","datetime",3,"timeInterval"],["minTestPicker",""],["formControlName","filtertest","matInput","","required","",3,"mtxDatetimepickerFilter","mtxDatetimepicker"],["filterTestPicker",""],["formControlName","touch","matInput","","required","",3,"mtxDatetimepicker","min"],["mode","portrait","type","datetime",3,"timeInterval","touchUi"],["touch",""]],template:function(a,t){if(1&a&&(e._UZ(0,"page-header"),e.TgZ(1,"p"),e._uU(2," The following examples use "),e.TgZ(3,"a",0),e.TgZ(4,"code"),e._uU(5,"datetimepicker"),e.qZA(),e.qZA(),e._uU(6," component of "),e.TgZ(7,"a",1),e._uU(8,"Material Extensions"),e.qZA(),e._uU(9,".\n"),e.qZA(),e.TgZ(10,"mat-card"),e.TgZ(11,"mat-card-title"),e._uU(12),e.qZA(),e.TgZ(13,"form",2),e.TgZ(14,"mat-form-field"),e.TgZ(15,"mat-placeholder"),e._uU(16,"DateTime"),e.qZA(),e._UZ(17,"mtx-datetimepicker-toggle",3),e._UZ(18,"mtx-datetimepicker",4,5),e._UZ(20,"input",6),e.YNc(21,be,2,0,"mat-error",7),e.YNc(22,ye,2,0,"mat-error",7),e.YNc(23,Ce,2,0,"mat-error",7),e.qZA(),e.TgZ(24,"mat-form-field"),e.TgZ(25,"mat-placeholder"),e._uU(26,"DateTime Year selector"),e.qZA(),e._UZ(27,"mtx-datetimepicker-toggle",3),e._UZ(28,"mtx-datetimepicker",8,9),e._UZ(30,"input",10),e.YNc(31,ve,2,0,"mat-error",7),e.YNc(32,Me,2,0,"mat-error",7),e.YNc(33,Ie,2,0,"mat-error",7),e.qZA(),e.TgZ(34,"mat-form-field"),e.TgZ(35,"mat-placeholder"),e._uU(36,"Time"),e.qZA(),e._UZ(37,"mtx-datetimepicker-toggle",3),e._UZ(38,"mtx-datetimepicker",11,12),e._UZ(40,"input",13),e.YNc(41,Fe,2,0,"mat-error",7),e.qZA(),e.TgZ(42,"mat-form-field"),e.TgZ(43,"mat-placeholder"),e._uU(44,"Time AM/PM"),e.qZA(),e._UZ(45,"mtx-datetimepicker-toggle",3),e._UZ(46,"mtx-datetimepicker",14,15),e._UZ(48,"input",16),e.YNc(49,Je,2,0,"mat-error",7),e.qZA(),e.TgZ(50,"mat-form-field"),e.TgZ(51,"mat-placeholder"),e._uU(52,"Date"),e.qZA(),e._UZ(53,"mtx-datetimepicker-toggle",3),e._UZ(54,"mtx-datetimepicker",17,18),e._UZ(56,"input",19),e.YNc(57,ke,2,0,"mat-error",7),e.qZA(),e.TgZ(58,"mat-form-field"),e.TgZ(59,"mat-placeholder"),e._uU(60,"Month"),e.qZA(),e._UZ(61,"mtx-datetimepicker-toggle",3),e._UZ(62,"mtx-datetimepicker",20,21),e._UZ(64,"input",22),e.YNc(65,Ne,2,0,"mat-error",7),e.qZA(),e.TgZ(66,"mat-form-field"),e.TgZ(67,"mat-placeholder"),e._uU(68,"Year"),e.qZA(),e._UZ(69,"mtx-datetimepicker-toggle",3),e._UZ(70,"mtx-datetimepicker",23,24),e._UZ(72,"input",25),e.YNc(73,Se,2,0,"mat-error",7),e.qZA(),e.TgZ(74,"mat-form-field"),e.TgZ(75,"mat-placeholder"),e._uU(76,"Min/Max Test"),e.qZA(),e._UZ(77,"input",26),e._UZ(78,"mtx-datetimepicker-toggle",3),e._UZ(79,"mtx-datetimepicker",27,28),e.YNc(81,De,2,0,"mat-error",7),e.YNc(82,Qe,2,0,"mat-error",7),e.YNc(83,Ye,2,0,"mat-error",7),e.qZA(),e.TgZ(84,"mat-form-field"),e.TgZ(85,"mat-placeholder"),e._uU(86,"Filter Test"),e.qZA(),e._UZ(87,"input",29),e._UZ(88,"mtx-datetimepicker-toggle",3),e._UZ(89,"mtx-datetimepicker",27,30),e.YNc(91,Ee,2,0,"mat-error",7),e.YNc(92,Oe,2,0,"mat-error",7),e.qZA(),e.TgZ(93,"mat-form-field"),e.TgZ(94,"mat-placeholder"),e._uU(95,"TouchUi"),e.qZA(),e._UZ(96,"input",31),e._UZ(97,"mtx-datetimepicker-toggle",3),e._UZ(98,"mtx-datetimepicker",32,33),e.YNc(100,we,2,0,"mat-error",7),e.qZA(),e.qZA(),e.qZA()),2&a){const i=e.MAs(19),n=e.MAs(29),d=e.MAs(39),Z=e.MAs(47),f=e.MAs(55),_=e.MAs(63),h=e.MAs(71),T=e.MAs(80),A=e.MAs(90),q=e.MAs(99);let F,J,k,N,S,D,Q,Y,E,O,w,P,L,j,R,G,z;e.xp6(12),e.hij("Date types with: ",t.type,""),e.xp6(1),e.Q6J("formGroup",t.group),e.xp6(4),e.Q6J("for",i),e.xp6(1),e.Q6J("timeInterval",5),e.xp6(2),e.Q6J("mtxDatetimepicker",i)("max",t.tomorrow)("min",t.today),e.xp6(1),e.Q6J("ngIf",null==(F=t.group.get("dateTime"))||null==F.errors?null:F.errors.required),e.xp6(1),e.Q6J("ngIf",null==(J=t.group.get("dateTime"))||null==J.errors?null:J.errors.mtxDatetimepickerMin),e.xp6(1),e.Q6J("ngIf",null==(k=t.group.get("dateTime"))||null==k.errors?null:k.errors.mtxDatetimepickerMax),e.xp6(4),e.Q6J("for",n),e.xp6(1),e.Q6J("multiYearSelector",!0)("timeInterval",5),e.xp6(2),e.Q6J("mtxDatetimepicker",n)("max",t.tomorrow)("min",t.today),e.xp6(1),e.Q6J("ngIf",null==(N=t.group.get("dateTimeYear"))||null==N.errors?null:N.errors.required),e.xp6(1),e.Q6J("ngIf",null==(S=t.group.get("dateTimeYear"))||null==S.errors?null:S.errors.mtxDatetimepickerMin),e.xp6(1),e.Q6J("ngIf",null==(D=t.group.get("dateTimeYear"))||null==D.errors?null:D.errors.mtxDatetimepickerMax),e.xp6(4),e.Q6J("for",d),e.xp6(1),e.Q6J("timeInterval",5),e.xp6(2),e.Q6J("mtxDatetimepicker",d),e.xp6(1),e.Q6J("ngIf",null==(Q=t.group.get("time"))||null==Q.errors?null:Q.errors.required),e.xp6(4),e.Q6J("for",Z),e.xp6(1),e.Q6J("timeInterval",5)("twelvehour",!0),e.xp6(2),e.Q6J("mtxDatetimepicker",Z),e.xp6(1),e.Q6J("ngIf",null==(Y=t.group.get("timeAMPM"))||null==Y.errors?null:Y.errors.required),e.xp6(4),e.Q6J("for",f),e.xp6(3),e.Q6J("mtxDatetimepicker",f),e.xp6(1),e.Q6J("ngIf",null==(E=t.group.get("date"))||null==E.errors?null:E.errors.required),e.xp6(4),e.Q6J("for",_),e.xp6(3),e.Q6J("mtxDatetimepicker",_),e.xp6(1),e.Q6J("ngIf",null==(O=t.group.get("month"))||null==O.errors?null:O.errors.required),e.xp6(4),e.Q6J("for",h),e.xp6(3),e.Q6J("mtxDatetimepicker",h),e.xp6(1),e.Q6J("ngIf",null==(w=t.group.get("year"))||null==w.errors?null:w.errors.required),e.xp6(4),e.Q6J("mtxDatetimepicker",T)("max",t.max)("min",t.min),e.xp6(1),e.Q6J("for",T),e.xp6(1),e.Q6J("timeInterval",5),e.xp6(2),e.Q6J("ngIf",null==(P=t.group.get("mintest"))||null==P.errors?null:P.errors.required),e.xp6(1),e.Q6J("ngIf",null==(L=t.group.get("mintest"))||null==L.errors?null:L.errors.mtxDatetimepickerMin),e.xp6(1),e.Q6J("ngIf",null==(j=t.group.get("mintest"))||null==j.errors?null:j.errors.mtxDatetimepickerMax),e.xp6(4),e.Q6J("mtxDatetimepickerFilter",t.filter)("mtxDatetimepicker",A),e.xp6(1),e.Q6J("for",A),e.xp6(1),e.Q6J("timeInterval",5),e.xp6(2),e.Q6J("ngIf",null==(R=t.group.get("filtertest"))||null==R.errors?null:R.errors.required),e.xp6(1),e.Q6J("ngIf",null==(G=t.group.get("filtertest"))||null==G.errors?null:G.errors.mtxDatetimepickerFilter),e.xp6(4),e.Q6J("mtxDatetimepicker",q)("min",t.min),e.xp6(1),e.Q6J("for",q),e.xp6(1),e.Q6J("timeInterval",5)("touchUi",!0),e.xp6(2),e.Q6J("ngIf",null==(z=t.group.get("touch"))||null==z.errors?null:z.errors.required)}},directives:[x.q,p.a8,p.n5,m._Y,m.JL,m.sg,s.KE,s.UY,u.C7,s.R9,u.VQ,m.Fj,W.Nt,u.WA,m.JJ,m.u,m.Q7,g.O5,s.TO],styles:[".mat-form-field[_ngcontent-%COMP%]{margin:0 8px}"]}),r})()}];let Le=(()=>{class r{}return r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[X.Bz.forChild(Pe)],X.Bz]}),r})(),je=(()=>{class r{}return r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[oe.m,Le]]}),r})()}}]);