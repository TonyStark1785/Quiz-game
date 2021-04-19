class Form {

  constructor() {
    this.input1= createInput("Enter your Name");
    this.button = createButton('Submit');
    this.input2 = createInput('Enter your answer');
    this.q=createElement('h3')
    this.o1=createElement('h4')
    this.o2=createElement('h4')
    this.o3=createElement('h4')
    this.o4=createElement('h4')
  }
  hide(){
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    var title = createElement('h1')
    title.html("Quiz Game");
    title.position(350, 0);

    this.input1.position(150, 230);
    this.input2.position(350, 230)
    this.button.position(290, 300);
    this.q.html("Which block in Minecraft if placed in the sea bed, pulls an entity downwards?")
    this.q.position(100, 80)
    this.o1.html("1| Bedrock")
    this.o1.position(150, 100)
    this.o2.html("2| Crying Obsidian")
    this.o2.position(150, 130)
    this.o3.html("3| Magma block")
    this.o3.position(180, 100)
    this.o4.html("4| Soul sand")
    this.o4.position(180, 130)
    
    this.button.mousePressed(()=>{
      this.input1.hide();
      this.input2.hide();
      player.name = this.input1.value();
      player.distance=this.input2.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      
    });

  }
}
