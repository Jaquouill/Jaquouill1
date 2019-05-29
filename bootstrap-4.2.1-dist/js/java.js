$("#halo").mouseenter(function () {
    $('#halo').css('transform', 'scale(1.2)');
});
$("#halo").mouseleave(function () {
    $('#halo').css('transform', 'scale(1)');
});
$("#halo1").mouseenter(function () {
    $('#halo1').css('transform', 'scale(1.2)');
});
$("#halo1").mouseleave(function () {
    $('#halo1').css('transform', 'scale(1)');
});
$("#halo2").mouseenter(function () {
    $('#halo2').css('transform', 'scale(1.2)');
});
$("#halo2").mouseleave(function () {
    $('#halo2').css('transform', 'scale(1)');
});
$("#halo3").mouseenter(function () {
    $('#halo3').css('transform', 'scale(1.2)');
});
$("#halo3").mouseleave(function () {
    $('#halo3').css('transform', 'scale(1)');
});
$("#halo4").mouseenter(function () {
    $('#halo4').css('transform', 'scale(1.2)');
});
$("#halo4").mouseleave(function () {
    $('#halo4').css('transform', 'scale(1)');
});
$("#halo5").mouseenter(function () {
    $('#halo5').css('transform', 'scale(1.2)');
});
$("#halo5").mouseleave(function () {
    $('#halo5').css('transform', 'scale(1)');
});
$("#halo6").mouseenter(function () {
    $('#halo6').css('transform', 'scale(1.2)');
});
$("#halo6").mouseleave(function () {
    $('#halo6').css('transform', 'scale(1)');
});
$("#halo7").mouseenter(function () {
    $('#halo7').css('transform', 'scale(1.2)');
});
$("#halo7").mouseleave(function () {
    $('#halo7').css('transform', 'scale(1)');
});
$("#halo8").mouseenter(function () {
    $('#halo8').css('transform', 'scale(1.2)');
});
$("#halo8").mouseleave(function () {
    $('#halo8').css('transform', 'scale(1)');
});
var hero_villains = true;
$( "#boutonChangerTout" ).click(function() {
    if(hero_villains === true){
    $("#container").css("background-color", "black");
    $("#container").attr("class", "text-white");
    $("#boutonChangerTout").text("Mode de jour");
    hero_villains = false;
    }
    else if(hero_villains === false){
        $("#container").css("background-color", "darkturquoise");
        $("#container").attr("class", "text-black");
        $("#boutonChangerTout").text("Mode de nuit");
        hero_villains = true;
    }
});
var lasso = true;
$( "#boutonChanger5" ).click(function() {
    if(lasso === true){
        $("h2").html("Samurai est un nom officiel officiel au Japon depuis l'Antiquité jusqu'à l'époque médiévale. Ou un autre nom pour les guerriers qui ont évolué à partir de là. Pour plus de détails, voir la section sur Samurai.\n" +
            "\n" +
            "                Samurai est également l’une des racines du kanji. Pour plus de détails, reportez-vous à la section sur le Shibu.\n" +
            "\n" +
            "                Musique\n" +
            "                Samurai-Un groupe britannique formé en 1971. La même année, le même album est également sorti.\n" +
            "                Samurai (chanson de Sawada Kenji) - Le 22ème single de Kenji Sawada annoncé en 1978.\n" +
            "                SAMURAI (chanson de Tacky & Wings) - Le neuvième single avec Tackey & wings annoncé en 2007.\n" +
            "                SAMURAI (Album) - Le 17ème album de Takeshi Nagashima, sorti en 1998. \"One Monkey, One Song\", mentionné ci-dessus, a été enregistré et est devenu le nom de l'album.\n" +
            "                Photo\n" +
            "                Tsubaki (série télévisée dramatique) - série télévisée diffusée en 1960.\n" +
            "                Aoi (film) -Un film japonais sorti en 1965.\n" +
            "                Samurai (Movie) - Un film sorti en 1967. Avec Alain Delon.\n" +
            "                Samurai (Vidéo originale) - Vidéo originale publiée en 2012.");
        lasso = false;
    }
    else if(lasso === false){
        $("h2").html("サムライ（侍）は、古代から中世にかけての日本における官人の身分呼称。あるいはそこから発展的に生じた武士の別名。詳細は侍〔さむらい〕の項を参照。\n" +
            "\n" +
            "                また、さむらいとは漢字の部首の一つでもある。詳細は士部の項を参照。\n" +
            "\n" +
            "                音楽\n" +
            "                サムライ (Samurai) - 1971年に結成されたイギリスのバンド。同年、同名アルバムも発表。\n" +
            "                サムライ (沢田研二の曲) - 1978年に発表された沢田研二の22枚目のシングル。\n" +
            "                SAMURAI (タッキー&翼の曲) - 2007年に発表されたタッキー&翼の9枚目のシングル。\n" +
            "                SAMURAI (アルバム) - 1998年に発表された長渕剛の17枚目の音楽アルバム。前述の「猿一匹、唄えば侍」が収録され、これがアルバム名となった。\n" +
            "                映像\n" +
            "                侍 (テレビドラマ) - 1960年に放送されたテレビドラマ。\n" +
            "                侍 (映画) - 1965年に公開された日本映画。\n" +
            "                サムライ (映画) - 1967年に公開された映画。アラン・ドロン主演。\n" +
            "                サムライ (オリジナルビデオ) - 2012年に発売されたオリジナルビデオ。");
        lasso= true;
    }
});