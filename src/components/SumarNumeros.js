import img1 from "./../assets/images/img1.png";

function SumarNumeros(){

    var imageSize={
        width:"150px", height:"150px"
    }

    
    // var dato = "Suma de Numeros";
    const suma = (numero1, numero2) =>{
        //
        var sumar = numero1 + numero2;
         console.log(sumar);
    }
   
    return (
        <div>
            <img src={img1} style={imageSize} alt=""></img>

            <button onClick={ () => 
            suma(7,9)}>
                Suma 7 + 9
            </button>

        </div>
    )
}

export default SumarNumeros;