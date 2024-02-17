# 

# Welcome to DemoFlight

## Getting started:

### install dependencies

execute this comannds inside the root folder of the project 

```bash
pnpm install
```

### run app  with:

```bash
pnpm run start
```

[!IMPORTANT]

this will start both the server and the frontend. wait until vite start

[!NOTE]

1- is necesary register and user and flights inside the app

2- In production it is advisable to perform a build before running the frontend in order to improve performance, but for this application it will not be necessary.

### completed requirements:

| task number                       | state                                | adicional note :triangular_flag_on_post:       |
|:--------------------------------- |:------------------------------------:|:----------------------------------------------:|
| 1 - table                         | :white_check_mark: full              | [1 - about style customization ](#notes)       |
| 2 - page control                  | :white_check_mark: optional size too |                                                |
| 3 - url show data                 | :white_check_mark:full               |                                                |
| 4 - validate url                  | :white_check_mark: full              |                                                |
| 5 - create flight dailog          | :white_check_mark: full              |                                                |
| 6 - image control                 | :white_check_mark: full              | :warning:restricted to jpg and png less 100 kb |
| 7 - preview of image              | :white_check_mark: full              |                                                |
| 8 - send new flight to server     | :white_check_mark: full              |                                                |
| 9 - handler error in new flight   | :white_check_mark: full              |                                                |
| 10 - display photo                | :construction: not finished          | [2 -problem  getting photo](#notes)            |
| 11 - display card in small screen | :x:  not                             |                                                |
| 12 - own component to cards       | :x: not                              |                                                |
| 13 - unit test mocked server data | :construction: not finished          |                                                |
| * Nice to have features           | :warning: Partial                    | [3 - nice to have task information](#notes)    |
| * Special features                | :x: not                              |                                                |

#### notes

1 - the table can be customised by making use of the custom themes of the material-tailwind library. this library allows you to pass an object with declarations that will affect all elements belonging to it. 

more info:

[Theming - Material Tailwind](https://www.material-tailwind.com/docs/react/theming)

2- I have a problem getting the photo from the server . I needs to  known about how the server expects to handle image saving. If it does it by binary blob or what is stored is a url which I must reference to an image? I have gone for the binary blob option but the response does not include data.

 there is an additional minor error in the swagger documentation. both the endpoint for updating a flighs data with picture and without picture. both say 'Updates one flight without photo' in the swagger documentation. 

3 - task complete:

3.4: added column for edit and delete flight (delete button is a option of edit)

3.6 added url validation

3.8: added edit button and workflow

3.10, 3.11::warning: *<u>Partial.</u>*  login user and register user . (however use it without --auth as I was not able to finish the refactoring for the use of the token in the calls to the server.)

3.12:  :warning: *<u>Partial.</u>*
