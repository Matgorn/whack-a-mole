import './main.scss';
import createLayout from './app/createLayout';
import handleControl from './app/handleControl';
import handleTime from './app/handlers/handleTime';
import placeMole from './app/handlers/placeMole';
import runApp from './app/runApp';
import runSettings from './app/runSettings';
import gameSettings from './app/gameSettings';

//Run settings
function startApp() {
	runSettings({
		createLayout,
		handleControl,
		handleTime,
		placeMole,
		runApp,
		gameSettings,
	});
};

startApp();

export { startApp } ;
