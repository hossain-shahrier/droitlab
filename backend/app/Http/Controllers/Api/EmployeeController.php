<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use Dotenv\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator as FacadesValidator;

class EmployeeController extends Controller
{
    public function index()
    {
        $employees = Employee::all();

        if ($employees->isEmpty()) {
            $data = [
                'status' => 404,
                'message' => 'No employees found',
            ];
            return response()->json($data, 404);
        }
        $data = [
            'status' => 200,
            'employees' => $employees,
        ];
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {

        $employee = Employee::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'position' => $request->position,
            'email' => $request->email,
            'phone' => $request->phone,
        ]);
        if ($employee) {
            $data = [
                'status' => 201,
                'message' => 'Employee created successfully',
            ];
            return response()->json($data, 201);
        } else {
            $data = [
                'status' => 500,
                'message' => 'Error creating employee',
            ];
            return response()->json($data, 500);
        }
    }
    public function show($id)
    {
        $employee = Employee::find($id);

        if (!$employee) {
            $data = [
                'status' => 404,
                'message' => 'Employee not found',
            ];
            return response()->json($data, 404);
        }

        $data = [
            'status' => 200,
            'employee' => $employee,
        ];
        return response()->json($data, 200);
    }
}
