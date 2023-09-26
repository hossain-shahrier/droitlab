// src/components/EmployeeProfile.jsx
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import employeeData from '../utils/employees.json';

const EmployeeProfile = () => {
    const navigate = useNavigate();
    const handleEmployeeClick = () => {
        navigate('/');
    };
    const { id } = useParams(); // Get the ID from the URL parameters
    const employee = employeeData.employees.find((emp) => emp.id === parseInt(id));

    if (!employee) {
        return <div>Employee not found.</div>;
    }

    return (
        <div className="w-full h-screen">
            <div className="h-full gap-10 flex m-10 flex-col justify-start ">
                <h2 className="text-2xl">Employee Profile</h2>
                <p><strong>Name:</strong> {employee.firstName} {employee.lastName}</p>
                <p><strong>Position:</strong> {employee.position}</p>
                <p><strong>Email:</strong> {employee.email}</p>
                <p><strong>Phone:</strong> {employee.phone}</p>
                <p><button onClick={() => handleEmployeeClick(employee)} className="border py-3 px-5">Back</button></p>

            </div>
        </div>
    );
};

export default EmployeeProfile;
