# Console.more
Lightweight tool that lets you log images &amp; custom text.
This code is very basic, and should only be used as an example/backbone.

# Functions

## Console.image();
console.image will load image,
get it's size and log it as if it was text.
It takes 1 input and doesn't return anything.
On Error, it will log error in console.


## Console.style();
console.style takes 1 or more objects,
which it will remember across files.
You can also set such values as "default",
which will be used when calling `console.text()` without 2nd parameter.
If you wish to unset all style values,
call `console.style()` without any parameters.


## Console.text();
Console.text takes 1 or 2 parameters,
depending if "default" value is set in `console.style()`.
It doesn't return any value.


## Check for compatibility
console.more.compatible will hold boolean value.
It will be true/false,
depending if browser supports custom logs.
