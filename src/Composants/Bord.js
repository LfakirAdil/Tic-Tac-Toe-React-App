import Carre from "./Carre"

const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
    
}

const Bord = ({carres,onClick}) => {
    return (
        <div style={style}>
            {carres.map((carre, index) => {
                
                return(
                    <Carre
                    key={index}
                    valeur={carre}
                    onClick={() => {onClick(index)}}
                />)
            })}
        </div>
    );
}
 
export default Bord;