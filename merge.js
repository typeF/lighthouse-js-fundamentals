function merge(array1,array2)
{
  //Merging the two arrays
  var array3 = array1;
  for (var i = 0; i < array2.length; i++)
  {
    array3.push(array2[i]);
  }

  //Counting sort
  var range = [];
  var final = [];

  //Populating range
  for(var x = 0; x < 65536; x++)
  {
    range[x] = 0;
  }

  //Addings counts to range's index
  for(var y = 0; y < array3.length; y++)
  {
    for (var z = 0; z < range.length; z++)
    {
      if (array3[y] == z)
      {
        range[z]++;
      }
    }
  }

  //Adding all sorted count values up
  for (var p = 1; p < 65536; p++)
  {
    range[p] += range[p - 1];
  }

 //New sorted array
  for (var a = 0; a < array3.length; a++)
  {
    for (var b = 0; b < range.length; b++)
    {
      if (array3[a] == b)
      {
      // take the contents of sorted[x] and make it the new index #
      // place array3[i] into the new index
        final[(range[b]) - 1] = array3[a];
        range[b]--;
      }
    }
  }
  return final;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);