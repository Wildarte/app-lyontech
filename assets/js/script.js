const header = document.querySelector('.header');
const height_header = header.getBoundingClientRect().height;
const top_sidebar = document.querySelector('.top_sidebar');
const content_inner = document.querySelector('.content_inner');
const side_menu = document.querySelector('.side_menu');
const width_side_menu = side_menu.getBoundingClientRect().width;
const body_content = document.querySelector('.body_content');
const btn_menu = document.querySelector('.btn_menu');
const btn_sidebar = document.getElementById('btn_sidebar');

const itens_single = document.querySelectorAll('.menu_sidebar li a span');
const user_info_sidebar = document.getElementById('user_info_sidebar');
const bottom_sidebar = document.querySelector('.bottom_sidebar a span');

document.addEventListener('DOMContentLoaded', () => {

    top_sidebar.style.height = height_header+"px";
    content_inner.style.height = "calc(100vh - "+height_header+"px)";
    //body_content.style.paddingLeft = width_side_menu+"px";
    side_menu.style.marginTop = "-"+height_header+"px";

    if(btn_sidebar){
        btn_sidebar.addEventListener('click', (e) => {

            if(e.target.classList.contains('active')){

                side_menu.classList.remove('width-min')
                itens_single.forEach((item) => {
                    item.style.display = "flex"
                });
                user_info_sidebar.style.display = "flex";
                bottom_sidebar.style.display = "flex"
                document.querySelector('.content_top_sidebar').style.justifyContent = "space-between";

                e.target.classList.remove('active');
            }else{
                side_menu.classList.add('width-min')
                itens_single.forEach((item) => {
                    item.style.display = "none"
                });
                user_info_sidebar.style.display = "none";
                bottom_sidebar.style.display = "none"
                document.querySelector('.content_top_sidebar').style.justifyContent = "center";

                e.target.classList.add('active');
            }

            

        });
    }

});




//======================== contratos ===============================================
const btn_table = document.getElementById('btn_table');
const table_contratos = document.getElementById('table_contratos');

if(btn_table){
    btn_table.addEventListener('click', () => {

        if(table_contratos.classList.contains('d-table')){
            table_contratos.classList.remove('d-table')
        }else{
            table_contratos.classList.add('d-table')
        }
    
    });
}

const add_modal = document.getElementById('add_modal');
const over_modal = document.querySelector('.over_modal');
const modal = document.querySelector('.modal');

if(add_modal){

    add_modal.addEventListener('click', () => {

        if(over_modal.classList.contains('open_over_modal')){
            over_modal.classList.remove('open_over_modal');
            modal.classList.remove('open_modal');

        }else{
            over_modal.classList.add('open_over_modal');
            setTimeout(function(){
                modal.classList.add('open_modal');
            },10)
        }
    
    });

    document.addEventListener('keydown', (e) => {
        let kd = e.key;

        if(kd == "Escape"){
            modal.classList.remove('open_modal');
            setTimeout(function(){
                over_modal.classList.remove('open_over_modal');    
            }, 100)
        }
    })
    

}
if(over_modal){
    over_modal.addEventListener('click', (e) => {

        if(e.target.classList.contains('open_over_modal')){
            
            modal.classList.remove('open_modal');
            setTimeout(function(){
                over_modal.classList.remove('open_over_modal');    
            }, 100)
        }

    });
}

//======================== contratos ===============================================
