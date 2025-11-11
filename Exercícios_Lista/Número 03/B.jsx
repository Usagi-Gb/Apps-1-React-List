function ListaComidas() {
    const comidas = ['frango', 'peixe', 'strogonoff', 'fritas'];

    return (
        <div>
            <h2>Minhas Comidas Favoritas</h2>
            <ol>
                {comidas.map((comida, index) => (
                    <li key={index}>{comida}</li>
                ))}
            </ol>
        </div>
    )
}

export default ListaComidas;