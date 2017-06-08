## Empathy Wall

<a href="https://empathy-wall.herokuapp.com">Live Link</a>

This is a small portfolio piece that recreates the real-life Empathy Walls that showed up in BART stations and elsewhere in the Bay Area after the election. 

**Technologies**: Empathy Wall runs Rails on the backend and uses React with a Flux architecture on the frontend. It intentionally does not use any auth, to keep things anonymous and therefore truer to the original "real life" walls. 

**Auth**: this app intentionally does not use any auth, to keep things anonymous and therefore truer to the original "real life" walls. 

**Database**: we use a MySQL database. A relational database made the most sense for this project. It likely will never need to scale, and the relationship between tags and notes is easily represented with a join table. 

**Tag autocomplete**: when the user creates a note, they have the option of adding tags. The app autocompletes as the user types a tag, using the following mechanism:

- Upon load, all tags are fetched and stored in the `TagStore` as a sorted array
- When the user types or deletes a character in the tag field, the partial tag is passed into the `TagStore`, where a modified binary search is used on the list of tags
- The first partial match is returned and appears as the "end" of the tag 

**Fuzzy search**: when the user searches for notes, a fuzzy/inexact search is performed on the content and tags of each note, using a customized version of the `fuse.js` library. 

