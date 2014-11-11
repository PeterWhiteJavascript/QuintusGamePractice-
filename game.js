window.addEventListener("load",function() {
  var Q = window.Q = Quintus()
    .include("Scenes, Sprites, 2D, Input, Touch, UI, TMX, Audio")
    .setup({
      width: 720,
      height:480,
      scaleToFit: true
  }).controls().touch();
  Q.setImageSmoothing(false);
  
  //define sene
  Q.scene("level", function(stage){
    Q.stageTMX("su.tmx", stage);
    
  });
  //load assets
  Q.loadTMX("su.tmx", function(){
    Q.stageScene("level",0);
  });
  
});
