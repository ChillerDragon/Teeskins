<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UnlikeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index($assetType, $assetID) {
        if (DB::table('likes')->where(['assetType' => $assetType, 'assetID' => $assetID, 'userID' => Auth::id()])->delete()) {

            DB::table($assetType)->where('id' , '=', $assetID)->decrement('likes');
        }
    }
}
