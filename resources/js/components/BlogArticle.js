import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class BlogArticle extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        // axios.get('/api/blog'+ this.props.match.params.id).then(response   => {
        //     this.setState ({
        //         post: response.data[0]
        //     });

           
        // }).catch(error => {
        //     console.log(error);
        // })
    }

    render() {
        return (
            <div>
              
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<BlogArticle />, document.getElementById('example'));
}
