
import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
const firebaseConfig = {
  apiKey: "AIzaSyDxRQ9kv1_px_9Q3hJ-sfTX-brUAfhxVB0",
  authDomain: "myproject-e0290.firebaseapp.com",
  projectId: "myproject-e0290",
  storageBucket: "myproject-e0290.appspot.com",
  messagingSenderId: "494456658484",
  appId: "1:494456658484:web:7801557d033a32f8d54861",
  measurementId: "G-CMDC7F493Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div >
      <Provider store={appStore}>
      <Body/>

      </Provider>
      
    </div>
  );
}

export default App;
