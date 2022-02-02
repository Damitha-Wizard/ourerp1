<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User as UserModel;
use App\Models\Page as PageModel;

class Permission extends Model
{
    use HasFactory;
    protected $fillable=[
        'name',
        'description',
        'name_chi',
        'description_chi'
    ];
    
    public function UsersHavingThisPermission(){
        return $this->hasMany(UserModel::class);
    }
    
    public function PagesHavingThisPermission(){
        return $this->hasMany(PageModel::class);
    }
    
}
