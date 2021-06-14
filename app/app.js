const socket = io('ws://localhost:3003');
console.log('here');

socket.on('message', (text) => {
  const el = document.createElement('li');
  el.innerHTML = text;
  document.querySelector('ul').appendChild(el);
});

document.querySelector('button').onclick = () => {
  console.log('here');
  const text = document.querySelector('input').value;
  socket.emit('message', text);
};
