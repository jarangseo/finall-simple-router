import React, {Component} from 'react';
//Nav
import Navi from './component/nav/Navi';
//Content
import Home from './component/contents/Home';
import Posts from './component/contents/Posts';
import Photos from './component/contents/Photos';
import User from './component/contents/User';

class App extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 sol-sm-offset-3">
                <Navi/>
                <Home/>
                <Posts/>
                <Photos/>
                <User/>
            </div>
        );
    }
}

export default App;