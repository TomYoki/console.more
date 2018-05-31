"use strict";
const ver="1.1.0";
const compatible={
	"Chrome": true,
	"Firefox": true,
	"Opera": false,
	"Safari": false,
	"MSIE": false,
	"Edge": false
};

const agent = () => {
  let agt = navigator.userAgent;
  if(agt.indexOf("Opera") !== -1){
    return compatible["Opera"];
  } else if(agt.indexOf("MSIE") !== -1){
    return compatible["MSIE"];
  } else if(agt.indexOf("Edge") !== -1){
    return compatible["Edge"];
  } else if(agt.indexOf("Chrome") !== -1){
    return compatible["Chrome"];
  } else if(agt.indexOf("Safari") !== -1){
    return compatible["Safari"];
  } else if(agt.indexOf("Firefox") !== -1){
    return compatible["Firefox"];
  } else {
    return false;
  }
}

let render = (src, callback) => {
  if(!src){
    callback("Missing parameters");
    return;
  }
  let img = new Image();
  img.src = src;
  img.onload = function() {
    callback(null, {width: this.height, height: this.height});
  }
}


console.more = {
  compatible: agent() ? true : false,
  version: ver,
  styles: {}
}

console.styles = function(styles){
  if(styles && typeof styles !== "object"){
    throw "ERROR: INVALID STYLES (Console.more)";
    console.more.styles = null;
  } else {
    console.more.styles = styles;
  }
}

console.text = function(text, style){
  if(!style || typeof style !== "object"){
    if (console.more.styles && console.more.styles.hasOwnProperty("default")) {
      console.log(`%c${text}`, console.more.styles.default.join(""));
    } else {
      throw "ERROR: NO STYLE SPECIFIED (Console.more)";
    }
  } else {
    console.log(`%c${text}`, style.join(""));
  }

}

console.image = function(src){
  if(!src){
    throw "Missing source.";
  }
  render(src, (err, dimensions) => {
    let size = dimensions.width > dimensions.height ? dimensions.width : dimensions.height;
    let style = [
      "font-size:"+size+"px;",
      "background-image: url("+src+");",
      "background-repeat: no-repeat;"
    ]
    console.log("%c           ",style.join(""));
    return;
  });
}