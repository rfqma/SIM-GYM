<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UpdateProfileController extends Controller
{

    public function edit()
    {
        $user = auth()->user();
        return Inertia::render('Profile/Edit', [
            'user' => $user,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $user = User::findOrFail($request->id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:20',
            'address' => 'required|string|max:255',
            'height' => 'required|numeric',
            'weight' => 'required|numeric',
            'gender' => 'required|string|in:L,P',
            'date_of_birth' => 'required|date',
            'foto' => 'nullable|image|max:2048',
            'password' => 'nullable|string|min:8|confirmed'
        ]);


        // simpan avatar ke public storage dan simpan path-nya ke database
        $avatarPath = $user->foto;
        if ($request->hasFile('foto')) {
            // Hapus file avatar lama jika ada
            if ($user->foto && Storage::disk('public')->exists($user->foto)) {
                Storage::disk('public')->delete($user->foto);
            }

            // Simpan file avatar baru
            $avatarPath = $request->file('foto')->store('assets/profile_photo', 'public');
        }

        $user->update([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'phone_number' => $validated['phone_number'],
            'address' => $validated['address'],
            'height' => $validated['height'],
            'weight' => $validated['weight'],
            'gender' => $validated['gender'],
            'date_of_birth' => $validated['date_of_birth'],
            'foto' => $avatarPath,
            'password' => $validated['password'] ? Hash::make($validated['password']) : $user->password,

        ]);

        return redirect()->route('profile.edit')->with('success', 'User updated successfully');
    }
}
