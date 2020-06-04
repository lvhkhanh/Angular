# Angular
## Official
### https://angular.io/cli
### https://codelabs.developers.google.com/codelabs/cloud-cardboard-viewer/index.html?index=..%2F..index
### https://codelabs.developers.google.com/codelabs/firebase-cloud-functions-angular/index.html?index=..%2F..index
### https://codelabs.developers.google.com/codelabs/angular-slider-element/index.html?index=..%2F..index
### https://angular.io/guide/bazel
### https://angular.io/tutorial
### https://angular.io/start
### https://angular.io/guide/setup-local
### https://angular.io/guide/architecture
### https://angular.io/guide/styleguide
### https://blog.angular.io/
### https://angular.io/guide/universal
### https://github.com/angular/angular
### https://github.com/angular

### [OLD]https://angularjs.org/
## Tools
### https://stenciljs.com/docs/angular
## Prerequisite
### TypeScript
### JavaScript
#### https://app.ultimatecourses.com/course/javascript-basics
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
### https://www.angulararchitects.io/en/book/
### https://www.syncfusion.com/ebooks/angular-succinctly
### https://www.syncfusion.com/ebooks/angular2_succinctly
### https://www.syncfusion.com/ebooks/angularjs
## Path
### https://app.pluralsight.com/search/?q=angular&type=path
## Skill Assessment
### https://app.pluralsight.com/score/skill-assessment/angular/intro?context=search
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
## Component
### Register
#### ng g c path/inside/src/app/name --prefix=prefix --style=css|scss
### Forgot Password
### Login
#### NgRx https://ngrx.io/guide/store
### Upload Files
#### https://www.ninjadevcorner.com/2019/01/how-to-upload-file-with-angular-6-7-tutorial.html



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
```
