# PRELECT

The Prelect Relational Expression Language Experiment in Computing Theory is a
general purpose programming language for rapid application development. While
it is truly general purpose, it is a dialect of SQL. If you already know SQL,
then take a couple hours to master PRELECT and add another programming language
to your resume.

PRELECT relies on sqlite as its virtual machine, transpiling the code into SQL
statements that are executed by the WebAssembly-compiled instance of sqlite. As
such, PRELECT will be able to run in a web browser.

## Status

I haven't really started programming anything yet.

## Features

### Monoparadigmatic Tabularity

Enforcement of paradigms with clear and understood rules and patterns is
necessary for helping programmers frame and solve their problems. Object
oriented programming is essentially "disoriented" programming, as every
component in a codebase has its own bespoke interface. It's like trying to build
with Play-Doh instead of Legos. Technically, you can do more with Play-Doh. But
in practice it's much harder to make cool things that don't fall apart.

Don't be scared off by strict tabularity. Once it clicks, you'll fall in love.

### Progressive Programming

PRELECT is designed in four parts that one can learn incrementally. If you only
learn how to create tables with formula fields, you can solve a lot of problems.
If you learn how to design custom queries for your formula fields, you can solve
even more problems. If you learn how to use prelect routines to perform
procedural tasks and create events, you can automate your solutions. And if you
learn how to create your own custom types, you can solve every problem.

### Primitive Internationalization

Rather than approaching internationalization as an afterthought, PRELECT comes
in all seven UN languages (and more later), with the ability to localize not
only strings but the names of the tables, fields, prelects, and types. You no
longer need to learn the English language in order to confidently program.

### Prelects

The prelect is an innovative alternative to stored procedures which works with
rather than against the tabular paradigm. Every prelect is implicitly a "try"
block, with the two big differences being that in addition to "throwing" errors,
you can "pitch" decisions to labeled catch blocks. This creates more flexible,
readable, and debuggable code.

### Simplicity

The entire programming language's syntax fits on one cheat sheet page that you
can print and tape beside your monitor while you're learning. You won't get very
far without learning a few of the standard library queries, but that's beside
the point. What's important is that you can be confident that you can truly
understand how the language works within minutes instead of months.

## Syntax

There are four categories in PRELECT: the table, the query, the prelect, and the
type. A prelect (procedural select) is a block of procedural code. In the name
of simplicity and internationalization, the language has no keywords at all. It
does, however, have queries that behave analogously to keywords and operators in
other languages.

### Comments

There are three types of comments: `//` single line, `/* ... */` multiline, and
`///` tooltip.

When a tooltip commment appears before a table, query, prelect, or type
definition, it can be integrated into IDEs.

### Tables

A table can be defined with the following syntax:

    tableName<inherit>(definitions) [data]

The `inherit` bracket allows one to inherit the structure of the table from an
existing table. The `definitions` bracket allows one to define the table's
fields. The `data` bracket allows one to insert data into a table.

    // define table of phrases associated with numbers
    fizzBuzz(#num, $phrase) [
        3, `fizz`
        5, `buzz`
    ]

Much can be implied. For instance, we could just write:

    `tableName`

This would create a table with a single `tableName` field and no values.

We can also do the opposite:

    [`fiver`, 42]

This creates an anonymous table with an unnamed string field and an unnamed
integer field. Queries can be included in the definitions, allowing you to have
a row in your table that's programmatically derived from other rows, very
similar to using a spreadsheet.

### Queries

A query can be defined with the following syntax:

    queryName<returnType>(definitions) { query definition }

The `returnType` restricts the query to only returning a particular type of
data, or a child type of that type. It is optional. The `definitions` bracket,
which is also optional, defines the parameters that can go into the query.

Much can be implied here, too. For instance, `{+(1,1)}` would return `2`.

PRELECT has no operators. As shown, you don't do `1 + 1`. You use the `+()`
query from the standard library. Later versions may offer things like that as
syntactic sugar, but for the language core, everything is tables and queries.

Queries are just SQL queries with a modern, abbreviated syntax.

    // define table of phrases associated with numbers
    fizzBuzz(#num, $phrase) [
        3, `fizz`
        5, `buzz`
    ]

    // define query to fizzbuzzify a number
    fizzBuzzify<$>(testNumber) {
        +(phrase) AS phrase
        <- fizzBuzz fb
        ?? =(%(testNumber, fb.num), 0)
    }

