<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    // lebih baik pake fillable
    protected $guarded = [];

    // public function getRouteKeyName()
    // {
    //     return 'slug';
    // }

    public function subject()
    {
        return $this->belongsTo(Subject::class, 'subject_id');
    }
}
