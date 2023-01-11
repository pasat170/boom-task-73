import "./App.css";
import React, { useState, useEffect } from 'react';
function App() {
    const [count, setCount] = useState(1);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    return (
        <div className="App">
            <section class="hero">
                <div class="hero-body">
                    <p class="title">A React Task</p>
                    <p class="subtitle">by Boom.dev</p>
                    <p>You clicked {count} times</p>
                    <button onClick={() => setCount(count + 1)}>
                        Click me
                    </button>
                </div>
            </section>
            <div class="container is-fullhd">
                <div class="notification">
                    Edit the <code>./src</code> folder to add components.
                </div>
            </div>
        </div>
    );
}

export default App;
