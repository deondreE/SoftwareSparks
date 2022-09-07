# Project Structure
---

## packages/web
---

#### features
---
The massive change between these two structures is the features folder. This folder works very similarly to the pages folder from the intermediate structure, but instead of grouping by page we are instead grouping by feature. Already this is easier to understand as a developer since in 90% of cases when you are going to add new code to a project you are either going to implement a new feature, such as adding user accounts, or you are going to modify an existing feature, such as adding the ability to edit todos. This makes working with the code easier since all the code for each feature is collocated in the same place making it easy to update and add to.

The actual structure of this folder follows the pages structure in that there are individual folders for each feature (authentication, todos, projects, etc.) and inside those folders are all the files for that feature. The biggest difference you will notice between the pages folder and the features folder, though, is that within each feature you have another set of folders. This folder structure for each feature is a complete copy of all the folders inside the src folder (other than the features folder obviously) and an index.js file. This means that within your feature all your code can be organized by type (context, hook, etc.) while still be collocated together.

The index.js file is then used as a way to expose a public API for everything that is usable outside the feature folder for that given feature. It is common that you will want to have a bunch of code that is private to the specific feature you are working on, but with JS if you create an export in a file it can be used in any other file you want. In larger projects this can become a problem if we only want to expose a few components/methods for our feature which is where the index.js file comes in. This file should export only the code you want to be accessible outside the feature and then every time you use code for this feature in your application you should import it from the index.js file. Doing this is really nice since your global code footprint is much smaller this way and using the features becomes easier since you have a limited API to work with. This can even be enforced by an ESLint rule which disallows any import from a feature folder that doesn't come from index.js.

#### components
---

Another big change you will notice with this example is that our components folder is further broken down into subfolders. These subfolders are really useful since they help keep your components organized into different sections instead of just being one massive blob of components. In our example we have a ui folder which contains all our UI components like buttons, modals, cards, etc. We also have a form folder for form specific controls like checkboxes, inputs, date pickers, etc.

You can customize and breakdown this components folder however you see fit based on your project needs, but ideally this folder shouldn't get too large as many of your more complex components will be stored in the pages folder.

#### Pages
---

The other major change with this new structure is the pages folder. This folder now only contains one file per page and the reason for this is that all the logic for the features on the pages are in the features folder. This means that the files in the pages folder are actually quite simple since they just glue together a few feature components and some general components.


#### layouts
---

The first new folder is the layouts folder and this one is really simple. This is just a special folder for placing any layout based components. This would be things like a sidebar, navbar, container, etc. If you application only has a handful of layouts then this folder really isn't needed and you can just place the layout components in the components folder, but if you have multiple different layouts used across your application this is a great place to store them.

#### hooks
---

The final folder that is a repeat from the simple folder structure is the hooks folder. This folder is pretty much identical to the previous hooks folder, but instead of storing every hook in your application it will only store the global hooks that are used across multiple pages. This is because all page specific hooks are stored in the pages folder.


#### lib
---

The lib folder is another fairly simple folder. This folder contains facades for the various different libraries you use in your project. For example, if you use the axios library then this folder would contain a file for that axios library that creates your own API overtop of the axios API which you then use in your application. This means that instead of importing axios directly in your project you would import the file from this folder associated with axios.

Doing this makes is much easier to update, and replace libraries since all the library specific code is in one place in your application. It also makes it easier to customize third party libraries to your own need. This pattern is called the Facade Pattern which you can learn more about in my Ultimate Facade Pattern Guide.


#### services
---


The final new folder is the services folder. This folder contains all your code for interfacing with any external API. Generally, on larger projects you will have many different APIs you need to access and this folder is the place to put the code that interacts with those APIs. Again this helps clean up your code since instead of littering a bunch of API interaction code in your application it is all within this one folder.

#### context
---


The context folder stores all your React context files that are used across multiple pages. I find on larger projects you will have multiple context you use across your application and having a single folder to store them is really useful. If you are using a different global data store such as Redux you can replace this folder with a more appropriate set of folders for storing Redux files instead.


#### data
---

The data folder is similar to the assets folder, but this is for storing our data assets such as JSON files that contain information used in our code (store items, theme information, etc). This folder can also store a file that contains global constant variables. This is useful when you have lots of constants you use across your application, such as environment variables.


#### utils

The final new folder is the utils folder. This folder is for storing all utility functions such as formatters. This is a pretty straightforward folder and all the files in this folder should likewise be straightforward. I generally like to only store pure functions in this folder since if a utility function has side effects then it is most likely not just a simple utility function. Obviously there are exceptions to this rule, though. Also, if you are unfamiliar with pure functions check out my complete pure functions guide.