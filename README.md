# Angular

## Prerequisite
### https://developer.mozilla.org/docs/Learn/HTML/Introduction_to_HTML
### https://developer.mozilla.org/docs/Learn/CSS/First_steps
### https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
#### https://app.ultimatecourses.com/course/javascript-basics
### https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources
### https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
### https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
### https://www.typescriptlang.org/
#### https://www.typescriptlang.org/docs/handbook/classes.html
#### https://www.typescriptlang.org/docs/handbook/decorators.html
## Official
### https://angular.io/docs
### https://angular.io/cli
### https://codelabs.developers.google.com/codelabs/cloud-cardboard-viewer/index.html?index=..%2F..index
### https://codelabs.developers.google.com/codelabs/firebase-cloud-functions-angular/index.html?index=..%2F..index
### https://codelabs.developers.google.com/codelabs/angular-slider-element/index.html?index=..%2F..index
### https://angular.io/guide/bazel
### https://angular.io/tutorial
### https://angular.io/guide/architecture
### https://angular.io/start
### https://angular.io/guide/setup-local
### https://angular.io/guide/styleguide
### https://blog.angular.io/
### https://angular.io/guide/universal
### https://github.com/angular/angular
### https://github.com/angular

### [OLD]https://angularjs.org/
## Mobile
### https://ionicframework.com/
### https://nativescript.org/nativescript-is-how-you-build-native-mobile-apps-with-angular/
## Tools
### ng lint
### https://search.google.com/test/mobile-friendly
### https://github.com/typicode/json-server
### https://www.npmjs.com/package/angular-crud
### https://storybook.js.org/docs/guides/guide-angular/
### https://stenciljs.com/docs/angular

