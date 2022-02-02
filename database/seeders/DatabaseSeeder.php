<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Permission as PermissionModel;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $Permission=[
            'name' => 'Alter Permissions',
            'name_si' => 'අවසර වෙනස් කරන්න',
            'name_chi' => '更改权限',
            'description' => ''
        ];

        PermissionModel::create($Permission);
    }
}
