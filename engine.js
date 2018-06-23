JCRPGE=function(){
  const DEFAULT_CTX_WIDTH=600;
  const DEFAULT_CTX_HEIGHT=600;
  const CTX=document.createElement("CANVAS");
  var MAP=null;
  const PROPERTY_SETTER={
    id:function(obj, id){
      obj.id=id;
    }
  }
  const ENTITIES=[];
  function setProperties(obj,properties){
    for(var v in properties){
      PROPERTY_SETTER[v](obj, properties[v]);
    }
  }
  function setBulkProperties(obj, properties){
    if (properties.constructor === Array){
      for(var p in properties){
        var set=properties[p];
        setProperties(obj,set);
      }
    }
  }
  Entity=function(gfx, info){
    setBulkProperties(this, [stats, moveSet, gfx, info]);
    this.render = function(){
      ctx.drawImage(imgList[this.img], this.srcX, this.srcY, this.srcWidth,
        this.srcHeight, this.x, this.y, this.srcWidth, this.srcHeight);
    }
    this.update=function(){
      this.render();
    }
    ENTITIES.push(this);
  }
  Creature=function(stat, moveset, gfx, infoS){
  }
  function setCanvas(width,height){
    CANVAS.id="ctx";
    canvas.width=(width==null)?DEFAULT_CTX_WIDTH:width;
    canvas.height=(height==null)?DEFAULT_CTX_HEIGHT:height;
    document.body.appendChild(CANVAS);
  }

  function startGame(){

  }

  return {

  }
}
var game=JCRPGE();
var obj1={
  name:"bull"
}
var props={
  id:45256
}
