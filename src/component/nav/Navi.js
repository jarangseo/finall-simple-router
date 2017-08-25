import React, {Component} from 'react';
import NaviItem from './NaviItem';

class Navi extends Component {
    render() {
        const {naviData, naviIndex, onNaviClick} = this.props;

        let naviItem = naviData.map((item, i) => {
            let active = i === naviIndex,
                classes = active ? 'active ' : '';

            return(
                <li key={i.toString()} className={`${classes}`}>
                    <a onClick={onNaviClick.bind(this,i)}>
                        {item}
                    </a>
                </li>
            );
        });

        return (
            <ul className="nav nav-tabs" role="tablist">
                {naviItem}
            </ul>
        )
    }
};

export default Navi;

