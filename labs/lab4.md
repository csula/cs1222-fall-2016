# Lab 4

Total points: 10pts (each problem 1 point)

Due at the end of class, please raise your hand when you are finished and we can go over your implementation together.

> I may ask a few question on your implementation to further clarify your understanding

Story:

We want to start tracking artist to studio contract now and thus we have to introduce a couple new tables.

In addition, we also want to allow artist to create multiple personal pages. Currently we only store a webaddress under artist table. Maybe a redesign on the Artist table is also required?

> Note that if you need any additional step to answer question such as adding primary key. Please list them under the qeustion as part of your answer.

1. Create `ArtistStudioContract` Table containing ArtistID, StudioID, and a ContractDate (Date type).
2. Change `ArtistStudioContract` table from question 1 to have foreign keys of ArtistID to Artists table and StudioID to Studios table
3. Add SaleID to `ArtistStudioContract` table with foreign key to SalesPeople table
4. Add a record to `ArtistStudioContract` table indicating artist id 1 signed up contract sales person id 3 for studio id 2 and artist id 5 signed up with sales person id 1 with studio id 3 while both having contract date being Artist's entry date
5. Artist ID 1 decide to leave the company, delete Artist id 1 from the Artist table
    * Hint: remember we still have the foreign keys set up from earlier table, if you have to do anything in the table, please list them as well
6. Create `ArtistPages` table containing ArtistID (with ArtistID having foreign key to Artist table) and WebAddress
7. Copy ArtistID and WebAddress from Artist table to ArtistPages table
8. Delete the column `WebAddress` from the Artist table
9. Artist id 5 decide to be a developer and decide to remove himself out of artist table. Delete Artist id 5 from artists table
    * Hint: remember we still have the foreign keys set up from earlier table, if you have to do anything in the table, please list them as well
10. Create a view called ArtistNamePages containg ArtistID, ArtistName, Country and WebAddress from `ArtistPages` table