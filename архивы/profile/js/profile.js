$('#close').click(() => {
    $('.modal').css('display', 'none');
})

$('.btn_add').click(() => {
    $('.modal').css('display', 'flex');
})

$('.item').click((e) => {
    $('.info_item').css('display', 'flex');
    let title = e.currentTarget.childNodes[1].textContent;
    let text = e.currentTarget.childNodes[3].textContent;
    let date = e.currentTarget.childNodes[5].textContent;
    $('.title_item').text(title);
    $('.title_text').text(text);
    $('.title_date').text(date);
})

$('.arr_btn').click(() => {
    $('.info_item').css('display', 'none');
})

$('.pen_btn').click(() => {
    $('.info_item').css('display', 'none');
    $('.modal').css('display', 'flex');
})

$('.del_btn').click(() => {
    $('.deleteElements').css('display', 'block');
})

$('.btn_cancel').click(() => {
    $('.deleteElements').css('display', 'none');
})
