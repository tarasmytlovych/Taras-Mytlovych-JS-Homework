let openedWindow = window.open("about:blank", "about:blank", "width=200,height=200");
await new Promise(resolve => setTimeout(resolve, 2000));

openedWindow.resizeTo(500, 500);
await new Promise(resolve => setTimeout(resolve, 2000));

openedWindow.moveTo(200, 200);
await new Promise(resolve => setTimeout(resolve, 2000));

openedWindow.close();
