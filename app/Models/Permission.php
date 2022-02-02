<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User as UserModel;

class Permission extends Model
{
    use HasFactory;
    protected $fillable=[
        'name',
        'description'
    ];
    
    public function Users(){
        return $this->hasMany(UserModel::class);
    }
    
}
