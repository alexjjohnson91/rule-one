<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Inertia\Inertia;

class ProjectionController extends Controller
{
    public function index()
    {
        $companies = Company::all();

        return Inertia::render('projections/index', [
            'companies' => $companies,
        ]);
    }

    public function show($ticker)
    {
        $company = Company::firstOrCreate(['ticker' => $ticker]);

        return Inertia::render('projections/show', [
            'company' => $company,
        ]);
    }
}
