<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;
use Symfony\Component\HttpFoundation\Response;
class Authcontroller extends Controller

{
    public function register(Request $request)
    {
        $request -> validate([
            'firstName' => ['required', 'regex:/^[a-zA-Z]+$/'],
            'lastName' => ['required', 'regex:/^[a-zA-Z]+$/'],
            'email' => 'required|unique:users',
            'password' => [
                'required',
                'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/',
                'min:8', 
            ],
        ]);
        return User::create([
            'firstName' =>$request->input('firstName'),
            'lastName' =>$request->input('lastName'),
            'email' =>$request->input('email'),
            'password' =>Hash::make($request->input('password')),
        ]);
    }
    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email','password'))){
            return response([
                'message' =>'Invalid Credentials!'
            ],Response::HTTP_UNAUTHORIZED);
        }
        $user = $request->user();
        $token = $user->createToken('token')->plainTextToken;
        $cookie = Cookie::make('jwt', $token, minutes:60 *24);
        return response([
            'message' =>$user])->withCookie($cookie);
    }
    public function user()
    {
        return 'Authenticated user';
    }
}
