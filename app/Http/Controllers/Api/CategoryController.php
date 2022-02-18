<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Http\Requests\CategoryRequest;
use App\Http\Resources\CategoryResource;

class CategoryController extends Controller
{
    public function index()
    {
        return CategoryResource::collection(Category::orderBy('name')->get());
    }

    public function store(CategoryRequest $request)
    {
        $subCategory = Category::create($request->validated());

        return new CategoryResource($subCategory);
    }

    public function show(Category $subCategory)
    {
        return new CategoryResource($subCategory);
    }

    public function update(CategoryRequest $request, Category $subCategory)
    {
        $subCategory->update($request->validated());

        return new CategoryResource($subCategory);
    }

    public function destroy(Category $subCategory)
    {
        $subCategory->delete();

        return response()->noContent();
    }
}
