import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchEmployee } from '../utils/api/api';

const EmployeeProfile = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        fetchEmployee(id)
            .then((data) => setEmployee(data.employee))
            .catch((error) => {
                console.error('Error fetching employee:', error);
            });
    }, [id]);

    const handleEmployeeClick = () => {
        navigate('/');
    };

    if (!employee) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full h-screen">
            <div className="h-full gap-10 flex m-10 flex-col justify-start ">
                <h2 className="text-2xl">Employee Profile</h2>
                <p><strong>Name:</strong> {employee.firstname} {employee.lastname}</p>
                <p><strong>Position:</strong> {employee.position}</p>
                <p><strong>Email:</strong> {employee.email}</p>
                <p><strong>Phone:</strong> {employee.phone}</p>
                <p><button onClick={handleEmployeeClick} className="border py-3 px-5">Back</button></p>
            </div>
        </div>
    );
};

export default EmployeeProfile;
