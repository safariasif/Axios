import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
class User extends Component {
    state = {  
        users:[]
    }
     async componentDidMount()
    {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const newitem2= response.data;
        this.setState({users:newitem2});
    } 
    render() { 
        return (
            <>
                <div className="row">
                    {this.state.users.map((item,index)=>{
                        return(
                            <div className='col-lg-3 border pt-3'>
                                <h5 className='text-success px-2'>UserID :{item.userId}</h5>
                                <h6 className='text-warning px-2'>ID :{item.id}</h6>
                                <p className='px-2'>{item.title}</p>
                                <p className='px-2'>{item.body}</p>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}
export default User;