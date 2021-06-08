const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

const Carre = ({ valeur, onClick }) => {

    return (
        <button
            style={style}
            onClick={onClick}>
        {valeur}
    </button>
    )
    }
export default Carre;