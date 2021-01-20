import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAdd, showAdd}) => {

    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                color = {showAdd ? 'Red' : 'Green'}
                text={showAdd ? 'Close' : 'Add'} 
                onClick = {onAdd}>
            </Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'Red', backgroundColor:'black'
// }

export default Header