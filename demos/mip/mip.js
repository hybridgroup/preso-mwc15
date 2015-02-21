var Cylon = require('cylon');

Cylon.api("http", {host: "0.0.0.0", ssl: false});

Cylon.robot({
  name: 'olliebot',
  connections: { bluetooth: {adaptor: 'central', uuid: 'd03972a24e55', module: 'cylon-ble'}},
  devices: {mip: {driver: 'mip'}},

  move: function(direction) {
    var my = this;

    switch (direction) {
      case "up":
        my.mip.setGameMode(my.mip.Games.Roam);
        break;
      case "down":
        my.mip.stop();
        break;
      case "left":
        my.mip.setGameMode(my.mip.Games.Dance);
        break;
      case "right":
        my.mip.setGameMode(my.mip.Games.Default);
        break;
    }

    return "ok";
  },

  commands: function() {
    return {
      move: this.move
    };
  },

  work: function(my) {
    my.mip.setHeadLED(2, 2, 2, 2);
  }
}).start();