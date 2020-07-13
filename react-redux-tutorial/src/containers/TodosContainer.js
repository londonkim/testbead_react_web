import React from 'react'
import {connect} from 'react-redux'
import { changeInput, insert, toggle, remove} from '../modules/todos'
import Todos from '../components/Todos'

const TodosContainer = ({
    input,
    todos,
    changeInput,
    insert,
    toggle,
    remove
}) => {
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={todos}
            onRemove={remove}
        ></Todos>
    )
}

export default connect(
    // 비구조화 할당을 통해 todos를 분리
    // state.todos.input 대신 todos.input 사용
    ({todos}) => ({
        input: todos.input,
        todos: todos.todos
    }),
    {
        changeInput,
        
    }
)