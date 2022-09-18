
import React, {Component} from 'react';
class Navbar extends Component {
    render() {
        console.log(this)
        return (
            <div className='box'>
                <img src={this.props.title.image} alt='fruit'/>
                <h2>{this.props.title.name}</h2>
                

            </div>
        )
       
    }
}
export default Navbar