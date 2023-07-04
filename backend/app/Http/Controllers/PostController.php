<?php

namespace App\Http\Controllers;


use App\Http\Requests\PostRequest;
use Illuminate\Routing\Controller as BaseController;

class PostController extends BaseController
{
//    use AuthorizesRequests, ValidatesRequests;
    public function __invoke(PostRequest $request)
    {
        $data = $request->validated();
        return $data;
    }
}
