import Store from './Pagina.store';
import { Secao1 } from './Secao1/Secao1';

const Pagina = () => (
    <Store>
        <form action="">
            <Secao1/>
            {/* ... */}
            <button type={"submit"}>Submeter</button>
        </form>
    </Store>
)

export default Pagina;