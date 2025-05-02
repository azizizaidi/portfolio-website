<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Display the home page.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('home');
    }

    /**
     * Display the privacy policy page.
     *
     * @return \Illuminate\View\View
     */
    public function privacy()
    {
        return view('pages.privacy');
    }

    /**
     * Display the terms of service page.
     *
     * @return \Illuminate\View\View
     */
    public function terms()
    {
        return view('pages.terms');
    }
}