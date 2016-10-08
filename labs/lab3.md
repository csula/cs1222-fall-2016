# Lab3

Total points: 10pts

Due at the end of class, please raise your hand when you are finished, and we can walk over your implementation.

> I may ask a few question on your implementation to further clarify your understanding.

## Section 7 and 8 (12:00 to 4:30 section)

3. Report the number of female, male members and the total number.  Use proper column names.
5. For each title id, report the number of sound files.
6. The following SQL statement uses an Intersect to list all cities and regions that have both members and artists:
    ```
SELECT         city, region
FROM            Members
INTERSECT
SELECT         city, region
FROM            Artists. 
    ``` 

    > Unfortunately you cannot use Intersect in MySQL. Write a query that would run in the other databases, using a Join to accomplish the  same thing.

11. Produce a list of all of the area codes used in both member's home phones and studio's phones along with a count of the phone numbers for each area code.

**Data Manipulation**

> Please use “select * from …” after each query to show the effect of the query.  

2. The title 'Time Flies' now has a new track, the 11th track 'Spring', which is 150 seconds long and has only a MP3 file. Insert the new track into Tracks table.
5. The area code for Columbus, Ohio has been changed from 277 to 899. Update the homephone and workphone numbers of all members in Members2 table accordingly.
6. Salesperson Bob Bentley has agreed to turn over all his female members to salesperson Lisa Williams whose sales id is 2. Update the Members2 table accordingly. 
7. Members Doug Finney and Terry Irving are forming a new artist to be called "Doug and Terry." Add this record to the Artists table, using ArtistID 13, the address information of Doug Finney, no web address, today's entry date, and no lead source. Don’t hand-code any data for insert that can be looked up from the Members table.
8. Add the appropriate new records to the XrefArtistsMembers table for the artist "Doug and Terry" (see #4). Doug is the responsible party. Don’t hand-code any data for insert that can be looked up from the Members table.
11. Modify the scheme of the Members2 table as the followings:  create a new column  'name'; delete the columns firstnafme lastname.
