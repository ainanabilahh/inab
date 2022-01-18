<?php

namespace App\Http\Requests;
use Illuminate\Support\Facades\Auth;

use Illuminate\Foundation\Http\FormRequest;

class UpdateExpenseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id' => ['required'],
            'name' => ['required'],
            'amount' => ['required', 'numeric'],
            'category_id' => ['required'],
            'date' => ['date'],
            'link' => ['string', 'nullable'],
            'note' => ['string', 'nullable'],
            'tag' => ['string', 'nullable'],
        ];
    }
}
