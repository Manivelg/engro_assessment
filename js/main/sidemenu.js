
// Sidemenu

let sidemenu_icon = ['zeedrive','sharedwithyou','trash'];
let sidemenu_name = ['Zee Drive','Shared with you', 'Trash'];

let combine = sidemenu_icon.map(function (x,i) {
    return `<li>
      <div class="side_one side${i}">
        <img src="asset/sidemenu/${sidemenu_icon[i]}.svg" class="side_pic" alt="Zee Drive" />
        <span class="side_name">${x}</span>
      </div>
    </li>`    
});

document.getElementById('side_nav').innerHTML=combine.join('');

//side menu

//sidemenu click function
$(".side0").click(function(){window.location.href='main_two.html';});


//No Data
