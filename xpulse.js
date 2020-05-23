//JS to show the text for selected radio button
var MetalBlack = document.getElementsByClassName("container")[0];

var con1 = document.getElementsByClassName("checkmark")[0];

var SportsRed = document.getElementsByClassName("container")[1];

var con2 = document.getElementsByClassName("checkmark")[1];

var KhakhiGreen = document.getElementsByClassName("container")[2];

var con3 = document.getElementsByClassName("checkmark")[2];

var PearlWhite = document.getElementsByClassName("container")[3];

var con4 = document.getElementsByClassName("checkmark")[3];

var ShineGrey = document.getElementsByClassName("container")[4];

var con5 = document.getElementsByClassName("checkmark")[4];

var ChangeBike = document.getElementById("fold1_bike");

con1.onclick = function () {
  MetalBlack.style.color = "#ffffff";
  KhakhiGreen.style.color = "#ee2326";
  PearlWhite.style.color = "#ee2326";
  ShineGrey.style.color = "#ee2326";
  SportsRed.style.color = "#ee2326";
  ChangeBike.src = "./Images/black.png";
};

con2.onclick = function () {
  MetalBlack.style.color = "#ee2326";
  KhakhiGreen.style.color = "#ee2326";
  PearlWhite.style.color = "#ee2326";
  ShineGrey.style.color = "#ee2326";
  SportsRed.style.color = "#ffffff";
  ChangeBike.src = "./Images/red.png";
};

con3.onclick = function () {
  MetalBlack.style.color = "#ee2326";
  KhakhiGreen.style.color = "#ffffff";
  PearlWhite.style.color = "#ee2326";
  ShineGrey.style.color = "#ee2326";
  SportsRed.style.color = "#ee2326";
  ChangeBike.src = "./Images/green.png";
};

con4.onclick = function () {
  MetalBlack.style.color = "#ee2326";
  KhakhiGreen.style.color = "#ee2326";
  PearlWhite.style.color = "#ffffff";
  ShineGrey.style.color = "#ee2326";
  SportsRed.style.color = "#ee2326";
  ChangeBike.src = "./Images/white.png";
};

con5.onclick = function () {
  MetalBlack.style.color = "#ee2326";
  KhakhiGreen.style.color = "#ee2326";
  PearlWhite.style.color = "#ee2326";
  ShineGrey.style.color = "#ffffff";
  SportsRed.style.color = "#ee2326";
  ChangeBike.src = "./Images/grey.png";
};

//JS to toggle between Share button and Sharing icons
var share = document.getElementById("social_share_but");

var social = document.getElementById("social_share");

share.onclick = function () {
  social.style.display = "flex";
  share.style.display = "none";
};

social.onmouseleave = function () {
  social.style.display = "none";
  share.style.display = "block";
};

/*JS to put animation in fold2*/
var fold2_info = document.getElementById("fold2_info");
var fold2_bike_specs = document.getElementById("fold2_bike_specs");
var fold2_head = document.getElementById("fold2_heading");
var fold2_subhead = document.getElementById("fold2_subheading");
var fold2_para1 = document.getElementsByClassName("fold2_para")[0];
var fold2_para2 = document.getElementsByClassName("fold2_para")[1];
var fold2_para3 = document.getElementsByClassName("fold2_para")[2];
var fold2_para4 = document.getElementsByClassName("fold2_para")[3];
var fold2_para5 = document.getElementsByClassName("fold2_para")[4];
var fold2_para6 = document.getElementsByClassName("fold2_para")[5];
var fold2_para7 = document.getElementsByClassName("fold2_para")[6];
var fold2_para8 = document.getElementsByClassName("fold2_para")[7];

var fold2_bike2 = document.getElementById("fold2_bike2");

fold2_info.onmouseenter = function () {
  fold2_info.style.backgroundColor = "black";
  fold2_head.style.color = "white";
  fold2_subhead.style.color = "white";
  fold2_para1.style.color = "white";
  fold2_para2.style.color = "white";
  fold2_para3.style.color = "white";
  fold2_para4.style.color = "white";
  fold2_para5.style.color = "white";
  fold2_para6.style.color = "white";
  fold2_para7.style.color = "white";
  fold2_para8.style.color = "white";
  fold2_bike2.style.opacity = 1;
};
fold2_bike_specs.onmouseenter = function () {
  fold2_info.style.backgroundColor = "black";
  fold2_head.style.color = "white";
  fold2_subhead.style.color = "white";
  fold2_para1.style.color = "white";
  fold2_para2.style.color = "white";
  fold2_para3.style.color = "white";
  fold2_para4.style.color = "white";
  fold2_para5.style.color = "white";
  fold2_para6.style.color = "white";
  fold2_para7.style.color = "white";
  fold2_para8.style.color = "white";
  fold2_bike2.style.opacity = 1;
};
fold2_info.onmouseleave = function () {
  fold2_info.style.backgroundColor = "white";
  fold2_head.style.color = "black";
  fold2_subhead.style.color = "black";
  fold2_para1.style.color = "black";
  fold2_para2.style.color = "black";
  fold2_para3.style.color = "black";
  fold2_para4.style.color = "black";
  fold2_para5.style.color = "black";
  fold2_para6.style.color = "black";
  fold2_para7.style.color = "black";
  fold2_para8.style.color = "black";
  fold2_bike2.style.opacity = 0;
};
fold2_bike_specs.onmouseleave = function () {
  fold2_info.style.backgroundColor = "white";
  fold2_head.style.color = "black";
  fold2_subhead.style.color = "black";
  fold2_para1.style.color = "black";
  fold2_para2.style.color = "black";
  fold2_para3.style.color = "black";
  fold2_para4.style.color = "black";
  fold2_para5.style.color = "black";
  fold2_para6.style.color = "black";
  fold2_para7.style.color = "black";
  fold2_para8.style.color = "black";
  fold2_bike2.style.opacity = 0;
};

