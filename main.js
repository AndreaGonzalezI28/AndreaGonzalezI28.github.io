let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(1500)
  .typeString('Física biomédica ')
  .pauseFor(4800)
  .deleteChars(10)
  .start();
