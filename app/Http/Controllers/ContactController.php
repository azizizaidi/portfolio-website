<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;

class ContactController extends Controller
{
    /**
     * Handle the contact form submission
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function submit(Request $request)
    {
        // Validate form data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
            '_gotcha' => 'honeypot' // Honeypot field to catch spam bots
        ]);

        // If honeypot field is filled, it's likely a bot, but we'll silently "succeed"
        if (!empty($request->_gotcha)) {
            return redirect()->route('home', ['#contact'])->with('success', 'Your message has been sent successfully!');
        }

        // Remove honeypot field
        unset($validated['_gotcha']);
        
        // Send email
        try {
            Mail::to(env('MAIL_TO_ADDRESS', 'hello@azizizaidi.dev'))
                ->send(new ContactFormMail($validated));
            
            return redirect()->route('home', ['#contact'])->with('success', 'Your message has been sent successfully!');
        } catch (\Exception $e) {
            // Log the error but don't expose it to users
            \Log::error('Failed to send contact email: ' . $e->getMessage());
            
            return redirect()->route('home', ['#contact'])
                ->with('error', 'Sorry, something went wrong. Please try again later or contact me directly via email.')
                ->withInput();
        }
    }
}