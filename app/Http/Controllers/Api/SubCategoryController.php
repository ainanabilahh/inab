<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SubCategory;
use App\Http\Requests\StoreSubCategoryRequest;
use App\Http\Requests\UpdateSubCategoryRequest;
use App\Http\Resources\SubCategoryResource;
use Illuminate\Support\Facades\Log;

class SubCategoryController extends Controller
{
    public function index()
    {
        Log::info(SubCategory::all());
        return SubCategoryResource::collection(SubCategory::all());
    }

    public function create()
    {
        //
    }

    public function store(StoreSubCategoryRequest $request)
    {
        //
    }

    public function show(SubCategory $category)
    {
        //
    }

    public function edit(SubCategory $category)
    {
        //
    }

    public function update(UpdateSubCategoryRequest $request, SubCategory $category)
    {
        //
    }

    public function destroy(SubCategory $category)
    {
        //
    }
}
