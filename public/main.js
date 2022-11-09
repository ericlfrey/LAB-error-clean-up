import '../styles/main.scss';
import {
  htmlStructure, header, startSortingBtn
} from '../components/basicStructure';
import events from '../components/events';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
