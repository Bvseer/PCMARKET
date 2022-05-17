<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function auth(AuthRequest $request) {
        if($user = User::where('email', $request->email)->first())
        {
            if(Hash::check($request->password, $user->password))
            {
                $result['status'] = 'success';
                $result['code']   = 200;
                $result['message'] = 'Authorized';
            }
            else
            {
                $result['status'] = 'error';
                $result['code']   = 200;
                $result['message'] = 'Incorrect email or password';
            }
        }
        else
        {
            $result['status'] = 'error';
            $result['code']   = 403;
            $result['message']   = 'Email not found';
        }
        return $result;
    }
}
