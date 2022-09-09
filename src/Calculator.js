import {useState, useEffect} from 'react';

function Calculator(props){
    const [num1, setNum1] = useState(props.num1 == undefined ? 1: props.num1);
    const [num2, setNum2] = useState(props.num2 == undefined ? 1: props.num2);
    const [answer, setAnswer] = useState(0);
    const [operator, setOperator] = useState(props.operator == undefined ? '+': props.operator);

    const validateOperator = () =>{
        if(operator != '+' && operator != '-' && operator != '*' && operator != '/')
            setOperator('+');
    }

    useEffect(()=>{
        validateOperator();
    }, []);

    useEffect(()=>{
        if(num1 == NaN || num2 == NaN)
            return;
        switch(operator){
            case '+': setAnswer(num1 + num2);
                break;
            case '-': setAnswer(num1 - num2);
                break;
            case '*': setAnswer(num1 * num2);
                break;
            case '/': setAnswer(num1 / num2);
                break;
        }
    }, [num1, num2, operator]);

    return(<>
    <h1>Calculator</h1>
    <input type = "number" value = {num1}
    onInput = {(event) => {
        setNum1(parseFloat(event.target.value));
    }}
    />
    <select value = {operator} onChange={(event)=>{
        setOperator(event.target.value);
    }}>
    <option value='+'>+</option>
    <option value='-'>-</option>
    <option value='*'>*</option>
    <option value='/'>/</option>
    </select>
    <input type = "number" value = {num2}
    onInput = {(event) => {
        setNum2(parseFloat(event.target.value));
    }}
    />
    <span> = {answer} </span>
    </>)
}

export default Calculator;