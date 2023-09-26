import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/addEmployee');
    };
    return (
        <div className="w-full h-20 flex justify-between items-center bg-gray-100 shadow-md">
            <div className="ml-3">
                <Link to="/">

                    <h1 className="text-lg">Employee</h1>
                </Link>
            </div>
            <div className="mr-3">
                <button className="border border-black py-3 px-5 hover:bg-blue-500 hover:w-full hover:text-white hover:border-none rounded-md focus:outline-none transition ease-in-out duration-300" onClick={() => handleClick()}>Add Employee</button>
            </div>
        </div>
    )
}
export default Header;
