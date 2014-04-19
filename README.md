Bitwig Javascript API Stubs
================

**This is not finished! Some parts are missing. If you download this now, check back later to see if more progress!**

A manual conversion of the Bitwig Control Surface Scripting API into javascript method stubs complete with JSDoc. If you're working on any controller scripts this should be super helpful to you!

### Installation
Click "Download Zip" on the right side of this page. Extract to any folder you like.

##### [JetBrains WebStorm](http://www.jetbrains.com/webstorm/)
1. Open Preferences -> Javascript -> Libraries -> "Add..."
2. Enter a "Name" for this library (Bitwig API)
2. Add the "src" folder from the download to the list with the "+" sign and clicking "Attach Directory"
3. (OPTIONAL) Disable HTML/HTML5 libraries

Optionally you may want adjust this setting for better code completion
1. Open Preferences -> Javascript
2. Disable "Weaker type guess for completion"

##### [Komodo Edit](http://komodoide.com/komodo-edit/)
1. Go to Edit -> Preferences -> Languages -> JavaScript
2. Add the "src" folder from the download to the list with the "+" sign.

### Notes
Feel free to try using this in other IDEs/editors and let me know how well it works. WebStorm seems to have the best support right now with full autocompletion and type-hinting. Komodo Edit has support for autocompletion but no type-hinting .. but it's free!

Also, you may be wondering why a copy of the Bitwig Control Surface Scripting API doc files are included with this. It is so that when a new version comes out I can bring in those files and see what has changed. This way I can keep up-to-date with any changes that are made to the API!