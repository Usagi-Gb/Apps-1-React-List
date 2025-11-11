import './App.css'
function BoasVindas({ usuario }) {
    return <h1>Bem vindo de volta, {usuario}!</h1>
}
export default function MyApp() {
    let user = prompt("Qual é o seu nome?")
    return <BoasVindas usuario={user} />
}
