<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
            'name'     => 'required|min:2',
            'email'    => 'required|email|unique:users,email',
            'password' => 'required|min:6',
        ];
    }

    public function messages() {
        return [
            'name.required'     => __('card_number_is_required'),
            'name.min'          => __('card_number_is_required'),
            'email.required'    => __('card_valid_date_is_required'),
            'email.email'       => __('card_valid_date_is_required'),
            'email.unique'      => __('card_valid_date_is_required'),
            'password.required' => __('card_valid_date_is_required'),
            'password.min'      => __('card_valid_date_is_required'),
        ];
    }
}
