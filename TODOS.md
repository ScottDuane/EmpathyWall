Functionality:

[] Search tags only
[] Suggested tags during note creation
[] Tag creation & match creation during note creation
[] About modal

Styling:

[x] Navbar
[] Tags in short show
[] Long show
[] Add button

Other:

[] Hosted on AWS
[] custom domain
[] index searchable columns with :btree

funny bug - note.tags showing up as undefined, only when using filterByTag. followed data trail from note_actions -> note_store to reset this.filteredNotes -> render method -> note_store to getNotes.  nothing seemed awry anywhere. did a test upon page load to see if this.notes[0].tags was defined -- it was. double checked by going through flux cycle again, but this time stopped to check this.getNotes after filtering.  no more this.filteredNotes[0].tags...but this.notes[0].tags is still fine.  realized: the tag objects were created before the association note.tags was there, but *after* tag.notes was there.  so, the note objects obtained via tag.notes were *different* that those obtained by just querying the note table in database.  this.filteredNotes was getting its notes from this.tags, *not* this.notes.  so, it didn't have the needed attribute.  fixed by resetting database.  
