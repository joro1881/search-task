<?php

namespace App\Http\Controllers;

use App\Employee;
use Illuminate\Http\Request;

class SearchController extends Controller{
    public function index()
    {
        if (request()->ajax()) {
            $searchValue = request()->has('searchValue') ? request()->input('searchValue') : '';
            $criteria    = request()->has('criteria') ? request()->input('criteria') : '';

            if (! empty($searchValue) && ! empty($criteria)) {
                $results = Employee::searchByCriteria($searchValue, $criteria);
                if ($results->isEmpty()) {
                    return response()->json(['error' => 'We couldn\'t find employee by given criteria'], 422);
                }

                return response()->json(['results' => $results], 200);
            } else {
                return response()->json(['error' => 'We couldn\'t find employee by given criteria'], 422);
            }
        }

        return view('welcome');
    }
}
