<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index($assetType, $assetID) {
        if (DB::table('likes')->insert(['assetType' => $assetType, 'assetID' => $assetID, 'userID' => Auth::id(), 'date' => NOW()])) {

            DB::table($assetType)->where('id' , '=', $assetID)->increment('likes');
        }
    }
}
