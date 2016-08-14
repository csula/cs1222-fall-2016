# Introduction to database

Welcome to the introduction to database class (CS-1222)!

This is the first day of class, please sit and enjoy for the first half of the
class while I'm going over the [syllabus][1] and overall format
of the class.

## Objectives

* [Syllabus][1]
* Introduction to database
* Set up your environment

## Metrics

* Environment set up
* CSNS set up

### What is database?

The purpose of database is to store data like files in your disk. For instance,
you may have a text file, word document or your code sitting at your documents.

Note that these file doesn't vanish when you exit the program -- word or text-editor,
it stays until you open and continue to edit.

In other word, the file is persistent or durable not like data stored in the
memory -- temporary.

What is data stored in memory?

It's often a temporary data like your login status that doesn't need to be durable.

### Why databases?

Programs can read and write the files just fine. So why bother with databases?

There are several kinds of databases:

* Relational databases
* NoSQL databases
* Key-value pair databases

They all are persistent and give us some kind of data structure for storing and
searching our data. Usually much faster and easier than we could in flat files.

With database, it is also possible to have multiple users(programs) modifying the
same data at the same time without stepping on top of each others' toes. In other
word, database is usually distributed.

This distributed attribute is generally not possible with a flat file. If two
programs write to the same file at the same time, often one will overwrite the other.

### Relational databases

Relational databases do even more than above (persistent and distributed).

Relational databases also offers:

* Flexible query languages (SQL) with aggregation and join operations
* Constraints -- rules for protecting consistency of your data

### How does relational databases store data?

Tables!

For example:

| ID | Name | Grade |
| --- | --- | --- |
| 1 | Eric | 93 |
| 2 | Michael | 96 |
| 3 | Mark | 90 |
| 4 | Pierre | 100 |

By looking at table, users will be able to tell what grade a person get.

Now is the time to introduce some of the terminology:

* Table (Relation)
* Record (table row or tuple)
* Field (column or attribute)

### Relational database concepts

* Candidate key
  * Unique identifier per record
  * Can have multiple candidate key
* Primary key
  * Only candidate key(s) as primary key
  * Only one primary key per table

In example:

ID above is a candidate key also a primary key as the rest are not of keys.

### Data types

Determine what type of data a column will store.

A few examples of data types:

* Integer
* String(Text)
* Date/time
* Boolean (true or false)

### Schema

The "definition" of a table:

* Names of table
* Attributes and attribute types
* Constraints on the table
* Dependencies between tables

Above all summarizes the introduction to database, from now we will be setting
up environment on your computer and hopefully get you used to the environment.

### Set up environment

Go to MySQL and download it.

Start MySQL workbench.

[1]: ../syllabus.md
