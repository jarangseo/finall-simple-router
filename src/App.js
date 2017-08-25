import React, {Component} from 'react';
//Nav
import Navi from './component/nav/Navi';
//Content
import Home from './component/contents/Home';
import Posts from './component/contents/Posts';
import Photos from './component/contents/Photos';
import User from './component/contents/User';

import * as actions from './actions';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        let belowComponent = null;

        if(this.props.naviIndex === 0){
            belowComponent = <Home/>
        }else if(this.props.naviIndex === 1){
            belowComponent = <Posts/>
        }else if(this.props.naviIndex === 2){
            belowComponent = <Photos/>
        }else{
            belowComponent = <User/>
        }

        return (
            <div className="col-xs-12 col-sm-6 sol-sm-offset-3">
                <Navi
                    naviData={this.props.naviData}
                    naviIndex={this.props.naviIndex}
                    onNaviClick={this.props.onNaviClick}
                />
                {belowComponent}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    naviIndex: state.naviIndex,
    naviData: state.naviData
});

const mapDispatchToProps = (dispatch) => ({
    onNaviClick: (idx) => dispatch(actions.naviClick(idx))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);