<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Permission as PermissionModel;
use App\Models\Page as PageModel;
use App\Models\PermissionsInPage as PermissionsInPageModel;
use App\Models\User as UserModel;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

use App\Models\jQueryTheme as jQueryThemeModel;

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
        
        $jQueryThemeData=[
            'name'=>'Le Frog'
        ];
        
        $jQueryTheme=jQueryThemeModel::create($jQueryThemeData);
        
        $jQueryThemeData=[
            'name'=>'UI Darkness'
        ];
        
        $jQueryTheme=jQueryThemeModel::create($jQueryThemeData);
        
//        $user_data=[
//            'name' => 'Damitha',
//            'email' => 'damitha.wizard@gmail.com',
//            'email_verified_at' => now(),
//            'password' => Hash::make('Damitha#1@a'),
//            'remember_token' => Str::random(10),
//            'created_at' => now(),
//            'updated_at' => now()
//        ];
//        
//        $user= UserModel::create($user_data);
//        
//        $page_data=[
//            'name' => 'View Permissions',
//            'description' => '',
//            'name_si' => 'අවසර වෙනස් කරන්න',
//            'description_si' => '',
//            'name_chi' => '更改权限',
//            'description_chi' => ''
//        ];
//
//        $page=PageModel::create($page_data);
//        
//        $user->AccessiblePages()->create($page);
//                
//        $page_data=[
//            'name' => 'Alter Permissions',
//            'description' => '',
//            'name_si' => 'අවසර වෙනස් කරන්න',
//            'description_si' => '',
//            'name_chi' => '更改权限',
//            'description_chi' => ''
//        ];
//
//        $page=PageModel::create($page_data);
//        
//        $user->AccessiblePages()->create($page);
    }
}
