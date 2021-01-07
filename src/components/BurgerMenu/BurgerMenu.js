import React from 'react';
import './css/burger.css'

class Burger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
       
    }
    handleClickBurger = () => {
        let burgerState = this.state.isActive;
        if(burgerState === false) {
            this.setState({
                isActive: true
            })
        }
        else {
            this.setState({
                isActive: false
            })
        }
        return this.props.onClickBurgerMenu(burgerState);
    }
    render() {
       return (
         <div className={`burger-container ${(this.state.isActive === true) ? "b-c__a" : ""}`} onClick={this.handleClickBurger}>
             <span className="burger-child"></span>
             <span className="burger-child"></span>
             <span className="burger-child"></span>
         </div>
       )
    }
  }
  export default Burger;