import '../App.css';
import CustomButton from './CustomButton';

function Header(props) {
    return ( 
        <div className='header' >
            <h2>Want to add a task ?</h2>
            <div className='btnWrapper' >
                <CustomButton  click={props.handleInput}  name='Add' bg='#1877F2' color='white' />
            </div>

        </div>
     );
}

export default Header;