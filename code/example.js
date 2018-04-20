// Set styles that console will remember.
console.styles({
  // Default style will be used every time when console.text() won't have 2nd argument passed in.
  default: [
    "color: gray;",
    "font-size: 24px;",
    "font-decoration: underline;"
  ],
  header: [
    "color: #400080;",
    "font-size: 70px;",
    "font-weight: bold;",
    "text-shadow: 1px 1px 5px rgb(64, 0, 128);",
    "filter: dropshadow(color=rgb(64, 0, 128), offx=1, offy=1);"
  ]
});

// Log custom text.

const someStyleFromThisFile = [
  "font-size: 50px;",
  "color: red;"
]

if(console.more.compatible){
  console.text("Hello, World!\n(Default)"); // This will use "default" argument, which we passed in earlier.
  console.text("Hello, World!\n(Header)", console.more.styles.header);
  console.text("Hello, World!\n(Local Style)", someStyleFromThisFile);
  console.image("https://i.pinimg.com/originals/11/8e/6f/118e6f39fac9344d6589c84d5ee9e667.jpg");
} else {
  console.log("This browser does not support custom logs.");
}
