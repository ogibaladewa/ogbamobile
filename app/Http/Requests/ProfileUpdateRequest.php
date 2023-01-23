<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['string', 'max:255'],
            // 'email' => ['email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
            'email' => ['email', 'max:255'],
            // 'no_hp' => ['no_hp', 'max:255'],
            // 'tanggal_lahir' => ['tanggal_lahir', 'max:255'],
            // 'jenis_kelamin' => ['jenis_kelamin', 'max:255'],
            // 'alamat' => ['alamat', 'max:255'],
        ];
    }
}
