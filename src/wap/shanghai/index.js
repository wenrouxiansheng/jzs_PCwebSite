import React, { useState, useEffect, createRef } from 'react';

export default function Test() {
    const [count, setCount] = useState({ num: 1, ary: [12, 4] });
    const [count2, setCount2] = useState({ num: 1, ary: [12, 4] });
    useEffect(() => {
        console.log("asd")
    });
    return <div>
        <p>一共点了{count.num}次 {count.num + 1}</p>
        <button onClick={() => { setCount({ ...count, num: count.num + 1 }) }}>click me!</button>
        <button onClick={() => { setCount2({ ...count2, num: count2.num + 1 }) }}>click me2!</button>
    </div>
}