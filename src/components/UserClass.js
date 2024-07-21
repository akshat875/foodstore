import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
    };

    render(){
        return (
            <div className='user-card'>
                <li>{this.props.name}</li>
                <li>@learning</li>
            </div>
          )
    }
};
export default UserClass;