## Courses
### https://app.ultimatecourses.com/course/ngrx-store-effects
### https://angular-presentation.firebaseapp.com/angular
### https://angular-presentation.firebaseapp.com/
### https://app.pluralsight.com/library/courses/ng-conf-2020-session-12/recommended-courses
### https://codelabs.developers.google.com/codelabs/angular-codelab/index.html?index=..%2F..index
### https://codelabs.developers.google.com/codelabs/firebase-cloud-functions-angular/index.html?index=..%2F..index
### https://codelabs.developers.google.com/codelabs/angular-slider-element/index.html?index=..%2F..index
### https://codelabs.developers.google.com/codelabs/cloud-cardboard-viewer/index.html?index=..%2F..index
### https://app.pluralsight.com/search/?q=angular
- [ ] https://angular-university.io/course/getting-started-with-angular2
- [ ] https://angular-university.io/course/rxjs-course
- [ ] https://egghead.io/courses/thinking-reactively-with-rxjs
- [ ] https://egghead.io/playlists/build-performant-and-progressive-angular-applications-78032ff5
## Certificates
- [x] [Test your Angular web application using Jasmine and Karma](https://www.coursera.org/account/accomplishments/verify/U6QGPK5V74CN)
- [x] Angular + NestJS course https://www.sololearn.com/Certificate/1092-123361/jpg/
### [OLD] https://www.w3schools.com/angular/



[NGRX Store + Effects](https://platform.ultimatecourses.com/courses/enrolled/227301)

[Setting Up An Angular Environment](https://thinkster.io/tutorials/setting-up-an-angular-environment)

Visual Studio Code

* Auto Import

* vscode-icons

* [debugging-angular](https://code.visualstudio.com/docs/nodejs/angular-tutorial#_debugging-angular)

tsconfig.json

* [debugging-angular-2-applications](https://app.pluralsight.com/guides/debugging-angular-2-applications)
## Books
### https://www.syncfusion.com/ebooks/angulardart_succinctly
### https://www.angulararchitects.io/en/book/
### https://www.syncfusion.com/ebooks/angular-succinctly
### https://www.syncfusion.com/ebooks/angular2_succinctly
### https://www.syncfusion.com/ebooks/angularjs
## Path
### https://app.pluralsight.com/search/?q=angular&type=path
## Skill Assessment
### https://app.pluralsight.com/score/skill-assessment/angular/intro?context=search
## Best Practices
### https://spring.io/guides/tutorials/spring-security-and-angular-js/
## Tools
### https://nx.dev/angular/tutorial/01-create-application
## Performance
### Lazy loading
#### https://ultimatecourses.com/blog/lazy-load-angular-modules
#### https://angular.io/guide/lazy-loading-ngmodules
### Functional Component
#### https://dev.to/leolanese/functional-programming-from-the-reactjs-and-angular-point-of-view-21f
#### https://medium.com/@jtomaszewski/how-to-write-good-composable-and-pure-components-in-angular-2-1756945c0f5b
#### https://ultimatecourses.com/blog/stateful-stateless-components
#### https://ultimatecourses.com/blog/stateless-angular-components
## Lifecycle hooks
### constructor
### ngAfterViewInit

## Directive
### *ngIf
Elements will not attach to the DOM if false

## Validation
ValidatorFn
## Guides
### https://app.pluralsight.com/guides/using-formbuilder-in-angular
## Links
### https://scotch.io/tutorials/3-ways-to-pass-async-data-to-angular-2-child-components#toc-solution-2-use-ngonchanges
### https://indepth.dev/container-components-with-angular/
### https://en.wikipedia.org/wiki/Angular_(web_framework)
## App
### ng new <MyApp>
## UI/UX
  ### autofocus, tabindex
## HttpClientModule RESTful
## Component
### Register
#### ng g c path/inside/src/app/name --prefix=prefix --style=css|scss
### Forgot Password
### Login
#### NgRx https://ngrx.io/guide/store
### Upload Files
#### https://www.ninjadevcorner.com/2019/01/how-to-upload-file-with-angular-6-7-tutorial.html
## Deploy


```
apps
  ui
  ui-e2e
libs
  domain1
    api
    domain
    feature-browse-items
      src
        lib
          sub1
          sub2
          domain1-feature1.module.ts
        index.ts
    feature-request-item
    shell
  domain2
  shared


tsconfig.json
  paths
    mapping import from @name

nx.json
tslint.json
npm run dep-graph
npm run affected:dep-graph --uncommitted
cmder
ng g lib feature-<name> --directory <domain>
NgRx Facade
ng add @angular-architects/ddd
ng g @angular-architects/ddd:domain <domain>
ng g @angular-architects/ddd:feature <name> --domain <domain> --entity <name> --app ui
ng upgrade
ng new <AngularApp> -t -s
ng generate component <ComponentName>
this.loading = true
.pipe(finalize(()=>this.loading = false))
.subscribe(result => this.reuslt = result)
```
## Links
### https://duncanhunter.gitbook.io/angular-and-ngrx/
### https://viblo.asia/p/su-ket-hop-giua-angular-5-ng2-smart-table-va-rails-OeVKBR3JKkW
### https://www.js-tutorials.com/angularjs-tutorial/smart-table-server-side-pagination-angular-4-angular5/
### https://stackblitz.com/edit/example-ng2-smart-table-qhjukg?file=src/app/app.component.ts
### CRUD Angular Firebase
## Keywords
```
coding style guide
```
## Notification
### https://github.com/angular/angularfire/blob/master/docs/messaging/messaging.md
### https://github.com/vaibhavpadalia/angularPushNotifications
### https://developers.google.com/web/updates/2015/03/push-notifications-on-the-open-web

## Map
|   |Angular   |Vue   |Spring   |Blazor   |
|---|---|---|---|---| 
|Package Manager   |`npm`,`package.json`|`npm`,`package.json`   |`mvn`,`pom.xml`   |   |
|Source   |`/src/app`| |`/src/main`   |   |
|Style guide| [JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html), [AngularJS Style](https://google.github.io/styleguide/angularjs-google-style.html)||[Java](https://google.github.io/styleguide/javaguide.html)
|Interpolation   |`{{varName}}`|`{{varName}}`   |   |`@VarName`|
|Input   |`@Input() input: string = ""`|   |   |[Parameter] public string Input {get;set;}   |
|Render fragment slot   ||   |   |[Parameter] public RenderFragment ChildContent {get;set;}   |
|Event   |`(click)="onClick($event)"`|`@click="onClick"`   |   |   |
|Custom Event   |`(customEvent)="onCustomEvent($event)"`|`@customEvent="onCustomEvent"`   |   |   |
|Event modifier   |`$event.preventDefault();`|`@submit.prevent`   |   |   |
|Event emitter   |`customEvent = new EventEmmiter<int>(); customEvent.emit(1);`|`this.$emit("customEvent");`   |   |   |
|Event bus   ||`eventBus.$emit("customEvent");eventBus.$on("customEvent",()={});`   |   |   |
## Notes
### Kill port
```
# find pid for specific port
netstat -nao | find "<port>"
# stop by pid
taskkill -f /pid <pid>

```
### https://auth0.com/blog/complete-guide-to-angular-user-authentication/
### https://viblo.asia/p/gioi-thieu-tong-quan-ve-angular-07LKX9j2ZV4
## Libs
### Immutable.js
```
const list = List<Type>(), const revert = fromJS(list).toJS()
```
