import './commands';
// @ts-ignore
import addContext from 'mochawesome/addContext';

Cypress.on('test:after:run', (test, runnable) => {
  let videoName = Cypress.spec.name;
  videoName = videoName.replace('/.ts.*', '.ts');
  const videoUrl = 'videos/' + videoName + '.mp4';

  addContext({test}, videoUrl);
});
