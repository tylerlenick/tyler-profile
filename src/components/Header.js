import PropTypes from 'prop-types'
import { Button } from './Button'
import Typical from 'react-typical'

export const Header = () => {
    return (
        <header className='header mb-80'>
            <h1 className="text-xl ml-10 md:ml-80 mt-40">Tyler Lenick</h1>
            <h1 className="ml-10 md:ml-80">
                <Typical
                steps={["Hi, I'm Tyler", 1000, "Full Stack Web Developer", 5000]}
                />
            </h1>
        </header>
    )
}

//DEFAULT AND PROP TYPES FOR REFERENCE
/*
Header.propTypes = {
}
Header.defaultProps = {
}
*/

//LOCAL STYLE
/*const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
}*/