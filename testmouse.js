const style = document.createElement('style');
style.textContent = `
@keyframes fadeInOut {
  0%, 100% {
    opacity: 0;
  }
  20%, 80% {
    opacity: 1;
  }
}

span {
  position: absolute;
  pointer-events: none;
  filter: drop-shadow(0 0 15px rgba(0,0,0,0.5));
  animation: fadeInOut 1s linear infinite;
}

span::before {
  content: '34';
  position: absolute;
}
`;
document.head.append(style);


