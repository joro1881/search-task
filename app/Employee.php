<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Employee extends Model{

    const COLUMN_NAME       = 'name';

    const COLUMN_PHONE      = 'phone';

    const COLUMN_DEPARTMENT = 'department';

    public static function searchByCriteria(string $employye, string $criteria)
    {
        $column    = $criteria === 'name' ? self::COLUMN_NAME : ($criteria === 'phone' ? self::COLUMN_PHONE : self::COLUMN_DEPARTMENT);
        $employyes = DB::table('employees')->where($column, 'LIKE', '%'.$employye.'%')->get();

        $employyes->transform(function ($item) {
            $item->email = implode(".", explode(' ', $item->name)).'@gmail.com';
            unset($item->created_at);
            unset($item->updated_at);

            return $item;
        });

        return $employyes;
    }
}
