<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $users =Category::all();
        return response()->json($users);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {

        $user=new Category();
        $user->name=$request->name;
        $user->save();

        return response()->json("La categoria se ha creado",200);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = Category::find($id);
        $user->name=$request->name;
        $user->save();
        return response()->json("La categoria se ha actualizado",200);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user=Category::find($id);
        $user->delete();
        return response()->json("La categoria se ha eliminado",200);
        
    }
}
