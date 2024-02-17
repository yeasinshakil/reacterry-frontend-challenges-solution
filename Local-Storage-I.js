import React, { useState } from 'react';

const App = () => {
    // Edit this component
    const [value, setValue] = useState(localStorage.get(('inputValue') || ''))
    const handleChange = (e) => {
        setValue(e.target.value)
        localStorage.setItem('inputValue', e.target.value)
    }


    return (
        <div>
            <input
                data-testid="input-id"
                value={value}
                type="text"
            />
        </div>
    );
};

export default App;
