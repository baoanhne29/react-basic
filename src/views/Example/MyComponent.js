import React from  'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
    // key value
    state = {
       firstName:'',
       lastName:''
    }

    handleChangeFirstName = (event) =>{
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) =>{
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        alert('click me')
    }

    render() {
        console.log('>> call render:', this.state)
        return (
            <>
               <form>
                <label htmlFor="name">First Name: </label><br />
                <input
                 type="text" 
                 value={this.state.firstName} 
                 onChange={(event)=> this.handleChangeFirstName(event)}
                 />
                 <br />
                <label htmlFor="lname">Last Name: </label><br />
                <input
                 type="text" 
                 value={this.state.lastName}
                 onChange={(event)=> this.handleChangeLastName(event)}
                 />
                 <br />
                <input type="submit" value="submit" 
                onClick={(event) => this.handleSubmit(event)}
                />
               </form>

               <ChildComponent
                name={'Nguyen Bao Anh'} 
                age={'23'}
               />
            </>
        )
    }
}
export default MyComponent;



