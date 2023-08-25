export function Formulario(props){
    return(
        <div>
                <form action="/login" method="POST">
                    <div>
                    <label for="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required/>
                    </div>
                    <button type="submit">Iniciar Sesión</button>
                </form>
        </div>




    )
}