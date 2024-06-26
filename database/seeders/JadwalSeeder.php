<?php

namespace Database\Seeders;

use App\Models\jadwal;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JadwalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        jadwal::create([
            'id_user' => 9,
            'id_program' => 1,
            'hari' => 'Monday',
            'waktu_mulai' => '11:00:00',
            'waktu_selesai' => '13:00:00',
            'nama_ruangan' => 'Aula 1',
        ]);

        jadwal::create([
            'id_user' => 9,
            'id_program'=> 1,
            'hari' => 'Tuesday',
            'waktu_mulai' => '11:00:00',
            'waktu_selesai' => '13:00:00',
            'nama_ruangan' => 'Aula 2',
        ]);

        jadwal::create([
            'id_user' => 9,
            'id_program' => 2,
            'hari' => 'Wednesday',
            'waktu_mulai' => '11:00:00',
            'waktu_selesai' => '13:00:00',
            'nama_ruangan' => 'Aula 3',
        ]);

        jadwal::create([
            'id_user' => 9,
            'id_program' => 3,
            'hari' => 'Thursday',
            'waktu_mulai' => '11:00:00',
            'waktu_selesai' => '13:00:00',
            'nama_ruangan' => 'Aula 4',
        ]);
        jadwal::create([
            'id_user' => 9,
            'id_program' => 4,
            'hari' => 'Friday',
            'waktu_mulai' => '11:00:00',
            'waktu_selesai' => '13:00:00',
            'nama_ruangan' => 'Aula 4',
        ]);
    }
}
