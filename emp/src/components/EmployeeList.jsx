import { useNavigate } from 'react-router-dom';
import { fetchEmployees } from '../utils/api/api';
import { useEffect, useState } from 'react';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetchEmployees()
            .then((data) => setEmployees(data))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);
    const navigate = useNavigate();
    const handleEmployeeClick = (employee) => {
        navigate(`/employee/${employee.id}`);
    };
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-2">
                <div className="inline-block w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-4">#</th>
                                    <th scope="col" className="px-6 py-4">Firstname</th>
                                    <th scope="col" className="px-6 py-4">Lastname</th>
                                    <th scope="col" className="px-6 py-4">Position</th>
                                    <th scope="col" className="px-6 py-4">Email Address</th>
                                    <th scope="col" className="px-6 py-4">Phone Number</th>
                                    <th scope="col" className="px-6 py-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee) => (
                                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-200" key={employee.id}>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{employee.id}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{employee.firstname}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{employee.lastname}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{employee.position}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{employee.email}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{employee.phone}</td>
                                        <td>
                                            <button onClick={() => handleEmployeeClick(employee)}>View Profile</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default EmployeeList;
