<?php
/**
 * Created by Marcel on 9-7-2016.
 */
 $arr = scandir('../../images/impression');
 echo json_encode(array_slice($arr,2));
 ?>
