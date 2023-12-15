//Librerias
import { lineSpinner } from 'ldrs'
//Css
import "./LoaderComponent.css"

export const LoaderComponent = () => {

    lineSpinner.register()

    return (

        <div className='loader-stile'>
            <l-line-spinner
                size="100"
                stroke="3"
                speed="1"
                color="black"
            ></l-line-spinner>
        </div>

    )
}

