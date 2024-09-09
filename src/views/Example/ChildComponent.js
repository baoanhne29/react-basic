import React from  'react';

class ChildComponent extends React.Component {
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
        console.log('>>> check data input: ', this.state)
    }

    render() {
        console.log('>>> check props: ', this.props)
        let {name, age} = this.props;
        return (
            <>
               <div>Child Component Name: {name} - {age} </div>
            </>
        )
    }
}
export default ChildComponent;



