# Console.more
Lightweight tool that lets you log images &amp; custom text.<br>
This code is very basic, and should only be used as an example/backbone.

# Web Docs
For prettier documentation go [here.](https://tomburgs.github.io/console.more/)

# Functions

Console.image();
----
console.image will load image,<br>
get it's size and log it as if it was text.<br>
It takes 1 input and doesn't return anything.<br>
On Error, it will log error in console.


Console.styles();
----
console.styles takes 1 or more objects,<br>
which it will remember across files.<br>
You can also set such values as "default",<br>
which will be used when calling `console.text()` without 2nd parameter.<br>
If you wish to unset all style values,<br>
call `console.styles()` without any parameters.


Console.text();
----
Console.text takes 1 or 2 parameters,<br>
depending if "default" value is set in `console.styles()`.<br>
It doesn't return any value.


Check for compatibility
----
`console.more.compatible` will hold boolean value.<br>
It will be true/false,<br>
depending if browser supports custom logs.
