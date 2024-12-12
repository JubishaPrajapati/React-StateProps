import React, { useState } from "react";
import axios from "axios";

const AxiosPost: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [response, setResponse] = useState(null);     //to hold the data returned from post req


    // handleSubmit func sends a POST request via Axios to the server.
    // it makes the API request to 'url' and sends static data like title, body, and userId to the server.



    const handleSubmit = async (e: React.FormEvent) => {    //e is the event object that is passed to the event handler (handleSubmit)
        //React.FormEvent contains information about the form submission event
        e.preventDefault();   //to prevent default page reload

        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {     //the second arg is an object or data that is sent to the server
                title: name,
                body: 'This is fetching data in axios',
                userId: 2,
            })
            setResponse(res.data);
        } catch (error) {
            console.error("Error making post req", error);
        }
    }
    return (
        <div>
            <h3>This is fetching data using axios post method</h3>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit" >Submit</button>
            </form>
            {response && (
                <div>
                    <h3>Response Data:</h3>
                    {/* <pre> tag is used to display text in a "preformatted" manner */}
                    {/* JSON.stringify()  converts the response into a string. */}
                    {/* 2 specifies the number of spaces to use for indentation */}
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>

    )
}
export default AxiosPost;


// POST sends the data (title, body, userId) to the server to create a new post.
// The server responds with the newly created post (including an ID), which is then stored in the response state and displayed.