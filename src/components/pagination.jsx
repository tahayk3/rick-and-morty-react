function Pagination({ prev, next, anteriorP, siguienteP }) {
    const anterior = () => {
        anteriorP();
    };

    const siguiente = () => {
        siguienteP();
    };

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {
                    prev ?
                        <li className="page-item">
                            <button className="page-link" onClick={anterior}>Atras</button>
                        </li>
                        :
                        null
                }

                {
                    next ?
                        <li className="page-item">
                            <button className="page-link" onClick={siguiente}>Siguiente</button>
                        </li>
                        :
                        null
                }
            </ul>
        </nav>
    );
}

export default Pagination;