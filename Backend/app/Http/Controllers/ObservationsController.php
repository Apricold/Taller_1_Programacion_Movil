<?php

namespace App\Http\Controllers;
use App\Models\Observation;
use Illuminate\Http\Request;

class ObservationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $users =Observation::all();
        return response()->json($users);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        $users=new Observation();
        $users->categories_id=$request->categories_id;
        $users->description=$request->description;
        $users->save();
        return response()->json("La descripcion se ha creado de manera correcta ",200);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $users= Observation::find($id);
        $users->categories_id=$request->categories_id;
        $users->description=$request->description;
        $users->save();
        return response()->json("La descripcion se ha actualizado de manera correcta ",200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request,string $id)
    {
        $users= Observation::find($id);
        $users->delete();
        return response()->json("La descripcion se ha eliminado de manera correcta ",200);
    }
}
