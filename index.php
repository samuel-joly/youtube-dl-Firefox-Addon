<?php
    
    if($_GET["type"] == 1) {
        $_GET["type"] = "--no-playlist";
    } else {
        $_GET["type"] = "--yes-playlist";
    }

    if($_GET["content"] == 1) {
        $_GET["content"] = "-x --audio-format mp3";
    } else {
        $_GET["content"] = "--recode-video mp4";
    }
    $script = "youtube-dl ".$_GET["type"]." ".$_GET["content"]." ".$_GET["url"];
    echo $script;
    shell_exec($script);

?>
