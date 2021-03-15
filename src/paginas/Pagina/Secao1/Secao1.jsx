import {useContext, useEffect} from "react";
import { Context as PaginaContext } from '../Pagina.store'

export const Secao1 = () => {
    const [formulario, actions] = useContext(PaginaContext);

    useEffect(() => {
        // formulário foi atualizado. Fazer o que for importante.
        console.log(formulario);
    }, [formulario])

    return (
        <div>
            <label htmlFor="input1">Input 1</label>
            <input type="text" id="input1" value={formulario.input1} onChange={actions.handleInput1} />
        </div>
    )
}