# PRELECT

The Prelect Relational Expression Language Experiment in Computing Theory is a
general purpose programming language for rapid application development. While
it is truly general purpose, it is a dialect of SQL. If you already know SQL,
then take a couple hours to master PRELECT and add another programming language
to your resume.

PRELECT relies on sqlite as its virtual machine, transpiling the code into SQL
statements that are executed by the WebAssembly-compiled instance of sqlite. As
such, PRELECT will be able to run in a web browser.

## Features

### [Monoparadigmatic Tabularity](https://frithsun.substack.com/p/disoriented-programming)

Enforcement of paradigms with clear and understood rules and patterns is
necessary for helping programmers frame and solve their problems. Object
oriented programming is essentially "disoriented" programming, as every
component in a codebase has its own bespoke interface. It's like trying to build
with Play-Doh instead of Legos. Technically, you can do more with Play-Doh. But
in practice it's much harder to make cool things that don't fall apart.

Don't be scared off by strict tabularity. Once it clicks, you'll fall in love.

### [Progressive Programming](https://frithsun.substack.com/p/progressive-programming)

PRELECT is designed in four parts that one can learn incrementally. If you only
learn how to create tables with formula fields, you can solve a lot of problems.
If you learn how to design custom queries for your formula fields, you can solve
even more problems. If you learn how to use prelect routines to perform
procedural tasks and create events, you can automate your solutions. And if you
learn how to create your own custom types, you can solve every problem.

### [Primitive Internationalization](https://frithsun.substack.com/p/i18n)

Rather than approaching internationalization as an afterthought, PRELECT comes
in all seven UN languages (and more later), with the ability to localize not
only strings but the names of the tables, fields, prelects, and types. You no
longer need to learn the English language in order to confidently program.

### [Simplicity](https://frithsun.substack.com/p/prelect)

The entire programming language's syntax fits on one cheat sheet page that you
can print and tape beside your monitor while you're learning. You won't get very
far without learning a few of the standard library queries, but that's beside
the point. What's important is that you can be confident that you can truly
understand how the language works within minutes instead of months.

## Roadmap

This project is written in Javascript, so that it may work entirely within a
web browser relying on wasm-compiled sqlite.

#### Milestone 1: Transpiler

Create the parser that generates SQL code from PRELECT code, preserving the line
numbers for debugging, with integration with a language server, syntax
highlighting, and best practices in mind.

#### Milestone 2: Environment and Event Loop

Create the environment tables, output procedures, and event loop table necessary
for a minimal but functional programming environment.

#### Milestone 3: Modules

Implement the ability to import and export modules.

#### Milestone 4: Basic Native Library

Implement the minimum basic native library functionality necessary for the code
examples to work, and then build out from there.

#### Milestone 5: Localize Native Library

Implement the functionality to localize the native library and translate all of
the queries into the seven UN languages. Be able to write and run example code
in a foreign language.

#### Milestone 6: Advanced String Handling

The string type must necessarily be a sort of sublanguage within the language,
integrating changes to the parser to accommodate regular expressions.

#### Milestone 7: Terminal REPL

Create an interactive terminal repl that will eventually expand into a complete
IDE.

#### Milestone 8: Browser REPL

Share as much library code with the terminal version as possible, while
eventually expanding into a complete browser-based IDE.

The prelect.org website should be an application, enticing the visitor
to create dynamic tables and solve problems with PRELECT.

#### Milestone 9: Package Manager

The future of language development is in superior package management and IDE
functionality. But the language must be designed with the next generation of
package management and IDE functionality in mind.

## Getting Started

TODO

## Get Involved

I need help. A lot of help.

Please join our discord server and become part of the team.

https://discord.gg/3vGxPS5GxX

## Contributors

* Lord Frithsun (@frithsun)

## Sponsors

Nobody.
