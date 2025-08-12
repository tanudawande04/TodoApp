import { useEffect, useState } from 'react';
import './Todo.css';
export const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);
    const [dateTime, setDateTime] = useState("");

    const handleValue = (value) => {
        setInputValue(value);

    }

    const handleFormSubmit = (event) => { //bcs form in refresing nature so.. we need preventdefault which is store old data.
        event.preventDefault(); // form;s default behaviour make prevent

        if (!inputValue) return;

        if (task.includes(inputValue)) {
            return;
        }

        setInputValue("");

        setTask((prevTask) => ([...prevTask, inputValue]))

        setInputValue("");
    }

    //Dte and Time

    useEffect(() => {
        const interval = setInterval(() => {

            const now = new Date();
            const formet = now.toLocaleDateString();
            const formatTime = now.toLocaleTimeString();
            setDateTime(`${formet} - ${formatTime}`);

        }, 1000);
        return () => clearInterval(interval);

    }, []);
    return (
        <section className='todo-container'>
            <header>
                <h1>ToDoApp</h1>
                <h2 className='DateTime'>
                    {dateTime}
                </h2>
            </header>
            <section className='form'>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type='text' className='todo-input' autoComplete='off'
                            value={inputValue} onChange={(event) => handleValue(event.target.value)} />
                    </div>

                    <div>
                        <button type='submit' className='todo-btn'>Add Task</button>
                    </div>
                </form>

            </section>

            <section>
                <ul className='unorderMap'>
                    {task.map((curr, idx) => {
                        return (
                            <li key={idx}>
                                <span>{curr}</span>
                                <button>
                                    <mdcheck />
                                </button>
                            </li>
                        )

                    })}
                </ul>
            </section>

        </section>
    );
}