import React, {Component} from 'react';
import axios from 'axios';

class Test extends Component {
    state = {
        data: null
    };

    componentDidMount = async () => {
        const response = await axios.get('/api/test');
        console.log("response: ", response);


        const user = await axios.get("/api/user");
        console.log("User response: ", user);

        const message = {
            text: "this is a message",
            name: "kim Possible"
        };
        const postresponse = await axios.post("/api/send-message", message);
        console.log("post response :", postresponse);

    };

    render() {
        return(
            <div>
                <h1>Test Component</h1>
            </div>
        )
    }
}

export default Test;
