# BertrandMakazungLearningAngularF26

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# Github Rest API Docuumentation

https://docs.github.com/en/rest/repos/repos?utm_source=chatgpt.com&apiVersion=2026-03-10#list-repositories-for-a-user

# My API

https://api.github.com/users/makaz12/repos

# Part 3 explained

I chose option A because it gives me more control over how the API response is handled and stored in the existing writable signal. I already had a writable signal so it was the more direct approach

# Local changes
Every time the page is refreshed, angular restarts the app and the manually added data is overwritten with the new one because the signal gets recreated. The API fetching the data from a persistant source, that data is automatically rerendered.

# Lazy Load
Before:
Initial chunk files | Names         |  Raw size | Estimated transfer size
main-AD3HJI5O.js    | main          | 371.26 kB |                96.08 kB
styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes

                    | Initial total | 371.26 kB |                96.08 kB

Application bundle generation complete. [3.180 seconds] - 2026-11-16T21:10:59.113Z

After:
Initial chunk files | Names          |  Raw size | Estimated transfer size
chunk-7V5B2FUU.js   | -              | 194.02 kB |                56.69 kB
chunk-KX5J5VII.js   | -              |  88.39 kB |                22.48 kB
chunk-CYUORIDK.js   | -              |  44.22 kB |                 9.58 kB
main-4YNYOGAN.js    | main           |  40.74 kB |                 9.91 kB
styles-5INURTSO.css | styles         |   0 bytes |                 0 bytes

                    | Initial total  | 367.39 kB |                98.67 kB

Lazy chunk files    | Names          |  Raw size | Estimated transfer size
chunk-PPN37CK4.js   | form           |   4.94 kB |                 1.56 kB
chunk-AHH5GJP3.js   | project-detail |   1.59 kB |               778 bytes

Application bundle generation complete. [1.796 seconds] - 2026-11-16T21:29:54.208Z

# Lazy load result explanation
The form and project-details modules were removed from the main loading process and loaded only when the user navigates to those routes.


# LifeCycle
If this.id is accessed in a constructor,it may run before Angular sets the id input and this will result in an undefined error.

When the user navigates from the detail page to another route, ngOnDestroy runs and clears the data from that route. So Angular destroys the routed component when the user navigates away from it.
