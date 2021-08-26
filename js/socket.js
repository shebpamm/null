let socket = io();

socket.on('color change', function(msg) {
    const bg = msg.special.background;
    const fg = msg.special.foreground;
    const accent = msg.colors.color2;
    
    setColors(bg, fg, accent);
  });