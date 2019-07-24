<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class HomeController extends Controller
{
    function main() {
        $test  = DB::table('users')->get();
    }
}
