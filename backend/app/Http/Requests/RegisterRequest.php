<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'firstName' => ['required', 'regex:/^[a-zA-Z]+$/'],
            'lastName' => ['required', 'regex:/^[a-zA-Z]+$/'],
            'email' => 'required|email|unique:users',
            'password' => ['required', 'min:8', 'regex:/^(?=.*[A-Z])(?=.*\d).+$/']
        ];
    }

     /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages(): array
    {
        return [
            'password.regex' => 'The password must be at least 8 characters long and contain at least one uppercase letter and one number.',
        ];
    }
}