The `SELECT` is always implied. The `<-` is analogous to `FROM`. If it's not
present then it's evaluated as an expression, as with the previous `{+(1,1)}`
example. The `+()` query is overloaded, concatenating strings when strings are
passed to it. The `??` is for `WHERE`. You can also perform joins, group by 
(`&&`), order by (`%%`), and everything else you're familiar with from SQL.

### Prelects

When PRELECT is in all caps, it's the language. When it's not, then it refers to
the procedural chunks of code (procedural selects). Data can only be defined and
manipulated within a prelect. When you begin coding a file, that file exists
within an implied prelect. You can, of course, create prelects in your prelects.

    !prelectName<table/query>(definitions) { procedural code }

When a table or query is included in the `table/query` bracket, then the code
is iterated over each row of the table or query output, with the fields as
variables. If it's a table, then the variables can be modified, modifying the
table. If it's a query, then the variables are read-only, necessarily.

The `definitions` bracket enables parameters and also any other variables one
will use. There is no way to define a variable within the body of the prelect.
Modification survives iteration.

Much can be implied.

    !<fizzBuzz> { UPPER(phrase) -> phrase }

This iterates over the `fizzBuzz` table and converts all of the phrases to
uppercase.

Control flow within PRELECT is exclusively query-driven. There's an `?(x,y,z)`
query in the standard library which evaluates x and then evaluates y if true and
z if false. While queries can't manipulate data, they can throw (and pitch) the
equivalent of exceptions that can guide control flow and manipulate data.

    !testEven(x) {
        ?(%(x,2), !>(is_odd), >>(is_even))
    } is_odd {
        info [`is odd!`]
    } is_even {
        info `is even`
    }

When you throw `!>(label)` a label, then it's raised as an error that causes a
rollback and halts execution if not caught and handled. If you merely pitch
`>>(label)` a label, then the program carries on if it's not caught.

Every prelect can be thought of as a `try/catch` block. The cardinal difference
is that in addition to throwing errors one may also "pitch" control flow
decisions. The operator-style standard queries, the iterativity of prelects,
and the pitching replace the conventional loops and conditionals found in other
languages.

Every program begins with some environmental elements, three of them being the
`info`, `log`, and `error` tables. In the previous example, we append to the
`info` table, which is how one reports to the terminal. As you see here, the
`[ ]` brackets are optional on single-line inserts.

### Types

PRELECT's native types are the boolean (`?`), the integer (`#`), the decimal
(`##`), and the string (`$`). All other types begin with (`@typeName `). Fields
are defined in tables, queries, and prelects, and all fields must have a type.
Beneath the native types with special type characters are the primitive types:
@#8, @#16, @#32, @#64, @#128, @.32, and @.64, as per the WebAssembly
specification. Everything is inherited from one of these primitives.

Types are comprised of a series of required methods. Additional methods can be
provided as well. The required methods determine how values of your type
interface with the tabular programming environment.

    @typeName<inherit>(definitions) {
        !! { } // static type initialization
        -> { } // set - instance initialization
        <- { } // get - retrieve value
        %% { } // type sorting
        && { } // matching
        ## { } // hash generation
        $$ { } // formatted representation
        ^^ { } // finalize / delete
    }

Custom types are very powerful. You can customize how equality `=()` works by
defining the type sorting method. You can customize how identity `==()` works
by defining the hash method. Tables, queries, and prelects can be defined within
a custom type to achieve sophisticated multi-table object modeling,
event-triggered manipulation of the value, and more.

We'll go with a simple example, defining a `SALARY` type:

    @SALARY<##>(##amount) {
        -> {
            ?(<(@,0), !>(negative_salary, `Salary can't be negative!`))
        }
    }

    salaries($name, @SALARY salary) [
        `huey`, 64000.00
        `dewey`, -63000.00
    ]

This inherits the behavior of a decimal number but adds a conditional check
that delivers an error if one attempts to enter a negative salary. The table
definition would result in an uncaught error that would terminate the program,
as dewey's salary is negative.

## Getting Started

TODO

## Get Involved

I need help. A lot of help.

Please join our discord server and become part of the team.

https://discord.gg/3vGxPS5GxX

## Contributors

* Lord Frithsun (@frithsun)
