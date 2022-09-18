import React from 'react';

class State extends React.Component{
    render () {
        const state =1
        console.log (state)
        return (
            <div>
                <h1>Hello , {state}</h1>
                <button></button>
                <button></button>
            </div>
        )
    }
}
export default State