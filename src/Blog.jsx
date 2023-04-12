import React from 'react';

const Blog = () => {
    return (
        <>
            <div className='text-start card gap-3'>
                <div className='card'>
                    <h5>1. When should you use context API?</h5>
                    <p>Answer: Context is primarily used when some data needs to be accessible by many components at different nesting levels.</p>
                </div>
                <div className='card'>
                    <h5>2. What is a custom hook?</h5>
                    <p>Answer: A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. </p>
                </div>
                <div className='card'>
                    <h5>3. What is useRef?</h5>
                    <p>Answer: useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference . </p>
                </div>
                <div className='card'>
                    <h5>4. What is useMemo?</h5>
                    <p>Answer: useMemo is a React Hook that lets you cache the result of a calculation between re-renders. const cachedValue = useMemo(calculateValue, dependencies) Reference.</p>
                </div>
            </div>
        </>
    );
};

export default Blog;