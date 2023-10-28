let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #0077b6;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #0077b6;">Aprendo programación web y desarrollo de apps.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
