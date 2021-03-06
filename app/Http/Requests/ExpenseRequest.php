<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ExpenseRequest extends FormRequest
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
            'sub_category_id' => ['required'],
            'transfer_to_id' => ['nullable'],
            'account_id' => ['required'],
            'date' => ['date'],
            'link' => ['string', 'nullable'],
            'note' => ['string', 'nullable'],
            'tag' => ['string', 'nullable'],
        ];
    }
}
