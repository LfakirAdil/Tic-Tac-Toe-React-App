import {useState} from 'react'
import { logiqueDuJeu } from '../logiqueDuJeu'
import Bord from "./Bord"

const style = {
    width: '200px',
    margin: '20px auto',
}
const Jeu = () => {

    const [bord, setBord] = useState(Array(9).fill(null))
    const [xSuivant, setXSuivant] = useState(true)
    const vainqueur = logiqueDuJeu(bord)
    const handleClick = (index) => {
        const copieDuBord = [...bord];
        
        //si l'utilisateur a clicker sur une case deja occuper ou si le jeu est vaicu
        if (vainqueur || copieDuBord[index]) return; // return rien comme valeur
        //mettre un X ou un O dans la case 
        copieDuBord[index] = xSuivant ? 'X' : 'O';
        setBord(copieDuBord);
        setXSuivant(!xSuivant);

    }
    const sauterA = () => {
        
    }
    const afficherMouvements = () => {
        return (
            <button
                    onClick={() => {
                    setBord(Array(9).fill(null))
                    }}>
                Commencer le jeu !
            </button>
        )
        
    }
    
    return (
        <>
            <Bord carres={bord} onClick={handleClick} />
            <div style={style}>
                <p>{vainqueur ? 'Vainqueur!' + vainqueur : 'Joueur suivant :' + (xSuivant ? 'X' : 'O')}</p>
                {afficherMouvements()}
            </div>
        </>
    );
}
 
export default Jeu;