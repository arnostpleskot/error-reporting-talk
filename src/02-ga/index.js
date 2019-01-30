import ReactGA from 'react-ga';

ReactGA.initialize('UA-133303965-1');

window.addEventListener('error', ({ error }) => {
    console.error("Custom error reporter", error);
  ReactGA.event({
    category: 'error',
    action: error.message
  });

});