var fold4_1 = document.getElementsByClassName("fold4_part")[0];
var fold4_2 = document.getElementsByClassName("fold4_part")[1];
var fold4_3 = document.getElementsByClassName("fold4_part")[2];
var fold4_4 = document.getElementsByClassName("fold4_part")[3];
var fold4_5 = document.getElementsByClassName("fold4_part")[4];

var fold4_slide_img = document.getElementById("fold4_slide_img");

var fold4_text = document.getElementById("fold4_text");

fold4_1.onclick = function () {
  fold4_slide_img.src = "./Images/fold4-1.jpg";
  fold4_text.innerHTML = "High tensile strength steel frame";
};
fold4_2.onclick = function () {
  fold4_slide_img.src = "./Images/fold4-2.jpg";
  fold4_text.innerHTML = "Durable and tuff tyres";
};
fold4_3.onclick = function () {
  fold4_slide_img.src = "./Images/fold4-3.jpg";
  fold4_text.innerHTML = "Flexible suspension";
};
fold4_4.onclick = function () {
  fold4_slide_img.src = "./Images/fold4-4.jpg";
  fold4_text.innerHTML = "Powerful exhaust";
};
fold4_5.onclick = function () {
  fold4_slide_img.src = "./Images/fold4-5.jpg";
  fold4_text.innerHTML = "Monster engine";
};

var fold5_spec = document.getElementById("fold5_spec");
var fold5_spec_right = document.getElementById("fold5_spec_right");
var fold5_caption = document.getElementById("fold5_caption");
var fold5_c1_r1 = document.getElementsByClassName("td1")[0];
var fold5_c1_r2 = document.getElementsByClassName("td1")[1];
var fold5_c1_r3 = document.getElementsByClassName("td1")[2];
var fold5_c1_r4 = document.getElementsByClassName("td1")[3];
var fold5_c1_r5 = document.getElementsByClassName("td1")[4];
var fold5_c1_r6 = document.getElementsByClassName("td1")[5];
var fold5_c1_r7 = document.getElementsByClassName("td1")[6];
var fold5_c1_r8 = document.getElementsByClassName("td1")[7];
var fold5_c1_r9 = document.getElementsByClassName("td1")[8];
var fold5_c1_r10 = document.getElementsByClassName("td1")[9];

var fold5_c2_r1 = document.getElementsByClassName("td2")[0];
var fold5_c2_r2 = document.getElementsByClassName("td2")[1];
var fold5_c2_r3 = document.getElementsByClassName("td2")[2];
var fold5_c2_r4 = document.getElementsByClassName("td2")[3];
var fold5_c2_r5 = document.getElementsByClassName("td2")[4];
var fold5_c2_r6 = document.getElementsByClassName("td2")[5];
var fold5_c2_r7 = document.getElementsByClassName("td2")[6];
var fold5_c2_r8 = document.getElementsByClassName("td2")[7];
var fold5_c2_r9 = document.getElementsByClassName("td2")[8];
var fold5_c2_r10 = document.getElementsByClassName("td2")[9];

fold5_spec.onmouseenter = function () {
  fold5_spec_right.style.backgroundColor = "black";
  fold5_caption.style.color = "white";
  fold5_c1_r1.style.color = "#969696";
  fold5_c1_r2.style.color = "#969696";
  fold5_c1_r3.style.color = "#969696";
  fold5_c1_r4.style.color = "#969696";
  fold5_c1_r5.style.color = "#969696";
  fold5_c1_r6.style.color = "#969696";
  fold5_c1_r7.style.color = "#969696";
  fold5_c1_r8.style.color = "#969696";
  fold5_c1_r9.style.color = "#969696";
  fold5_c1_r10.style.color = "#969696";
  fold5_c2_r1.style.color = "white";
  fold5_c2_r2.style.color = "white";
  fold5_c2_r3.style.color = "white";
  fold5_c2_r4.style.color = "white";
  fold5_c2_r5.style.color = "white";
  fold5_c2_r6.style.color = "white";
  fold5_c2_r7.style.color = "white";
  fold5_c2_r8.style.color = "white";
  fold5_c2_r9.style.color = "white";
  fold5_c2_r10.style.color = "white";
};

fold5_spec.onmouseleave = function () {
  fold5_spec_right.style.backgroundColor = "white";
  fold5_caption.style.color = "black";
  fold5_c1_r1.style.color = "#646464";
  fold5_c1_r2.style.color = "#646464";
  fold5_c1_r3.style.color = "#646464";
  fold5_c1_r4.style.color = "#646464";
  fold5_c1_r5.style.color = "#646464";
  fold5_c1_r6.style.color = "#646464";
  fold5_c1_r7.style.color = "#646464";
  fold5_c1_r8.style.color = "#646464";
  fold5_c1_r9.style.color = "#646464";
  fold5_c1_r10.style.color = "#646464";
  fold5_c2_r1.style.color = "black";
  fold5_c2_r2.style.color = "black";
  fold5_c2_r3.style.color = "black";
  fold5_c2_r4.style.color = "black";
  fold5_c2_r5.style.color = "black";
  fold5_c2_r6.style.color = "black";
  fold5_c2_r7.style.color = "black";
  fold5_c2_r8.style.color = "black";
  fold5_c2_r9.style.color = "black";
  fold5_c2_r10.style.color = "black";
};
