<?php

namespace App\Http\Controllers;
use App\Http\Requests\PatchRequest;
use Illuminate\Routing\Controller as BaseController;

class PatchController extends BaseController
{
//    use AuthorizesRequests, ValidatesRequests;
    public function __invoke(PatchRequest $request)
    {
        $data = $request->validated();
        return $data;
    }
}
