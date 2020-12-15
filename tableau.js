function initViz() {
    var containerDiv1 = document.getElementById("tableauViz"),
    url1 = "https://public.tableau.com/views/Test_16078906980950/home?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz1 = new tableau.Viz(containerDiv1, url1);
}

function initViz2() {
    var containerDiv1 = document.getElementById("tableauViz3"),
    url1 = "https://public.tableau.com/views/Test_16078906980950/top10andlast10?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz1 = new tableau.Viz(containerDiv1, url1);
    var containerDiv2 = document.getElementById("tableauViz4"),
    url2 = "https://public.tableau.com/views/Test_16078906980950/compare_gdp?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz2 = new tableau.Viz(containerDiv2, url2);
    var containerDiv3 = document.getElementById("tableauViz5"),
    url3 = "https://public.tableau.com/views/Test_16078906980950/compare_HLE?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz2 = new tableau.Viz(containerDiv3, url3);
    var containerDiv4 = document.getElementById("tableauViz6"),
    url4 = "https://public.tableau.com/views/Test_16078906980950/compare_Free?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz2 = new tableau.Viz(containerDiv4, url4);
    var containerDiv5 = document.getElementById("tableauViz7"),
    url5 = "https://public.tableau.com/views/Test_16078906980950/Compare_Corruption?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz2 = new tableau.Viz(containerDiv5, url5);
    var containerDiv6 = document.getElementById("tableauViz8"),
    url6 = "https://public.tableau.com/views/Test_16078906980950/Compare_Gen?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz2 = new tableau.Viz(containerDiv6, url6);
}

function initViz3(){
    var containerDiv1 = document.getElementById("tableauViz9"),
    url1 = "https://public.tableau.com/views/Test_16078906980950/WE_compare?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz1 = new tableau.Viz(containerDiv1, url1);
    var containerDiv2 = document.getElementById("tableauViz10"),
    url2 = "https://public.tableau.com/views/Test_16078906980950/EA_compare?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz2 = new tableau.Viz(containerDiv2, url2);
    var containerDiv3 = document.getElementById("tableauViz11"),
    url3 = "https://public.tableau.com/views/Test_16078906980950/ME_compare?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz2 = new tableau.Viz(containerDiv3, url3);
}