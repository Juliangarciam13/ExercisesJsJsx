import './App.css';
import Checkbox from './Components/Checkbox';
import ContactList from './Components/ContactList';
import Counter from './Components/Counter';
import InputController from './Components/Input';
import ListTasks from './Components/ListTasks';
import OpenDiv from './Components/OpenDiv';
import OptionsSelector from './Components/OptionsSelector';
import SizeButton from './Components/SizeButton';
import SelectedColors from './Components/SelectedColors';
import ShoppingCart from './Components/ShoppingCart';
import SortList from './Components/SortList';
import Toggle from './Components/Toggle';
import UserInfo from './Components/UserInfo';
import UserProfile from './Components/UserProfile';
import LikeButton from './Components/CounterLikes';

function App() {
  return (
    <div className="App">
        <ShoppingCart />
        <Counter />
        <Toggle />
        <InputController />
        <OptionsSelector />
        <ListTasks />
        <Checkbox />
        <SelectedColors />
        <OpenDiv />
        <SizeButton />
        <UserInfo />
        <ContactList />
        <UserProfile />
        <SortList />
        <LikeButton />
    </div>
  );
}

export default App;
