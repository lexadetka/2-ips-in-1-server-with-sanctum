<?php

namespace App\Http\Controllers;


use App\Http\Requests\PostRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Hash;

class RegisterController extends BaseController
{
//    use AuthorizesRequests, ValidatesRequests;
    public function __invoke(RegisterRequest $request)
    {
        $data = $request->validated();
        unset($data['password_confirmation']);

        $data['password'] = Hash::make($data['password']);

        $user = User::create($data);

        return $user;
    }
}
