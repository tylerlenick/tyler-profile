import PropTypes from 'prop-types'
import { Button } from './Button'

export const Header = ({title, name}) => {
    const onClick = () => {
        console.log('hehehehehee')
    }

    return (
        <header className='header'>
            <h1>{title} {name} FROM REACT!</h1>
            <Button color='green' onClick={onClick}  />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

Header.defaultProps = {
    title: 'default'
}

//LOCAL STYLE
/*const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
}*/