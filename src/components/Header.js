import Typical from 'react-typical'

export const Header = () => {
    return (
        <header className='header mb-80'>
            <h1 className="font-semibold text-xl ml-10 md:ml-80 mt-40">Tyler Lenick</h1>
            <h1 className="font-semibold ml-10 md:ml-80">
                <Typical
                steps={["Hi, I'm Tyler", 1000, "Full Stack Developer, living in Atlanta.", 5000]}
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