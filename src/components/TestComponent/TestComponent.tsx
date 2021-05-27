import React, { useState, useEffect } from 'react'
import './TestComponent.css'

/* const TestComponent e function TestComponent são duas maneiras de implementar o componente funcional */
// const TestComponent = () => (
//     <div className="TestComponent">Test Component</div>
// )

function TestComponent (props: { name: string }) {
    // const state = {
    //     age: 21
    // }

    const[age, setAge] = useState(21)

    useEffect(() => {
        console.log('Component was created')
    }, [])

    useEffect(() => {
        console.log('Age has been updated to: ' + age)
    }, [age])

    return <div className="TestComponent">
        {/* Olá, { props.name }, { state.age } */}
        Olá, { props.name }, { age }
        <button onClick= {() => {
            // state.age++
            // console.log(state.age)
            setAge(age + 1)
        }}>
            +
        </button>
    </div>
}
export default TestComponent