import {createContext, useState} from 'react';

const valorInicial = {
    input1: 'sou o input 1',
    input2: 'sou o input 2',
};

export const Context = createContext(null);

const Store = ({children}) => {

    // toda vez que meu formulário sofrer uma mudança quem consome o context renderiza novamente
    const [formulario, setFormulario] = useState(valorInicial);

    // Aqui eu gerencia as regras de negócio dos inputs

    const handleInput1 = (event) => {
        setFormulario({
            ...formulario,
            input1: event.target.value,
        })
    };

    const handleInput2 = (event) => {
        setFormulario({
            ...formulario,
            input2: event.target.value,
        })
    };

    // Aqui eu defino quais são as actions disponíveis para o usuário do context usar.
    const actions = {
        handleInput1,
        handleInput2,
    }

    return (
        <Context.Provider value={[formulario, actions]}>{children}</Context.Provider>
    )
}

export default Store;