# 

# Welcome to DemoFlight

## Getting started:

### install dependencies

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

In production it is advisable to perform a build before running the frontend in order to improve performance, but for this application it will not be necessary.

### completed requirements:

| task number                       | state                                | adicional note :triangular_flag_on_post: |
|:--------------------------------- |:------------------------------------:|:----------------------------------------:|
| 1 - table                         | :white_check_mark: full              | [1 - about style customization ](#notes) |
| 2 - page control                  | :white_check_mark: optional size too |                                          |
| 3 - url show data                 | :white_check_mark:full               |                                          |
| 4 - validate url                  | :white_check_mark: full              |                                          |
| 5 - create flight dailog          | :white_check_mark: full              |                                          |
| 6 - image control                 | :white_check_mark: full              | restricted to jpg                        |
| 7 - preview of image              | :white_check_mark: full              |                                          |
| 8 - send new flight to server     | :warning: partial                    | not loagin screen                        |
| 9 - handler error in new flight   | :construction: working               |                                          |
| 10 - display photo                | :construction: working               |                                          |
| 11 - display card in small screen | :x: not                              |                                          |
| 12 - own component to cards       | :x:not                               |                                          |
| 13 - unit test mocked server data | :x:not                               |                                          |
| * Nice to have features           | :construction: working               |                                          |
| * Special features                | :x:                                  |                                          |

#### notes

1 - the table can be customised by making use of the custom themes of the material-tailwind library. this library allows you to pass an object with declarations that will affect all elements belonging to it. 

more info:

[Theming - Material Tailwind](https://www.material-tailwind.com/docs/react/theming)
