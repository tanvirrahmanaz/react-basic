import { div } from 'framer-motion/client';
import React from 'react';
import { useState } from 'react';

const State = () => {
    const [count, setCount] = useState(0);
    const [username, setUsername] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [todo, setTodo] = useState(['learn','hello']);
    const [addtodo, setAddTodo] = useState([]);

    return (
        <div>
            <div>
                <h1>Local State Management</h1>
                <h2>Current Count: {count}</h2>
                <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={() => setCount(count + 1)}>Increment</button>
                <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={() => setCount(count - 1)}>Decrement</button>
            </div>

            <div>
                <h1 className='text-danger'>Multiple States</h1>
                <form>
                    <input type="text" className='border p-2 mr-2'
                    placeholder='Name'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>
                        <input type="checkbox"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                        />
                        Remember Me
                    </label>
                    <p>Username: {username}</p>
                    <p>Remember Me: {isChecked ? "Yes" : "No"}</p>
                </form>
            </div>


            <div>
                <h1 className='text-danger'>Todo List</h1>

                {todo.map((item,index) =>(
                    <div key={index}>
                        <input type="checkbox" />
                        {item}
                    </div>
                ))}
                <form>
                    <input type="text" className='border p-2 mr-2' 
                    value={addtodo}
                    onChange={(e) => setAddTodo(e.target.value)}
                    placeholder='Input your todo list' />
                    <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded' 
                    onClick = {(e) =>{
                        e.preventDefault();
                        setTodo([...todo, addtodo]);
                        setAddTodo("");
                    }}
                    >Add Todo</button>
                </form>
            </div>
        </div>
    );
};

export default State;