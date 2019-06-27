<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css?family=Pacifico|Roboto" rel="stylesheet">
<title>Form test</title>
       <style>
        /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
        
        html {
            background-color:aqua;
        }
        h1 {
            font-family:'pacifico', 'fantasy'; color:white; margin-left:30px; text-align: center;
        }
        p {
            font-family:'Roboto', sans-serif; line-height:1.6; text-align: center;
        }
        #box {
            background-image:url("https://stmed.net/sites/default/files/chevrolet-bel-air-wallpapers-31961-5150796.jpg"); background-position:center; background-size:cover; height:110px; 
        }
        #box p {
            margin-left:10px; 
        }
        img {
            width:150px; margin-left:auto; margin-right:auto; display:block;
        }
        a:link {
            text-decoration:none;
        }
        form {
            margin-left:15px; margin-top:8px;
        }
        h3 {
            font-family:'roboto', 'sans-serif';
        }
    </style>
</head>
<body>
    <div id="box">
    <h1>Form downloaded successfully!</h1>
    </div>
<p>You submitted a form! Check your downloads for a new csv file! </p>
    <p>Don't see a download? <a href="formprocess.php">Click here.</a><br>
    Want to start another comparison? <a href="formcreate.html">Click here.</a></p>

</body>
</html>