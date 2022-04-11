### I decide to make an simple todo app, with just one route

they first i ask my self , when i want to start an project,

- testing (TDD)
- find dev easier
- easier to maintain
- clean code archictecture (to make every make thing easier for big changes like databases,etc)

i wanted to go with Vanilla NODEJS
but since the work was said i could choose whatever framework i want , i decided to go with nestJS , which is actually a NODEJS framework

### I choose NESTJS

the reason

Thanks to dependency injection

- easier to test them, since you can mock dependency easier and we mostly work with module (wich mostly have one job), which are them easier to modify and test
- you can actually use what ever database,server framework you want without have to make big changes and also migrate from one to another without have to make big changes

Easier for every new developer on the prpject

- due to some standard practices and unofficial naming convention, it make easier for every developper to understand or start on an already existing nestJS project.
- due to Typescript used by default (make develpment easier).
- standard way to implement interceptor, dtos (data transfert obect) ,pipes,guard,filter,
- since we have a specific way to write and do things, this make every project easier to maintain and work on

Powerful cli

- with the nestcli you can structure you project easier
- since we mosty use it to generate files and it's contain. we are less expose to make errors.

I decided to use an sqlDatabase for it, i could have choosen MongoDB or whatever

without have to modify a lot.
that's actually the beauty of NESTJS

for the database i will use

TypeORM which support :

- mongoDB
- SQlite
- MySql
- Postgres

it support most used and know database, and we can switch them without breaking changes anything
and with the build in migration we can migrate database easier
