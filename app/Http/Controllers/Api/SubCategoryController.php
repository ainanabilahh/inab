<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SubCategory;
use App\Http\Requests\SubCategoryRequest;
use App\Http\Resources\SubCategoryResource;
use Illuminate\Support\Facades\Log;

class SubCategoryController extends Controller
{
    public function index()
    {
        return SubCategoryResource::collection(SubCategory::orderBy('name')->get());
    }

    public function store(SubCategoryRequest $request)
    {
        $subCategory = SubCategory::create($request->validated());

        return new SubCategoryResource($subCategory);
    }

    public function show(SubCategory $subCategory)
    {
        return new SubCategoryResource($subCategory);
    }

    public function update(SubCategoryRequest $request, SubCategory $subCategory)
    {
        $subCategory->update($request->validated());

        return new SubCategoryResource($subCategory);
    }

    public function destroy(SubCategory $subCategory)
    {
        $subCategory->delete();

        return response()->noContent();
    }
}
