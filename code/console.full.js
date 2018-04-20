console._agent = function(){
  let agt = navigator.userAgent;
  if(agt.indexOf("Opera") !== -1){
    return false;
  } else if(agt.indexOf("MSIE") !== -1){
    return false;
  } else if(agt.indexOf("Edge") !== -1){
    return false;
  } else if(agt.indexOf("Chrome") !== -1){
    return true;
  } else if(agt.indexOf("Safari") !== -1){
    return false;
  } else if(agt.indexOf("Firefox") !== -1){
    return true;
  } else {
    return false;
  }
}

console.more = {
  compatible: console._agent() ? true : false,
  version: "1.0.0",
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
  this._render(src, (err, dimensions) => {
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

console._render = function(src, callback){
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
