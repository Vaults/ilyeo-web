<?php
/**
 * Created by Marcel on 9-7-2016. Returns all file names in the images/impression folder.
 * Unfortunately this is not trivially possible to do in HTML/JS so PHP was chosen.
 */

 $arr = scandir('../../images/impression');
 echo json_encode(array_slice($arr,2));
 ?>
