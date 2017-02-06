Constraints:

1. AddNote's state must toggle from visible = false to visible = true
2. CSS won't allow AddNote to have the highest z-index in the app unless it is nested directly under the <App /> component
3. Updating App's state is not updating

Go back to basics: use an action that updates a boolean in the Note Store and notifies the registered components 
